import { useLocation, useNavigate } from "react-router";
import { MdMenu } from "react-icons/md";

import { DropdownMenu } from "./DropdownMenu/DropdownMenu.tsx";
import { Navigation } from "./Navigation/Navigation.tsx";
import useIsOpenStore from "@/stores/dropDownStore.ts";

interface Props {
  islogin: boolean;
}

export function Navbar(props: Props) {
  const navigate = useNavigate();
  const { isOpen, setIsOpen } = useIsOpenStore();
  let timeoutId: NodeJS.Timeout;
  const isLogin = props.islogin;
  const location = useLocation();

  const handleToggle = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setIsOpen(!isOpen);
    }, 150);
  };
  return (
    <>
      <header className="flex flex-col items-center border-b border-b-border bg-primary-background">
        <nav className="flex h-auto max-h-[74px] w-full items-center justify-between px-[24px] py-[16px] sm:h-auto sm:max-h-[80px] sm:max-w-[1440px] sm:px-[120px] sm:py-[12px]">
          <button
            onClick={() => navigate("/")}
            className="flex h-[42px] w-[152px] items-center justify-between sm:h-[56px] sm:max-w-[937px] sm:gap-[80px]"
          >
            <img
              src="/images/Logo.png"
              alt="logo"
              className="left-[3.25px] top-[9.75px] h-[22.56px] w-[144.77px] sm:h-[30.08px] sm:w-[193.03px]"
            />
          </button>

          <Navigation login={isLogin} onClick={handleToggle} />

          <button
            className={`h-[24px] w-[24px] items-center justify-center ${location.pathname === "/login" || location.pathname === "/register" ? "hidden" : "flex sm:hidden"}`}
            onClick={handleToggle}
          >
            <MdMenu size={24} />
          </button>
        </nav>
      </header>
      <DropdownMenu login={isLogin} />
    </>
  );
}
