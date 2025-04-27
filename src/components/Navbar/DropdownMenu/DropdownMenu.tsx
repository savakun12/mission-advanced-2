import { Button } from "@/elements/Buttons";
import useIsOpenStore from "@/stores/dropDownStore";
import useIsLoginStore from "@/stores/loginStore";
import useUserStore from "@/stores/userStore";
import { useNavigate } from "react-router";

export function DropdownMenu({ login }: { login: boolean }) {
  const navigate = useNavigate();
  const { setIsLogin } = useIsLoginStore();
  const { setUser } = useUserStore();

  const { isOpen } = useIsOpenStore();

  const handleLogout = () => {
    setIsLogin(false);
    setUser([]);
    navigate("/login");
  };

  if (login === false) {
    return (
      <div
        className={`${isOpen === false ? "hidden" : "flex"} flex-col bg-primary-background sm:hidden`}
      >
        <div className="border-b border-border px-[12px] py-[16px]">
          Beranda
        </div>
        <div className="border-b border-border px-[12px] py-[16px]">
          Kategori
        </div>
        <div className="flex flex-col gap-[8px] p-[12px]">
          <Button
            type="button"
            onClick={() => navigate("/login")}
            className="rounded-[10px] bg-primary-default px-[26px] py-[10px] text-body-medium font-medium-bold tracking-medium text-light-primary"
          >
            Login
          </Button>
          <Button
            type="button"
            onClick={() => navigate("/register")}
            className="rounded-[10px] border border-primary-default px-[26px] py-[10px] text-body-medium font-medium-bold tracking-medium text-primary-default"
          >
            Register
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <ul
        className={`${isOpen === false ? "hidden" : "flex"} sm: h-auto w-full flex-col bg-primary-background p-[4px] sm:absolute sm:left-1/2 sm:hidden sm:w-[200px]`}
      >
        <li className="h-auto gap-[5px] border-b border-border px-[12px] py-[16px] font-body text-body-medium font-medium tracking-medium text-dark-secondary">
          Kategori
        </li>
        <li className="h-auto gap-[5px] border-b border-border px-[12px] py-[16px] font-body text-body-medium font-medium tracking-medium text-dark-secondary">
          Profil Saya
        </li>
        <li className="h-auto gap-[5px] border-b border-border px-[12px] py-[16px] font-body text-body-medium font-medium tracking-medium text-dark-secondary">
          Kelas Saya
        </li>
        <li className="h-auto gap-[5px] border-b border-border px-[12px] py-[16px] font-body text-body-medium font-medium tracking-medium text-dark-secondary">
          Pesanan Saya
        </li>
        <button
          onClick={handleLogout}
          className="h-auto gap-[5px] border-b border-border px-[12px] py-[16px] text-left font-body text-body-medium font-medium tracking-medium text-error-default"
        >
          Keluar
        </button>
      </ul>
    );
  }
}
