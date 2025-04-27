import { ReactNode, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

export function FooterLink({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  let timeoutId: NodeJS.Timeout;
  const handleToggle = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setOpen((prev) => !prev);
    }, 150);
  };
  return (
    <div className="flex h-auto flex-col lg:h-auto lg:max-h-[199px] lg:w-auto lg:max-w-[150px] lg:gap-[15px]">
      <button className="flex w-full justify-between" onClick={handleToggle}>
        <p className="text-body-medium-mobile font-bold text-[#222325] sm:text-body-medium">
          {label}
        </p>
        <div className="flex size-[24px] items-center justify-center lg:hidden">
          <MdArrowForwardIos />
        </div>
      </button>
      <div
        className={`${open === false ? "hidden" : "flex"} flex-col gap-[8px] text-body-medium-mobile font-medium text-dark-secondary sm:text-body-medium lg:flex lg:h-auto lg:max-h-[162px] lg:w-auto lg:max-w-[150px] lg:gap-[13px] lg:text-nowrap`}
      >
        {children}
      </div>
    </div>
  );
}
