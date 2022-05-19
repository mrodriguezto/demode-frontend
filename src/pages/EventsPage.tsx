import { useContext, useState } from "react";
import { Button } from "../components/Button";
import { EventCard } from "../components/Card";
import { PageTitle } from "../components/Title";
import { Spinner } from "../components/Spinner";
import { AuthContext } from "../context/AuthContext";
import { NewEventModal } from "../components/Modal";
import { useGetEventsQuery } from "../store/services/events";

const EventsPage = () => {
  const [isOpened, setIsOpened] = useState(false);
  const { status } = useContext(AuthContext);
  const { data: events = [], isLoading } = useGetEventsQuery();

  return (
    <div className='pt-36'>
      <PageTitle title='Eventos' />
      <div className='min-h-full container lg:max-w-5xl mx-auto px-0 sm:px-8 py-4'>
        {status === "authenticated" && (
          <div className='flex justify-end mb-8'>
            <Button onClick={() => setIsOpened(true)}>
              Añadir nuevo evento
            </Button>
          </div>
        )}
        {isLoading || status === "checking" ? (
          <div className='w-full flex items-center justify-center'>
            <Spinner size='lg' />
          </div>
        ) : events.length == 0 ? (
          <div className='text-center text-white'>
            Aún no hay publicaciones.
          </div>
        ) : (
          <div className='min-h-full grid md:grid-cols-2 gap-x-8 gap-y-4 '>
            {events.map((event) => (
              <EventCard
                key={event._id}
                event={event}
                admin={status === "authenticated"}
              />
            ))}
          </div>
        )}
      </div>
      <NewEventModal isOpened={isOpened} onClose={() => setIsOpened(false)} />
    </div>
  );
};

export default EventsPage;
