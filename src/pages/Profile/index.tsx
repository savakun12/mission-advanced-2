import { ProfileSection } from "@/components/ProfileSection";
import { Template } from "@/templates/Template";

export default function Profile() {
  return (
    <Template>
      <section className="flex justify-center">
        <ProfileSection />
      </section>
    </Template>
  );
}
