import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { RiMore2Fill } from "react-icons/ri";
import dayjs from "dayjs";

import demodeApi from "../../api/axios";
import { Button } from "../Button";
import { EditEventModal } from "../Modal";
import { CardMenu } from "./CardMenu";
import { WideCard } from "./WideCard";
import { useAppDispatch } from "../../store/hooks";
import { deleteEvent } from "../../store/slices/events/eventsSlice";
import { Event } from "../../types/dataTypes";

type EventCardProps = {
  event: Event;
  admin?: boolean;
};

export const EventCard = ({ event, admin = false }: EventCardProps) => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const dispatch = useAppDispatch();

  const formatedDate = dayjs(event.starts_at)
    .locale("es")
    .format("ddd DD MMM [de] YYYY - HH:mm");

  const handleDelete = async () => {
    try {
      await demodeApi.delete(`/events/${event._id}/delete`);
      dispatch(deleteEvent(event._id));
    } catch (error) {
      toast.error("No se logró eliminar el item");
    }
  };

  const handleEdit = () => setIsOpened(true);

  return (
    <WideCard>
      <div className='flex flex-col min-h-full relative'>
        {admin && (
          <>
            <Button
              size='sm'
              color='dark'
              className='px-3 absolute right-0 top-0 opacity-40'
              onClick={() => setMenuIsActive((value) => !value)}
            >
              <RiMore2Fill className='w-6 h-6' />
            </Button>

            <CardMenu
              isOpened={menuIsActive}
              handleClose={() => setMenuIsActive(false)}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          </>
        )}
        <div>
          <small className='text-secondary text-sm font-body'>
            {formatedDate}
          </small>
          <h3 className='font-title font-bold text-xl text-white'>
            {event.title}
          </h3>
          <small className='text-gray-400 text-sm font-body'>
            {event.place}
          </small>
          <p className='text-gray-200 font-body'>{event.description}</p>
        </div>
        <div className='flex-1' />

        <a href={event.url} target='_blank'>
          <Button color='primary' size='sm' className='text-white px-6'>
            Adquirir entrada
          </Button>
        </a>
      </div>
      <EditEventModal
        event={event}
        isOpened={isOpened}
        onClose={() => setIsOpened(false)}
      />
    </WideCard>
  );
};
