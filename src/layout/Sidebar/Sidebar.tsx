import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import { SidebarUserInfo } from "./SidebarUserInfo";
import { AuthContext } from "../../context/AuthContext";
import { SocialMedia } from "../../components/SocialMedia";
import useClickAway from "../../hooks/useClickAway";

const sidebarLinks = [
  { path: "/posts", title: "NOTICIAS" },
  { path: "/events", title: "EVENTOS" },
  { path: "/products", title: "PRODUCTOS" },
  { path: "/about", title: "CONÓCENOS" },
  { path: "/contact", title: "CONTÁCTANOS" },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { status } = useContext(AuthContext);
  const sidebarRef = useRef<any>(null);
  useClickAway(sidebarRef, () => setIsOpen(false));

  return (
    <>
      <Button
        size='sm'
        color='transparent'
        className='ml-2 absolute z-10 top-8 right-4 md:right-6 px-2'
        onClick={() => setIsOpen((value) => !value)}
      >
        <RiMenuFill className='h-6 w-6 text-white' />
      </Button>

      <aside
        ref={sidebarRef}
        className={`w-full sm:w-1/2 md:w-72 h-full fixed right-0 top-0 z-50 ease-out duration-200 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className='flex flex-col overflow-y-auto h-full py-4 px-3 bg-darkGray'>
          <Button
            size='sm'
            color='darkGray'
            className='z-10 mt-2 mb-4 px-2 self-end'
            onClick={() => setIsOpen((value) => !value)}
          >
            <RiCloseFill className='h-6 w-6 text-white' />
          </Button>
          <ul className='space-y-2'>
            {sidebarLinks.map(({ path, title }, index) => (
              <MenuLink
                key={index}
                path={path}
                title={title}
                close={() => setIsOpen(false)}
              />
            ))}
          </ul>
          <hr className='border-gray-600 my-6 mx-4' />
          <SocialMedia title='Nuestras redes' />
          <div className='flex-1' />
          {status === "authenticated" && <SidebarUserInfo />}
        </div>
      </aside>
    </>
  );
};

type MenuLinkProps = {
  path: string;
  title: string;
  close: () => void;
};

const MenuLink = ({ path, title, close }: MenuLinkProps) => {
  return (
    <li>
      <Link
        to={path}
        onClick={close}
        className='flex items-center p-2 text-base font-normal rounded-sm text-white hover:bg-gray-700'
      >
        <span className='ml-2'>{title}</span>
      </Link>
    </li>
  );
};
