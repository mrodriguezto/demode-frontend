import { useState } from "react";
import toast from "react-hot-toast";
import { RiMore2Fill } from "react-icons/ri";
import dayjs from "dayjs";

import demodeApi from "../../api/axios";
import { Button } from "../Button";
import { EditEventModal } from "../Modal";
import { CardMenu } from "./CardMenu";
import { WideCard } from "./WideCard";

type EventCardProps = {
  id: string;
  title: string;
  description: string;
  url: string;
  place: string;
  starts_at: string;
  admin?: boolean;
};

export const EventCard = ({
  id,
  description,
  place,
  starts_at,
  title,
  url,
  admin = false,
}: EventCardProps) => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const formatedDate = dayjs(starts_at)
    .locale("es")
    .format("ddd DD MMM [de] YYYY - HH:mm");

  const handleDelete = async () => {
    try {
      await demodeApi.delete(`/events/${id}/delete`);
      window.location.reload(); // TODO: Update items with react redux
    } catch (error) {
      toast.error("No se logró eliminar el item");
    }
  };
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
            {menuIsActive && (
              <CardMenu
                onDelete={handleDelete}
                dataTarget={`#editEventModal${id}`}
                dataToggle='modal'
              />
            )}
          </>
        )}
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
      <EditEventModal
        id={id}
        callback={() => {}}
        initialValues={{ description, place, starts_at, title, url }}
      />
    </WideCard>
  );
};
