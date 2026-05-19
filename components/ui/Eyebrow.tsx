interface EyebrowProps {
  children: React.ReactNode;
  dark?: boolean;
  gold?: boolean;
}

export function Eyebrow({ children, dark = false, gold = false }: EyebrowProps) {
  const cls = ['eyebrow', dark && 'eyebrow--dark', gold && 'eyebrow--gold']
    .filter(Boolean)
    .join(' ');
  return <span className={cls}>{children}</span>;
}
