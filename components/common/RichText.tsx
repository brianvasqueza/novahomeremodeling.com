type RichTextProps = {
  as?: 'h3' | 'blockquote' | 'span';
  className?: string;
  html: string;
};

export function RichText({ as = 'span', className, html }: RichTextProps) {
  const Tag = as;
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
