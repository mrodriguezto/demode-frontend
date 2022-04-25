import { Sizes, ThemeColors } from "../../types/styleTypes";

const buttonSize = {
  sm: "py-2 px-4 text-sm",
  md: "py-3 px-6",
  lg: "py-4 px-8 text-lg",
};

const buttonColor = {
  transparent: "bg-transparent hover:bg-gray-900",
  primary: "bg-primary hover:bg-secondary",
  secondary: "bg-secondary hover:bg-primary",
  dark: "bg-dark hover:bg-gray-800",
  darkGray: "bg-darkGray hover:bg-gray-800",
  black: "bg-black hover:bg-gray-900",
  alterGray: "bg-alterGray hover:bg-gray-900",
  lightGray: "bg-lightGray hover:bg-gray-900",
};

type Props = {
  color?: ThemeColors;
  size?: Sizes;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  dataToggle?: string;
  dataTarget?: string;
  dataDismiss?: string;
};

const Button = ({
  color = "primary",
  size = "md",
  children,
  className = "",
  onClick = () => {},
  type = "button",
  disabled = false,
  dataToggle = "",
  dataTarget = "",
  dataDismiss = "",
}: Props) => {
  const classNames =
    buttonSize[size] + " " + buttonColor[color] + " " + className;
  return (
    <button
      className={`${classNames} font-medium font-title rounded-sm transition ease-linear duration-150 disabled:bg-dark disabled:text-gray-600 shadow-md text-white`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      data-bs-toggle={dataToggle}
      data-bs-target={dataTarget}
      data-bs-dismiss={dataDismiss}
    >
      {children}
    </button>
  );
};

export default Button;
