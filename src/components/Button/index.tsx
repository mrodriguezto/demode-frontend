const buttonSize = {
  sm: "py-2 px-6 text-sm",
  md: "py-3 px-8",
  lg: "py-4 px-10 text-lg",
};

const buttonColor = {
  primary: "bg-primary hover:bg-secondary",
  secondary: "bg-secondary hover:bg-primary",
  dark: "bg-dark hover:bg-darkGray",
  darkGray: "bg-darkGray hover:bg-dark",
  black: "bg-black hover:bg-darkGray",
};

type Props = {
  color?: "primary" | "secondary" | "dark" | "darkGray" | "black";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
};

const Button = ({
  color = "primary",
  size = "md",
  children,
  className = "",
}: Props) => {
  const classNames =
    buttonSize[size] + " " + buttonColor[color] + " " + className;
  return (
    <button className={`${classNames} transition ease-linear duration-150`}>
      {children}
    </button>
  );
};

export default Button;
