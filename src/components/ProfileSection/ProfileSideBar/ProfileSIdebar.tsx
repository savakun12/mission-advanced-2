import { MdBook, MdPerson, MdShoppingBasket } from "react-icons/md";
import { NavLink } from "react-router";

export function ProfileSidebar() {
  return (
    <aside className="flex h-auto w-auto flex-col sm:max-w-[292px] sm:gap-[24px]">
      <div className="flex w-full flex-col sm:max-w-[292px] sm:gap-[10px]">
        <h5 className="font-heading text-heading-5 font-heading-5">
          Ubah Profil
        </h5>
        <p className="text-nowrap font-body text-body-medium font-medium tracking-medium text-dark-secondary">
          Ubah data diri Anda
        </p>
      </div>
      <div className="flex w-full flex-col rounded-[10px] border border-border bg-primary-background p-[24px] sm:max-w-[292px] sm:gap-[8px]">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex h-auto w-[244px] items-center gap-[12px] rounded-[4px] p-[12px] ${isActive ? "border border-border bg-secondary-100 text-secondary-default" : "text-dark-secondary"}`
          }
        >
          <MdPerson className="size-[24px]" />
          <p className="text-nowrap font-body text-body-large font-large-bold tracking-large">
            Profil Saya
          </p>
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            `pointer-events-none flex h-auto w-[244px] items-center gap-[12px] rounded-[4px] p-[12px] ${isActive ? "border border-border bg-secondary-100 text-secondary-default" : "text-dark-secondary"}`
          }
        >
          <MdBook className="size-[24px]" />
          <p className="text-nowrap font-body text-body-large font-large-bold tracking-large">
            Kelas Saya
          </p>
        </NavLink>
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `pointer-events-none flex h-auto w-[244px] items-center gap-[12px] rounded-[4px] p-[12px] ${isActive ? "border border-border bg-secondary-100 text-secondary-default" : "text-dark-secondary"}`
          }
        >
          <MdShoppingBasket className="size-[24px]" />
          <p className="text-nowrap font-body text-body-large font-large-bold tracking-large">
            Pesanan Saya
          </p>
        </NavLink>
      </div>
    </aside>
  );
}
