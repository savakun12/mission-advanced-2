import { ProfileSidebar } from "./ProfileSideBar/ProfileSIdebar";
import { ProfileContent } from "./ProfileContent/ProfileContent";

export function ProfileSection() {
  return (
    <div className="flex h-auto w-full flex-col gap-[24px] px-[20px] py-[28px] sm:max-w-[1200px] sm:flex-row sm:items-center sm:gap-[36px] sm:py-[64px]">
      <ProfileSidebar />
      <ProfileContent />
    </div>
  );
}
