const items = ['Whole‑home', 'Kitchen', 'Primary suite', 'Bath', 'Additions', 'Outdoor', 'Heritage', 'Millwork'];

function MarqueeGroup() {
  return (
    <span>
      {items.map((it, i) =>
        i === 1 || i === 6 ? <em key={i}>{it}</em> : <span key={i}>{it}</span>,
      )}
    </span>
  );
}

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        <MarqueeGroup />
        <MarqueeGroup />
        <MarqueeGroup />
      </div>
    </div>
  );
}
