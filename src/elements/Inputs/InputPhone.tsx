import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

interface CountryCode {
  value: string;
  flag: string;
  code: string;
}

interface InputPhoneProps {
  label: string;
  onChange?: (fullNumber: string) => void;
}

const countryCodes: CountryCode[] = [
  { value: "+62", flag: "🇮🇩", code: "+62" }, // Indonesia
  { value: "+1", flag: "🇺🇸", code: "+1" }, // USA
  { value: "+91", flag: "🇮🇳", code: "+91" }, // India
];

export const InputPhone: React.FC<InputPhoneProps> = ({ label, onChange }) => {
  const [selectedCode, setSelectedCode] = useState(countryCodes[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumber = e.target.value;
    setPhoneNumber(newNumber);
    if (onChange) onChange(`${selectedCode.code}${newNumber}`);
  };

  const handleCountrySelect = (country: CountryCode) => {
    setSelectedCode(country);
    setDropdownOpen(false);
    if (onChange) onChange(`${country.code}${phoneNumber}`);
  };

  return (
    <div className="relative h-auto max-h-[76px] w-full sm:min-w-[518px]">
      <div className="flex h-auto max-h-[28px] w-[110px] gap-[4px] pb-[4px] pr-[16px]">
        <p className="text-nowrap font-body text-body-medium font-medium-regular tracking-medium text-[#333333AD] sm:text-[#4A505C]">
          {label}
        </p>
        <p className="font-subtitle text-subtitle tracking-subtitle text-[#D32E1F]">
          *
        </p>
      </div>
      <div className="flex gap-[12px] sm:gap-[24px]">
        <button
          type="button"
          className="flex items-center rounded-[6px] border-[1px] border-[#F1F1F1] bg-transparent"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <div className="flex h-full w-full items-center border-r bg-base px-[10px] py-[4px]">
            {selectedCode.flag}
          </div>
          <div className="flex h-full w-full items-center justify-between gap-[8px] px-[10px] py-[4px] sm:gap-[40px]">
            {selectedCode.code}
            <MdKeyboardArrowDown width={24} height={24} />
          </div>
        </button>

        <div className="flex h-auto min-h-[48px] w-full max-w-[518px] items-center justify-center rounded-[6px] border-[1px] border-[#F1F1F1]">
          <div className="flex h-auto max-h-[40px] w-full max-w-[498px] gap-[8px] py-[8px]">
            <input
              type="text"
              className="h-full w-full grow"
              value={phoneNumber}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      {dropdownOpen && (
        <ul className="absolute z-10 mt-1 w-28 rounded-md border bg-white shadow-md">
          {countryCodes.map((country) => (
            <li
              key={country.value}
              className="flex cursor-pointer items-center p-2 hover:bg-gray-200"
              onClick={() => handleCountrySelect(country)}
            >
              <span className="mr-2">{country.flag}</span>
              <span>{country.code}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
