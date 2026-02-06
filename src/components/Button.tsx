import type { FC, ReactNode } from "react";

interface Props {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: HTMLButtonElement["type"];
  children?: ReactNode;
}

export const Button: FC<Props> = ({
  label,
  onClick,
  disabled,
  type,
  children,
}) => (
  <button
    className="button flex center gap-2"
    onClick={onClick}
    disabled={disabled}
    type={type}
  >
    {children ?? label}
  </button>
);
