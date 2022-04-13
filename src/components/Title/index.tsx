import { Link } from "react-router-dom";

const textSize = {
    sm: "my-4 py-4 px-10 text-3xl",
    md: "my-4 py-4 px-10 text-4xl",
    lg: "my-4 py-4 px-10 text-5xl",
  };

  const textColor = {
    primary: "text-white hover:text-secondary",
    secondary: "text-gray hover:text-primary",
    dark: "bg-dark hover:bg-darkGray",
    darkGray: "bg-darkGray hover:bg-dark",
    black: "bg-black hover:bg-darkGray",
  };

  type Props = {
    title: string;
    color?: "primary" | "secondary" | "dark" | "darkGray" | "black";
    size?: "sm" | "md" | "lg";
    className?: string;
  };

  const Title = ({
    title = "Content",
    color = "primary",
    size = "md",
    className = "",
  }: Props) => {
    const classNames =
    textSize[size] + " " + textColor[color] + " " +"transition ease-linear duration-"+ className;
    return (
        <div className="mb-8 pt-16">
            <h1 className={classNames}>{title}</h1>
            <hr className="ml-9"/>
        </div>
    );
  };
  
  export default Title;