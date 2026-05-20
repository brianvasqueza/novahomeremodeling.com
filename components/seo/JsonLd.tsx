type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  const entries = Array.isArray(data) ? data.filter(Boolean) : [data];

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
