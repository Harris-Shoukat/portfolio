interface TagProps {
  children: string;
}

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-block rounded-md border border-[#1F1F1F] bg-[#0A0A0A] px-2 py-0.5 text-[11px] font-medium text-[#A1A1AA]">
      {children}
    </span>
  );
}
