import { Link } from "react-router-dom";

/*
    Este componente serán los thumbnail en el home
    para que se pueda ingresar directamente
    a una

    -Foto
    -Video
    -Producto
    -Contacto

    en específico directamente
*/ 

/*

TODO: 

Cuando ya existan las páginas de
    -Foto
    -Video
    -Producto
    -Contacto

    en específico, modificar para que aparezcan como imágenes
    en lugar de no tener nada dentro del <Link>
*/

const sizes = {
    sm: "w-[100%] aspect-video m-10 rounded-md",
    md: "w-[100%] aspect-video m-10 rounded-md",
    lg: "w-[100%] aspect-video m-10 rounded-md",
  };

type Props = {
    title: string;
    path: string;
    size?: "sm" | "md" | "lg";
    transition?: number;
    children?: React.ReactNode;
    className?: string;
  };

const HomeThumbnail = ({
    title = "",
    size = "md",
    path = "/",
    transition = 150,
    children = "",
    className = "",
}:Props) => {
    const classNames =
    sizes[size] + " " + "shrink transition ease-linear duration-"+String(transition) + className;
    return(
        <Link className={classNames + " bg-gray-300"} to={path}>
        </Link>
    );
}
    
export default HomeThumbnail;