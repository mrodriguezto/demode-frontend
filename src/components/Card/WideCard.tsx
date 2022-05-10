type Props = {
  imgSrc?: string;
  children: React.ReactNode;
};

export const WideCard = ({ imgSrc, children }: Props) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 border border-lightGray relative min-h-[200px]'>
      {imgSrc && (
        <div className='w-full h-full'>
          <img
            className='h-full max-h-44 sm:max-h-fit w-full object-cover min-h-[80px]'
            src={imgSrc}
            alt='Demodé logo'
          />
        </div>
      )}

      <div className={`${imgSrc ? "sm:col-span-2" : "sm:col-span-3"} p-4`}>
        {children}
      </div>
    </div>
  );
};
