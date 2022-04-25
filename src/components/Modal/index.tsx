import React from "react";
import { RiCloseFill } from "react-icons/ri";
import Button from "../Button";

type Props = {
  children: React.ReactNode;
  modalId: string;
};

const Modal = ({ children, modalId }: Props) => {
  return (
    <div
      className='modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto'
      id={modalId}
    >
      <div className='modal-dialog relative w-auto pointer-events-none'>
        <div className='modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-dark bg-clip-padding rounded-sm outline-none text-current'>
          <div className='modal-header flex flex-shrink-0 items-center justify-between p-4 rounded-t-md'>
            <Button
              type='button'
              className='btn-close'
              color='transparent'
              dataDismiss='modal'
            >
              <RiCloseFill className='w-6 h-6' />
            </Button>
          </div>

          {/* Modal Body */}
          <div className='modal-body relative p-6 text-white'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
