import dayjs from "dayjs";
import Button from "../components/Button";
import PageTitle from "../components/PageTitle";
import Spinner from "../components/Spinner";
import WideCard from "../components/WideCard/WideCard";

import useEvents from "../hooks/useEvents";

const EventsPage = () => {
  const { events, isLoading } = useEvents();

  return (
    <div className='pt-36'>
      <PageTitle title='Eventos' />
      {isLoading ? (
        <div className='w-full flex items-center justify-center'>
          <Spinner size='lg' />
        </div>
      ) : events.length == 0 ? (
        <div className='text-center'>Aún no hay publicaciones.</div>
      ) : (
        <div className='min-h-full grid md:grid-cols-2 gap-x-8 gap-y-4 container lg:max-w-5xl mx-auto px-0 sm:px-8 py-10'>
          {events.map((item) => (
            <EventCard
              url={item.url}
              title={item.title}
              starts_at={item.starts_at}
              description={item.description}
              place={item.place}
            />
          ))}
        </div>
      )}
    </div>
  );
};

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

export default EventsPage;
