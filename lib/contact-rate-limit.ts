import { createHash } from 'node:crypto';

type Bucket = { expires: number; submissions: Set<string> };
const buckets = new Map<string, Bucket>();
const WINDOW_MS = 10 * 60 * 1000;

// Best-effort protection per server instance; the honeypot and validation also apply.
export function contactRetryAfter(ip: string, email: string, submissionId: string, now = Date.now()) {
  for (const [key, bucket] of buckets) if (bucket.expires <= now) buckets.delete(key);
  const limits = [[`ip:${ip}`, 5], [`email:${email.toLowerCase()}`, 3]] as const;
  const entries = limits.map(([value, limit]) => ({ key: createHash('sha256').update(value).digest('hex'), limit }));
  for (const { key, limit } of entries) {
    const bucket = buckets.get(key);
    if (bucket && !bucket.submissions.has(submissionId) && bucket.submissions.size >= limit) return Math.ceil((bucket.expires - now) / 1000);
  }
  if (buckets.size >= 5000) return 60;
  for (const { key } of entries) {
    const bucket = buckets.get(key) ?? { expires: now + WINDOW_MS, submissions: new Set<string>() };
    bucket.submissions.add(submissionId);
    buckets.set(key, bucket);
  }
  return 0;
}
