import { useContext } from "react";
import Button from "../components/Button";
import EventCard from "../components/EventCard";
import PageTitle from "../components/PageTitle";
import Spinner from "../components/Spinner";
import { AuthContext } from "../context/AuthContext";
import NewEventModal from "../components/Modal/NewEventModal";

import useEvents from "../hooks/useEvents";

const EventsPage = () => {
  const { events, isLoading, addEvent } = useEvents();
  const { status } = useContext(AuthContext);

  return (
    <div className='pt-36'>
      <PageTitle title='Eventos' />
      {isLoading || status === "checking" ? (
        <div className='w-full flex items-center justify-center'>
          <Spinner size='lg' />
        </div>
      ) : events.length == 0 ? (
        <div className='text-center'>Aún no hay publicaciones.</div>
      ) : (
        <div className='min-h-full container lg:max-w-5xl mx-auto px-0 sm:px-8 py-4'>
          {status === "authenticated" && (
            <div className='flex justify-end mb-8'>
              <Button dataToggle='modal' dataTarget='#newEventModal'>
                Añadir nuevo producto
              </Button>
            </div>
          )}
          <div className='min-h-full grid md:grid-cols-2 gap-x-8 gap-y-4 '>
            {events.map((item) => (
              <EventCard
                id={item._id}
                url={item.url}
                title={item.title}
                starts_at={item.starts_at}
                description={item.description}
                place={item.place}
                admin={status === "authenticated"}
              />
            ))}
          </div>
        </div>
      )}
      <NewEventModal callback={addEvent} />
    </div>
  );
};

export default EventsPage;
