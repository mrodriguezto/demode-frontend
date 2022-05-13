import React, { useRef } from "react";
import { RiCloseFill } from "react-icons/ri";
import useClickAway from "../../hooks/useClickAway";
import { Button } from "../Button";

type Props = {
  children: React.ReactNode;
  isOpened: boolean;
  onClose: () => void;
};

export const Modal = ({ children, isOpened, onClose }: Props) => {
  const modalRef = useRef<any>(null);

  useClickAway(modalRef, onClose);

  if (!isOpened) return <></>;

  return (
    <div className='animate-fadeIn justify-center items-center bg-black bg-opacity-70 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
      <div
        ref={modalRef}
        className='relative min-w-max w-[600px] my-6 mx-auto max-w-3xl border-0 rounded-sm shadow-lg flex flex-col bg-alterGray outline-none focus:outline-none'
      >
        <div className='absolute right-2 top-3 z-50'>
          <Button
            type='button'
            size='square'
            color='transparent'
            onClick={onClose}
          >
            <RiCloseFill className='w-6 h-6' />
          </Button>
        </div>

        {/* Modal Body */}
        <div className='relative p-6 text-white'>{children}</div>
      </div>
    </div>
  );
};
