/*
Este componente irá en el /about será la tarjeta de la
info de cada persona con 
*/

/*
TODO:
- Centrar verticalmente el nombre del miembro de la banda
al hacer hover sobre la imagen
*/

const positions = {
    right: "flex-row",
    left: "flex-row-reverse space-x-reverse"
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
    <div className={" m-10 flex "+positions[position]+" flex-nowrap space-x-4 "}>
        <div className="w-2/3 bg-black rounded-2xl relative">
            <span className=
            "absolute w-full h-full text-2xl text-white bg-black select-none text-center opacity-0 hover:opacity-50"
            >{name}</span>
            <img src={photoSrc} alt={name} className=" aspect-square rounded-2xl hover:opacity-50" />
        </div>

        <div className={colors[color] + " m-10 p-6"}>
            {children}
        </div>
    </div>
    );
};

export default SmallMemberInfo