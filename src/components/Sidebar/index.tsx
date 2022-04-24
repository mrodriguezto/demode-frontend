import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import {
  RiMenuFill,
  RiCloseFill,
  RiFacebookBoxLine,
  RiInstagramLine,
  RiSpotifyLine,
  RiYoutubeLine,
} from "react-icons/ri";

const sidebarLinks = [
  { path: "/news", title: "NOTICIAS" },
  { path: "/concerts", title: "CONCIERTOS" },
  { path: "/products", title: "PRODUCTOS" },
  { path: "/about", title: "CONÓCENOS" },
  { path: "/contact", title: "CONTÁCTANOS" },
];

const socialLinks = [
  {
    path: "https://www.facebook.com/Demode.Banda",
    title: "Like a nuestro Facebook",
    Icon: <RiFacebookBoxLine className='h-10 w-10' />,
  },
  {
    path: "https://www.instagram.com/banda.demode/",
    title: "Síguenos en Instagram",
    Icon: <RiInstagramLine className='h-9 w-9' />,
  },
  {
    path: "https://open.spotify.com/artist/3GqamhwxJhnybRLVUmEb1s?si=KJ6Qz9LRRCCiQuO-BSvqwA",
    title: "Escúchanos en Spotify",
    Icon: <RiSpotifyLine className='h-9 w-9' />,
  },
  {
    path: "https://www.youtube.com/channel/UC3dLqKQiGfFMBEJ8f07ZI6A",
    title: "Novedades en YouTube",
    Icon: <RiYoutubeLine className='h-10 w-10' />,
  },
  {
    path: "https://www.tiktok.com/@bandademode",
    title: "Síguenos en TikTok",
    Icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='#fff'
        viewBox='0 0 24 24'
        className='h-10 w-10'
      >
        <path d='M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 6 5 L 18 5 C 18.56503 5 19 5.4349698 19 6 L 19 18 C 19 18.56503 18.56503 19 18 19 L 6 19 C 5.4349698 19 5 18.56503 5 18 L 5 6 C 5 5.4349698 5.4349698 5 6 5 z M 12 7 L 12 14 C 12 14.56503 11.56503 15 11 15 C 10.43497 15 10 14.56503 10 14 C 10 13.43497 10.43497 13 11 13 L 11 11 C 9.3550302 11 8 12.35503 8 14 C 8 15.64497 9.3550302 17 11 17 C 12.64497 17 14 15.64497 14 14 L 14 10.232422 C 14.616148 10.671342 15.259118 11 16 11 L 16 9 C 15.952667 9 15.262674 8.7809373 14.78125 8.3613281 C 14.299826 7.941719 14 7.4149911 14 7 L 12 7 z' />
      </svg>
    ),
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        size='sm'
        color='transparent'
        className='ml-2 absolute z-10 top-8 right-4 md:right-6'
        onClick={() => setIsOpen((value) => !value)}
      >
        <RiMenuFill className='h-6 w-6 text-white' />
      </Button>

      <aside
        className={`w-3/5 sm:w-1/2 md:w-72 h-full fixed right-0 top-0 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-out duration-200`}
        aria-label='Sidebar'
      >
        <div className='overflow-y-auto h-full py-4 px-3 bg-darkGray'>
          <Button
            size='sm'
            color='darkGray'
            className='float-right z-10 mb-4 md:right-6'
            onClick={() => setIsOpen((value) => !value)}
          >
            <RiCloseFill className='h-6 w-6 text-white' />
          </Button>
          <ul className='space-y-2 clear-both'>
            {sidebarLinks.map(({ path, title }, index) => (
              <MenuLink key={index} path={path} title={title} />
            ))}
          </ul>
          <hr className='border-gray-600 my-6 mx-4' />
          <h6 className='text-white text-center text-lg font-semibold mb-4'>
            Nuestras Redes
          </h6>
          <ul className='flex justify-around items-center'>
            x
            {socialLinks.map(({ Icon, path, title }) => (
              <SocialLink title={title} path={path}>
                {Icon}
              </SocialLink>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

type MenuLinkProps = {
  path: string;
  title: string;
};

const MenuLink = ({ path, title }: MenuLinkProps) => {
  return (
    <li>
      <Link
        to={path}
        className='flex items-center p-2 text-base font-normal rounded-sm text-white hover:bg-gray-700'
      >
        <span className='ml-2'>{title}</span>
      </Link>
    </li>
  );
};

type SocialLinkProps = {
  path: string;
  title: string;
  children: React.ReactNode;
};

const SocialLink = ({ children, path, title }: SocialLinkProps) => {
  return (
    <li>
      <a
        title={title}
        href={path}
        target='_blank'
        className='text-white hover:text-gray-400 transition-colors ease-linear duration-200'
      >
        {children}
      </a>
    </li>
  );
};

export default Sidebar;
