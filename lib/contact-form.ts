import { BUDGET_OPTIONS, SCOPE_OPTIONS } from '@/data/content';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  timeline: string;
  scope: string[];
  budget: string;
  message: string;
}

export type ContactFieldErrors = Partial<Record<keyof ContactFormData, string>>;

export const CONTACT_LIMITS = { name: 120, email: 254, phone: 40, location: 200, message: 6000 };
export const TIMELINE_OPTIONS = ['Within three months', 'Within six months', 'Within a year', 'Exploring, no fixed date'];

export function validateContactForm(input: unknown): { data: ContactFormData; errors: ContactFieldErrors } {
  const value = input && typeof input === 'object' && !Array.isArray(input)
    ? input as Record<string, unknown> : {};
  const string = (key: string) => typeof value[key] === 'string' ? value[key].trim() : '';
  const data: ContactFormData = {
    name: string('name'), email: string('email'), phone: string('phone'),
    location: string('location'), timeline: string('timeline'), budget: string('budget'),
    message: string('message'),
    scope: Array.isArray(value.scope) ? [...new Set(value.scope.filter((s): s is string => typeof s === 'string'))] : [],
  };
  const errors: ContactFieldErrors = {};
  if (!data.name) errors.name = 'Please tell us your name.';
  else if (data.name.length > CONTACT_LIMITS.name || /[\r\n]/.test(data.name)) errors.name = 'Please enter a name under 120 characters.';
  if (!data.email) errors.email = 'We need an email to reply to.';
  else if (data.email.length > CONTACT_LIMITS.email || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(data.email)) errors.email = "That doesn't look like an email.";
  if (data.scope.length === 0 || data.scope.some((scope) => !SCOPE_OPTIONS.includes(scope))) errors.scope = 'Select the project type that fits best.';
  if (!BUDGET_OPTIONS.includes(data.budget)) errors.budget = 'Select the range that fits your scope.';
  if (data.timeline && !TIMELINE_OPTIONS.includes(data.timeline)) errors.timeline = 'Please select one of the available timelines.';
  if (data.message.length < 12) errors.message = 'A sentence about the home is enough to get started.';
  else if (data.message.length > CONTACT_LIMITS.message) errors.message = 'Please keep your message under 6,000 characters.';
  for (const key of ['phone', 'location'] as const) {
    if (data[key].length > CONTACT_LIMITS[key]) errors[key] = `Please keep this under ${CONTACT_LIMITS[key]} characters.`;
    else if (value[key] !== undefined && typeof value[key] !== 'string') errors[key] = 'Please enter text for this field.';
  }
  return { data, errors };
}
