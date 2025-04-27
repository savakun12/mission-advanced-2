import { Button } from "@/elements/Buttons";
import { InputTextProfile } from "@/elements/Inputs/InputTextProfile";
import { useProfile } from "@/hooks/profile/useProfile";

export function ProfileContent() {
  const {
    formData,
    handleChange,
    splitCountryCode,
    handleSubmit,
    handleDelete,
    errors,
  } = useProfile();
  return (
    <form
      className="flex h-auto w-full flex-col gap-[24px] rounded-[10px] border-[1px] border-border bg-primary-background p-[24px] sm:max-w-[872px]"
      onSubmit={handleSubmit}
    >
      <div className="flex h-auto w-full items-center gap-[14px] sm:max-w-[824px] sm:gap-[16px]">
        <img
          src={`${formData.avatar}`}
          alt="avatar"
          className="h-[60px] w-[60px] rounded-[4px] sm:h-[92px] sm:w-[92px]"
        />
        <div className="flex h-auto w-auto flex-col sm:gap-[8px]">
          <h5 className="font-heading font-heading-5 sm:text-heading-5">
            {formData.name}
          </h5>
          <p className="font-body font-large-regular tracking-large text-dark-primary sm:text-body-large">
            {formData.email}
          </p>
          <button className="text-medium text-left font-body font-medium-bold tracking-medium text-tertiary-default sm:text-body-medium">
            Ganti Foto Profile
          </button>
        </div>
      </div>
      <div className="h-[1px] w-full border-b-[1px] border-border"></div>
      <div className="flex w-full flex-col gap-[16px] sm:flex-row">
        <InputTextProfile
          value={formData.name}
          onChange={handleChange}
          name="name"
          label="Nama Lengkap"
          errors={errors.name}
        />
        <InputTextProfile
          value={formData.email}
          onChange={handleChange}
          name="email"
          label="E-Mail"
          errors={errors.email}
        />
        <div className="flex items-end gap-[16px]">
          <select
            name="phoneNumber"
            id=""
            className="m-0 h-[49px] w-auto max-w-[90px] rounded-[10px] border-[1px] border-border bg-transparent px-[12px]"
          >
            <option value="">+62</option>
            <option value="">+1</option>
            <option value="">+91</option>
          </select>
          <InputTextProfile
            value={splitCountryCode(formData.phoneNumber)?.number}
            onChange={handleChange}
            name="phoneNumber"
            label="No. Hp"
            errors={errors.phoneNumber}
          />
        </div>
      </div>
      <div className="flex w-full justify-end gap-[16px]">
        <Button
          type="button"
          onClick={handleDelete}
          className="max-w-[112px] rounded-[10px] bg-tertiary-default px-[26px] py-[10px] text-body-medium font-medium-bold tracking-medium text-light-primary"
        >
          Hapus
        </Button>
        <Button
          type="submit"
          className="max-w-[112px] rounded-[10px] bg-primary-default px-[26px] py-[10px] text-body-medium font-medium-bold tracking-medium text-light-primary"
        >
          Simpan
        </Button>
      </div>
    </form>
  );
}
