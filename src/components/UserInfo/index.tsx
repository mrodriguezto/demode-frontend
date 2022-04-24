import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { RiLogoutBoxLine } from "react-icons/ri";
import Button from "../Button/index";

const UserInfo = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <div className='px-4'>
        <hr className='border-gray-600 border-t-2 my-3' />
        <div className='flex justify-between items-center text-white'>
          <div>
            <small className='text-gray-600 text-sm'>
              Iniciaste sesión como
            </small>
            <h6 className='text-lg  font-medium'>
              {user?.firstname + " " + user?.lastname}
            </h6>
          </div>
          <Button
            color='transparent'
            className='px-2 py-2'
            onClick={() => logout()}
          >
            <RiLogoutBoxLine className='h-8 w-8' />
          </Button>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
