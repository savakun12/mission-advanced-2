export function Button({
  className,
  children,
  onClick,
  type,
}: {
  className: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className} flex w-full items-center justify-center rounded-[10px] hover:cursor-pointer`}
    >
      {children}
    </button>
  );
}
