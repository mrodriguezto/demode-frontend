type Props = {
  fullsize?: boolean;
  children: React.ReactNode;
};

const Card = ({ children, fullsize = false }: Props) => {
  return (
    <div
      className={`bg-alterGray w-full ${
        fullsize ? "" : "sm:w-3/4 md:w-1/2 lg:w-4/12"
      }  p-7 py-9 shadow rounded-sm`}
    >
      {children}
    </div>
  );
};

export default Card;
