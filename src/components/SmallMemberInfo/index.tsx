/*
Este componente irá en el /about será la tarjeta de la
info de cada persona con 
*/

import { Children } from "react";

const positions = {
    right: "flex-row",
    left: "flex-row-reverse"
}

const colors = {
    primary: "bg-darkGray text-white",
    secondary: "bg-secondary text-white",
    dark: "bg-dark text-white hover:bg-darkGray",
    darkGray: "bg-darkGray text-white hover:bg-dark",
    black: "bg-black text-white hover:bg-darkGray",
  };

type Props = {
    name: string;
    position?: "right" | "left";
    photoSrc: string;
    children?: React.ReactNode;
    className?: string;
    color?: "primary" | "secondary" | "dark" | "darkGray" | "black";
  };

const SmallMemberInfo = ({
    name = "Miembro",
    photoSrc = "/",
    position = "left",
    color = "primary",
    children = ""
}:Props) => {

    return(
    <div className={" m-6 flex flex-nowrap " + positions[position]}>
        <img src={photoSrc} alt={name} 
        className = "m-10 aspect-square w-1/5 rounded-2xl"/>
        <div className={colors[color] + " m-10 p-6"}>
            {children}
        </div>
    </div>
    );
};

export default SmallMemberInfo