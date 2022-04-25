import Img from "../../assets/hero-img.jpg";

type Props = {
  imgSrc?: string;
  children: React.ReactNode;
};

const WideCard = ({ imgSrc, children }: Props) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 border border-lightGray relative min-h-[200px]'>
      {imgSrc && (
        <div className='w-full h-full'>
          <img
            className='h-full max-h-44 sm:max-h-fit w-full object-cover min-h-[80px]'
            src='https://via.placeholder.com/468x40?text=Placeholder'
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

export default WideCard;
