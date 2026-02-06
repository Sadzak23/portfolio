import type { FC } from "react";

interface Props {
  label: string;
  id: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type?: HTMLInputElement["type"];
}

export const TextInput: FC<Props> = ({
  label,
  id,
  placeholder,
  value,
  onChange,
  required,
  type = "text",
}) => (
  <label htmlFor={id}>
    {label}
    <input
      id={id}
      name={id}
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </label>
);
