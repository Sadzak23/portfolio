import type { LucideIcon } from "lucide-react";
import type { FC } from "react";

interface Props {
  label: string;
  icon?: LucideIcon;
  onClick?: () => void;
  variant?: "solid" | "outlined";
  size?: "s" | "m";
  disabled?: boolean;
  type?: HTMLButtonElement["type"];
  fullWidth?: boolean;
}

export const Button: FC<Props> = ({
  label,
  icon: Icon,
  onClick,
  variant = "solid",
  size = "m",
  disabled,
  type,
  fullWidth,
}) => (
  <button
    className={`button flex center gap-2 ${variant} ${size}${fullWidth ? " full-width" : ""}`}
    onClick={onClick}
    disabled={disabled}
    type={type}
  >
    {label}
    {Icon && <Icon />}
  </button>
);
