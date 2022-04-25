import DavidImg from "../../assets/member-david.png";
import DanielImg from "../../assets/member-dan.jpg";
import JulioImg from "../../assets/member-julio.jpeg";
import YairImg from "../../assets/member-yair.jpeg";

const MediaPreview = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 lg:grid-cols-4 my-10'>
      <div className=''>
        <img
          src={DavidImg}
          alt=''
          className='h-50 max-h-96 w-full object-cover'
        />
      </div>
      <div className=''>
        <img
          src={DanielImg}
          alt=''
          className='h-50 max-h-96 w-full object-cover'
        />
      </div>
      <div className=''>
        <img
          src={JulioImg}
          alt=''
          className='h-50 max-h-96 w-full object-cover'
        />
      </div>
      <div className=''>
        <img
          src={YairImg}
          alt=''
          className='h-50 max-h-96 w-full object-cover'
        />
      </div>
    </div>
  );
};

export default MediaPreview;
