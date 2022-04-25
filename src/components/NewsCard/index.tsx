import dayjs from "dayjs";
import { useState } from "react";
import toast from "react-hot-toast";
import { RiMore2Fill } from "react-icons/ri";
import demodeApi from "../../api/axios";
import Button from "../Button";
import CardMenu from "../CardMenu";
import WideCard from "../WideCard/WideCard";
import EditNewsModal from "../Modal/EditNewsModal";

type NewsCardProps = {
  id: string;
  url: string;
  title: string;
  content: string;
  date: string;
  imgUrl: string;
  admin?: boolean;
};

const NewsCard = ({
  id,
  title,
  content,
  date,
  imgUrl,
  admin = false,
}: NewsCardProps) => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const formatedDate = dayjs(date)
    .locale("es")
    .format("ddd DD MMM [de] YYYY - HH:mm");

  const handleDelete = async () => {
    try {
      await demodeApi.delete(`/posts/${id}/delete`);
      window.location.reload();
    } catch (error) {
      toast.error("No se logró eliminar el item");
    }
  };

  return (
    <WideCard imgSrc={imgUrl}>
      <div className='relative'>
        <small className='text-gray-600 text-sm font-body'>
          {formatedDate}
        </small>
        <h3 className='font-title font-bold text-xl'>{title}</h3>
        <p className='text-gray-200 font-body'>{content}</p>
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
                dataTarget={`#editNewsModal${id}`}
                dataToggle='modal'
              />
            )}
          </>
        )}
      </div>
      <EditNewsModal
        callback={() => {}}
        id={id}
        initialValues={{
          content,
          title,
        }}
      />
    </WideCard>
  );
};

export default NewsCard;
