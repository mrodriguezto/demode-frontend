import { Link } from "react-router-dom";

import Logo from "../../assets/logo-white.png";
import { Sidebar } from "../Sidebar";

const navLinks = [
  { path: "/posts", title: "NOTICIAS" },
  { path: "/events", title: "CONCIERTOS" },
  { path: "/products", title: "PRODUCTOS" },
  { path: "/about", title: "CONÓCENOS" },
  { path: "/contact", title: "CONTÁCTANOS" },
];

export const Header = () => {
  return (
    <>
      <header className='w-full bg-gradient-to-b from-[#000000cb] via-[#000000a5] to-[#00000000] flex items-center justify-center sm:justify-start absolute py-3 px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 z-10'>
        <Link to='/'>
          <img className='h-14' src={Logo} alt='Demodé logo' />
        </Link>
        <nav className='hidden md:block px-4'>
          <ul className='text-white flex font-semibold text-md px-6'>
            {navLinks.map(({ path, title }, index) => (
              <NavLink key={index} path={path} title={title} index={index} />
            ))}
          </ul>
        </nav>
        <div className='hidden ml-auto mr-14 sm:mr-12 md:mr-10 lg:mr-8 w-50 h-20 rounded-sm sm:flex items-center relative'>
          <iframe
            src='https://open.spotify.com/embed/artist/3GqamhwxJhnybRLVUmEb1s?utm_source=generator'
            frameBorder='0'
            className='text-xs w-50 h-20 rounded-md shadow-lg'
          />
        </div>
      </header>
      <Sidebar />
    </>
  );
};

type NavLinkProps = {
  path: string;
  title: string;
  index: number;
};

const NavLink = ({ path, title, index }: NavLinkProps) => {
  return (
    <li
      className={`hover:text-gray-400 mr-5 transition ease-linear duration-150 ${
        index <= 1 ? "" : index <= 2 ? "hidden lg:block" : "hidden xl:block"
      }`}
    >
      <Link to={path}>{title}</Link>
    </li>
  );
};
