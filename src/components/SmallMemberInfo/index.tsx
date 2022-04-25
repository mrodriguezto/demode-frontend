/*
Este componente irá en el /about será la tarjeta de la
info de cada persona con 
*/


const positions = {
    right: "lg:flex-row",
    left: "lg:flex-row-reverse"
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
    <div className={"mx-20 my-10 grid justify-items-center lg:flex "+positions[position]+" lg:flex-nowrap "+colors[color]}>
        <div className="w-1/3 lg:w-1/5 bg-black relative grid lg:content-center ">
            <img src={photoSrc} alt={name} className=" aspect-square" />
        </div>
        <div className={"w-full lg:w-4/5 m-2 p-6 text-white grid content-center"}>
            <h3 className="text-2xl mb-6">{name}</h3>
            {children}
        </div>
    </div>
    );
};

export default SmallMemberInfo