import dayjs from "dayjs";
import Button from "../Button";
import WideCard from "../WideCard/WideCard";

type EventCardProps = {
  title: string;
  description: string;
  url: string;
  place: string;
  starts_at: string;
};

const EventCard = ({
  description,
  place,
  starts_at,
  title,
  url,
}: EventCardProps) => {
  const formatedDate = dayjs(starts_at)
    .locale("es")
    .format("ddd DD MMM [de] YYYY - HH:mm");
  return (
    <WideCard>
      <div className='flex flex-col min-h-full'>
        <div>
          <small className='text-secondary text-sm font-body'>
            {formatedDate}
          </small>
          <h3 className='font-title font-bold text-xl text-white'>{title}</h3>
          <small className='text-gray-400 text-sm font-body'>{place}</small>
          <p className='text-gray-200 font-body'>{description}</p>
        </div>
        <div className='flex-1' />

        <a href={url} target='_blank'>
          <Button color='primary' size='sm' className='text-white px-6'>
            Adquirir entrada
          </Button>
        </a>
      </div>
    </WideCard>
  );
};

export default EventCard;
