import { Link } from "react-router-dom";
import HomeThumbnail from "../HomeThumbnail";

/*
    Este componente mostrará un preview del contenido
    Al hacer clic en un thumbnail dirigirá directamente
    a esa 

    -Foto
    -Video
    -Producto
    -Contacto

    Si se hace clic en el título, dirige a la página general
    de fotos, videos, etc.
*/ 

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
    path: string;
    color?: "primary" | "secondary" | "dark" | "darkGray" | "black";
    size?: "sm" | "md" | "lg";
    transition?: number;
    children: React.ReactNode;
    className?: string;
  };

const ContentPreviewer = ({
    title = "Content",
    color = "primary",
    size = "md",
    path = "/",
    transition = 150,
    children,
    className = "",
  }: Props) => {
    const classNames =
    textSize[size] + " " + textColor[color] + " " + "transition ease-linear duration-"+String(transition) + className;
    return (
        <div className="mb-9">
            <Link to={path}>
                <h1 className={classNames}>{title}</h1>
            </Link>
            <hr className="m-3 ml-9"/>
            <div className="flex flex-nowrap flex-row ml-9">
                <HomeThumbnail className="" title="1" path="/"/>
                <HomeThumbnail className="" title="2" path="/"/>
                <HomeThumbnail className="" title="3" path="/"/>
                <HomeThumbnail className="" title="4" path="/"/>
            </div>
        </div>
    );
  };
  
  export default ContentPreviewer;
  