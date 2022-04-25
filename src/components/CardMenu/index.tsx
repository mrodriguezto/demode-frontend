import Button from "../Button/index";

type Props = {
  dataToggle: string;
  dataTarget: string;
  onDelete: () => void;
};

const CardMenu = ({ dataToggle, dataTarget, onDelete }: Props) => {
  return (
    <div className='absolute bg-darkGray flex flex-col top-10 right-0 shadow-lg'>
      <Button
        color='transparent'
        dataTarget={dataTarget}
        dataToggle={dataToggle}
      >
        Editar
      </Button>
      <Button color='transparent' onClick={onDelete}>
        Eliminar
      </Button>
    </div>
  );
};

export default CardMenu;
