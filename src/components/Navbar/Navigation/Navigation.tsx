import { Button } from "@/elements/Buttons";
import { useLocation, useNavigate } from "react-router";
import { Avatar } from "../Avatar/Avatar";

export function Navigation({
  login,
  onClick,
}: {
  login: boolean;
  onClick: () => void;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  if (
    (location.pathname === "/" && login === false) ||
    location.pathname === "/login" ||
    location.pathname === "/register"
  ) {
    return (
      <div
        className={`${location.pathname !== "/" || login ? "hidden" : "hidden sm:flex"} sm:gap-[36px]`}
      >
        <button className="text-body-medium font-medium tracking-medium text-dark-secondary">
          Kategori
        </button>
        <div className="flex sm:gap-[16px]">
          <Button
            type="button"
            onClick={() => navigate("/login")}
            className="rounded-[10px] bg-primary-default font-medium-bold tracking-medium text-light-primary sm:px-[26px] sm:py-[10px] sm:text-body-medium"
          >
            Login
          </Button>
          <Button
            type="button"
            onClick={() => navigate("/register")}
            className="rounded-[10px] border border-primary-default font-medium-bold tracking-medium text-primary-default sm:px-[26px] sm:py-[10px] sm:text-body-medium"
          >
            Register
          </Button>
        </div>
      </div>
    );
  } else {
    return <Avatar onClick={onClick} />;
  }
}
