const buttonSize = {
  sm: "py-2 px-3 text-sm",
  md: "py-3 px-5",
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
};

type Props = {
  color?:
    | "transparent"
    | "primary"
    | "secondary"
    | "dark"
    | "darkGray"
    | "black"
    | "alterGray";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  color = "primary",
  size = "md",
  children,
  className = "",
  onClick = () => {},
  type = "button",
}: Props) => {
  const classNames =
    buttonSize[size] + " " + buttonColor[color] + " " + className;
  return (
    <button
      className={`${classNames} font-semibold rounded-sm transition ease-linear duration-150`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
