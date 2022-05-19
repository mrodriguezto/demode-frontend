import dayjs from "dayjs";
import { useState } from "react";
import toast from "react-hot-toast";
import { RiMore2Fill } from "react-icons/ri";

import { Button } from "../Button";
import { EditPostModal } from "../Modal";
import { CardMenu } from "./CardMenu";
import { WideCard } from "./WideCard";
import { Post } from "../../types/dataTypes";
import { useDeletePostMutation } from "../../store/services/posts";

type PostCardProps = {
  post: Post;
  admin?: boolean;
};

export const PostCard = ({ post, admin = false }: PostCardProps) => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [deletePost] = useDeletePostMutation();

  const formatedDate = dayjs(post.createdAt)
    .locale("es")
    .format("ddd DD MMM [de] YYYY - HH:mm");

  const handleDelete = async () => {
    deletePost(post._id)
      .then(() => toast.success("Publicación eliminada"))
      .catch(() => toast.error("No se logró eliminar la publicación"));
  };

  return (
    <WideCard imgSrc={post.img}>
      <div className='relative'>
        <small className='text-gray-600 text-sm font-body'>
          {formatedDate}
        </small>
        <h3 className='font-title font-bold text-xl'>{post.title}</h3>
        <p className='text-gray-200 font-body'>{post.content}</p>
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
                handleClose={() => setMenuIsActive(false)}
                isOpened={menuIsActive}
                onEdit={() => setIsOpened(true)}
              />
            )}
          </>
        )}
      </div>
      <EditPostModal
        post={post}
        isOpened={isOpened}
        onClose={() => setIsOpened(false)}
      />
    </WideCard>
  );
};
