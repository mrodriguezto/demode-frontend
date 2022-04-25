type Props = {
  fullsize?: boolean;
  children: React.ReactNode;
  noPadding?: boolean;
  className?: string;
};

const Card = ({
  children,
  fullsize = false,
  noPadding = false,
  className = "",
}: Props) => {
  return (
    <div
      className={`bg-alterGray w-full ${
        fullsize ? "" : "sm:w-3/4 md:w-1/2 lg:w-4/12"
      } shadow rounded-sm ${noPadding ? "" : "px-7 py-9"} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
