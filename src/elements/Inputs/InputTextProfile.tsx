interface Props {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  errors?: string;
}

export function InputTextProfile(props: Props) {
  return (
    <div className="flex w-full flex-col sm:max-w-[264px]">
      <label className="relative left-[17px] top-[12px] z-10 w-fit bg-primary-background px-[5px] text-left font-body font-medium tracking-medium text-dark-secondary sm:text-body-medium">
        {props.label}
      </label>
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        className="h-[49px] w-full rounded-[10px] border-[1px] border-border px-[12px] sm:max-w-[264px]"
      />
      {props.errors && <p className="text-red-500">{props.errors}</p>}
    </div>
  );
}
