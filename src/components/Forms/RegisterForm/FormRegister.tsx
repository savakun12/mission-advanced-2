import { useNavigate } from "react-router";

import { Button } from "@/elements/Buttons";
import { InputText } from "@/elements/Inputs/InputText";
import { InputPhone } from "@/elements/Inputs/InputPhone";
import { useRegister } from "@/hooks/Register/useRegister";

export function FormRegister() {
  const navigate = useNavigate();
  const {
    message,
    formData,
    handleChange,
    handlePhoneChange,
    handleSubmit,
    errors,
  } = useRegister();

  return (
    <form
      onSubmit={handleSubmit}
      className="m-auto flex h-auto w-full flex-col gap-[20px] rounded-[4px] border-[1px] border-[#F1F1F1] bg-primary-background p-[20px] sm:max-w-[590px] sm:gap-[36px] sm:p-[36px]"
    >
      <div className="flex h-auto w-auto flex-col gap-[10px] text-center sm:max-h-[67px] sm:max-w-[525px]">
        <h3 className="font-heading text-heading-3-mobile font-heading-3 sm:text-heading-3">
          Pendaftaran Akun
        </h3>
        <p className="font-body text-body-medium-mobile font-medium text-dark-secondary sm:text-body-medium">
          Yuk, daftarkan akunmu sekarang juga!
        </p>
      </div>
      <div className="flex h-auto w-full flex-col gap-[20px] sm:w-auto sm:max-w-[518px] sm:gap-[24px]">
        <div className="flex h-auto w-auto flex-col gap-[24px] sm:max-w-[518px]">
          <div className="flex h-auto w-auto flex-col gap-[12px] sm:max-w-[518px] sm:gap-[16px]">
            <InputText
              label="Nama Lengkap"
              name="name"
              formType="text"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}

            <InputText
              label="E-mail"
              name="email"
              formType="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}

            <InputPhone label="No. Hp" onChange={handlePhoneChange} />
            {errors.phoneNumber && (
              <p className="text-red-500">{errors.phoneNumber}</p>
            )}
            <InputText
              label="Kata Sandi"
              name="password"
              formType="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}

            <InputText
              label="Konfirmasi Kata Sandi"
              name="confirmPassword"
              formType="password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword}</p>
            )}

            <a
              href=""
              className="w-full text-right font-body text-body-medium-mobile font-medium-medium tracking-medium text-dark-secondary sm:text-body-medium"
            >
              Lupa Password?
            </a>
          </div>
          <p className="text-green-500">{message}</p>

          <div className="flex h-full max-h-[84px] w-full flex-col gap-[16px] sm:max-h-[100px] sm:max-w-[518px]">
            <Button
              children="Daftar"
              type="submit"
              className="bg-primary-default py-[7px] font-medium-bold text-light-primary hover:bg-primary-hover sm:py-[10px]"
            />
            <Button
              children="Masuk"
              type="button"
              onClick={() => {
                navigate("/login");
              }}
              className="bg-primary-100 py-[7px] font-medium-bold text-primary-default hover:bg-primary-200 sm:py-[10px]"
            />
          </div>
        </div>
        <div className="flex h-[22px] w-full max-w-[518px] items-center justify-center gap-[10px]">
          <div className="z-0 h-[2px] w-[518px] border"></div>
          <p className="text-medium absolute left-1/2 flex h-auto max-h-[22px] w-auto max-w-[50px] -translate-x-1/2 transform gap-[10px] bg-primary-background px-[8px] font-body font-medium-regular tracking-medium text-[#4A505C]">
            atau
          </p>
        </div>
        <Button
          className="border bg-primary-background py-[7px] text-[#4A505C] sm:py-[10px]"
          type="button"
          onClick={() => navigate("/register-google")}
        >
          <div className="flex items-center justify-center gap-[8px] font-body font-medium-bold">
            <img src="/icons/logos_google-icon.svg" alt="google-icon" /> Daftar
            dengan Google
          </div>
        </Button>
      </div>
    </form>
  );
}
