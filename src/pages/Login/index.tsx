import { FormLogin } from "@/components/Forms/FormLogin/FormLogin";
import { Template } from "@/templates/Template";

export default function Login() {
  return (
    <Template>
      <section className="flex w-screen items-center px-[20px] py-[28px] sm:h-[800px]">
        <FormLogin />
      </section>
    </Template>
  );
}
