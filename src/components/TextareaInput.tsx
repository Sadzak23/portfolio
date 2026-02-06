import type { FC } from "react";

interface Props {
  label: string;
  id: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
}

export const TextareaInput: FC<Props> = ({
  label,
  id,
  placeholder,
  value,
  onChange,
  required,
  rows = 5,
}) => (
  <label htmlFor={id}>
    {label}
    <textarea
      id={id}
      name={id}
      required={required}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
    />
  </label>
);
