import dayjs from "dayjs";
import { Link } from "react-router-dom";
import WideCard from "../WideCard/WideCard";

type NewsCardProps = {
  url: string;
  title: string;
  description: string;
  date: string;
  imgUrl: string;
};

const NewsCard = ({ url, title, description, date, imgUrl }: NewsCardProps) => {
  const formatedDate = dayjs(date)
    .locale("es")
    .format("ddd DD MMM [de] YYYY - HH:mm");
  return (
    <Link className='hover:opacity-90 transition duration-200' to={url}>
      <WideCard imgSrc={imgUrl}>
        <small className='text-secondary text-sm font-body'>
          {formatedDate}
        </small>
        <h3 className='font-title font-bold text-xl'>{title}</h3>
        <p className='text-gray-200 font-body'>{description}</p>
      </WideCard>
    </Link>
  );
};

export default NewsCard;
