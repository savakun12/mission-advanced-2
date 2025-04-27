import { useState } from "react";

export function Tabs({ labels }: { labels: string[] }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="flex max-w-[320px] gap-[36px] overflow-auto text-nowrap sm:max-w-[612px]">
      {labels.map((label, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={`flex flex-col gap-[6px] ${activeTab === index ? "text-tertiary-default" : "text-dark-secondary"} focus:outline-none`}
        >
          <div className="py-[12px] text-body-medium-mobile font-medium tracking-medium sm:text-body-medium">
            {label}
          </div>
          <div
            className={`h-[6px] rounded-[10px] transition-all duration-300 ease-in-out ${activeTab === index ? `bg-tertiary-default` : ``}`}
          ></div>
        </button>
      ))}
    </div>
  );
}
