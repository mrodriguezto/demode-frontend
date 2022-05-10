const positions = {
  right: "lg:flex-row",
  left: "lg:flex-row-reverse",
};

type Props = {
  memberName: string;
  photoSrc: string;
  position: "right" | "left";
  children?: React.ReactNode;
  className?: string;
};

export const MemberCard = ({
  memberName,
  photoSrc,
  position,
  children,
  className = "",
}: Props) => {
  const classNames = `mx-20 my-10 grid justify-items-center 
  lg:flex first-letter:lg:flex-nowrap bg-darkGray text-white ${positions[position]} ${className}`;

  return (
    <div className={classNames}>
      <div className='w-1/3 lg:w-1/5 bg-black relative grid lg:content-center '>
        <img src={photoSrc} alt={memberName} className='aspect-square' />
      </div>
      <div className={"w-full lg:w-4/5 m-2 p-6 text-white grid content-center"}>
        <h3 className='text-2xl mb-6'>{memberName}</h3>
        {children}
      </div>
    </div>
  );
};
