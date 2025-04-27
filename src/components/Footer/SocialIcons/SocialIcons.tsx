import { ReactNode } from "react";

export function SocialIcons({ icon }: { icon: ReactNode }) {
  return (
    <a
      href=""
      className="flex size-[35px] items-center justify-center rounded-full border-[1.5px] border-[#222325] border-opacity-35"
    >
      {icon}
    </a>
  );
}
