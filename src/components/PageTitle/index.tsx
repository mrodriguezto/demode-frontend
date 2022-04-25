type Props = {
  title: string;
  className?: string;
};

const PageTitle = ({ title = "Título", className = "" }: Props) => {
  return (
    <div className={className}>
      <h1 className='text-white font-title font-bold text-4xl text-center tracking-wider uppercase select-none'>
        {title}
      </h1>
      <hr className='mx-auto my-8 w-[10%] border-2 border-white bg-white'></hr>
    </div>
  );
};

export default PageTitle;
