import EventCard from "../components/EventCard";
import PageTitle from "../components/PageTitle";
import Spinner from "../components/Spinner";

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

export default EventsPage;
