import Button from "../Button/index";

type Props = {
  onEdit: () => void;
  onDelete: () => void;
};

const CardMenu = ({ onEdit, onDelete }: Props) => {
  return (
    <div className='absolute bg-darkGray flex flex-col top-10 right-0 shadow-lg'>
      <Button color='transparent' onClick={onEdit}>
        Editar
      </Button>
      <Button color='transparent' onClick={onDelete}>
        Eliminar
      </Button>
    </div>
  );
};

export default CardMenu;
