type JsonLdProps = {
  data: Record<string, unknown> | null | (Record<string, unknown> | null)[];
};

export function JsonLd({ data }: JsonLdProps) {
  const entries = (Array.isArray(data) ? data : [data]).filter(
    (entry): entry is Record<string, unknown> => Boolean(entry),
  );

  if (entries.length === 0) {
    return null;
  }

  return (
    <>
      {entries.map((entry, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(entry).replace(/</g, '\u003c'),
          }}
        />
      ))}
    </>
  );
}
