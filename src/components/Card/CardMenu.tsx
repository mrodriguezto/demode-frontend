import { useRef } from "react";
import useClickAway from "../../hooks/useClickAway";
import { Button } from "../Button/index";

type Props = {
  onEdit: () => void;
  onDelete: () => void;
  isOpened: boolean;
  handleClose: () => void;
};

export const CardMenu = ({
  isOpened,
  onEdit,
  onDelete,
  handleClose,
}: Props) => {
  const cardRef = useRef<any>(null);

  useClickAway(cardRef, handleClose);

  if (!isOpened) return <></>;

  return (
    <div
      ref={cardRef}
      className='absolute bg-darkGray flex flex-col top-10 right-0 shadow-lg'
    >
      <Button color='transparent' onClick={onEdit}>
        Editar
      </Button>
      <Button color='transparent' onClick={onDelete}>
        Eliminar
      </Button>
    </div>
  );
};
