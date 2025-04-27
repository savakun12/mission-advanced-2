import { FormRegister } from "@/components/Forms/RegisterForm/FormRegister";
import { Template } from "@/templates/Template";

export default function Register() {
  return (
    <Template>
      <section className="w-screen flex-col px-[20px] py-[28px]">
        <FormRegister />
      </section>
    </Template>
  );
}
