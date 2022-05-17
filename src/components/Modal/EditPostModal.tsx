import { useState } from "react";
import { useFormik } from "formik";

import demodeApi from "../../api/axios";
import { Spinner } from "../Spinner";
import { Modal } from "./Modal";
import { Button } from "../Button";
import { TextArea, TextInput } from "../Input";
import { useAppDispatch } from "../../store/hooks";
import { updatePost } from "../../store/slices/posts";
import { Post } from "../../types/dataTypes";

type Props = {
  post: Post;
  isOpened: boolean;
  onClose: () => void;
};

export const EditPostModal = ({ post, isOpened, onClose }: Props) => {
  const [isSending, setIsSending] = useState(false);
  const dispatch = useAppDispatch();

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      title: post.title,
      content: post.content,
    },
    onSubmit: () => editPost(),
  });

  const editPost = () => {
    setIsSending(true);
    console.log(values);

    demodeApi.put<Post>(`/posts/${post._id}/edit`, values).then((res) => {
      console.log(res.data);

      dispatch(updatePost(res.data));
      setIsSending(false);
      onClose();
    });
  };

  return (
    <Modal isOpened={isOpened} onClose={onClose}>
      <h6 className='font-semibold text-xl'>NUEVO ARTÍCULO</h6>
      <br />
      <form onSubmit={handleSubmit} noValidate>
        <TextInput
          onChange={handleChange}
          label='Título'
          name='title'
          value={values.title}
          placeholder='Ingrese el título...'
          required
        />
        <TextArea
          onChange={handleChange}
          label='Contenido'
          name='content'
          value={values.content}
          placeholder='Ingrese el contenido...'
          required
        />
        <div className='w-full flex justify-left'>
          <Button
            className='px-9 mt-3 shadow-md relative'
            type='submit'
            size='sm'
            disabled={isSending}
          >
            {isSending ? (
              <div className='w-full h-full flex gap-x-2'>
                <Spinner size='inline' color='lightGray' />

                <p>Actualizando...</p>
              </div>
            ) : (
              "Actualizar"
            )}
          </Button>
        </div>
      </form>
    </Modal>
  );
};
