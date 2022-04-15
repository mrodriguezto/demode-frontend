
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
    return(
        <h1 className="mt-40 text-white text-5xl text-center">{title}</h1>
    );
}

export default PageTitle;