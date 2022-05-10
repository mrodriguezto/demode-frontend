type Props = {
  title: string;
  className?: string;
  idName?: string;
};

export const PageTitle = ({
  title = "Título",
  className = "",
  idName = "",
}: Props) => {
  return (
    <div className={className}>
      <h2
        className='text-white font-title font-bold text-4xl text-center tracking-wider uppercase select-none'
        id={idName}
      >
        {title}
      </h2>
      <hr className='mx-auto my-8 w-[10%] border-2 border-white bg-white'></hr>
    </div>
  );
};
