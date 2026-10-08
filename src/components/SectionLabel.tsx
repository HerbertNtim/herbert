export function SectionLabel({
  children,
  id,
  as: Tag = "span",
}: {
  children: string;
  id?: string;
  as?: "span" | "h2";
}) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <Tag
        id={id}
        className="font-mono text-[11px] tracking-[0.2em] text-fg-tertiary uppercase"
      >
        {children}
      </Tag>
      <div className="section-divider flex-1" />
    </div>
  );
}
