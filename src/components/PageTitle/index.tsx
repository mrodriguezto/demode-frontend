const textSize = {
  sm: "mt-40 select-none px-10 text-4xl text-center tracking-wider uppercase",
  md: "mt-40 select-none px-10 text-5xl text-center tracking-wider uppercase",
  lg: "mt-40 select-none px-10 text-6xl text-center tracking-wider uppercase",
};

type Props = {
  title: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const PageTitle = ({
    title = "Título",
    size = "md",
    className = "",
  }: Props) => {
    const classNames =
    textSize[size] + className + " ";    
    return(
      <div>
        <h1 className={classNames + "text-white"}>{title}</h1>
        <hr className="mx-auto my-8 w-[10%] border-2 border-white bg-white"></hr>
      </div>
    );
}

export default PageTitle;