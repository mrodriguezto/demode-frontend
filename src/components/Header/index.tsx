import { Link } from "react-router-dom";
import Logo from "../../assets/logo-white.png";
import Button from "../Button";

/*

TODO: 

Modificar el tamaño del reproductor
para que no se vea cortado. O en su defecto, el
tamaño del navbar o el contenedor

*/

const navLinks = [
  { path: "/news", title: "NOTICIAS" },
  { path: "/concerts", title: "CONCIERTOS" },
];

const Header = () => {
  return (
    <header className='w-full bg-gradient-to-b from-[#00000096] via-[#00000078] to-[#00000000] flex items-center absolute py-3 px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 z-10'>
      <Link to='/'>
        <img className='h-14' src={Logo} alt='Demodé logo' />
      </Link>
      <nav className='hidden md:block px-4'>
        <ul className='text-white flex font-semibold text-md px-6'>
          {navLinks.map(({ path, title }, index) => (
            <NavLink key={index} path={path} title={title} />
          ))}
        </ul>
      </nav>
      <div className='ml-auto w-50 h-20 rounded-sm flex items-center'>
        <iframe
          src='https://open.spotify.com/embed/artist/3GqamhwxJhnybRLVUmEb1s?utm_source=generator'
          frameBorder='0'
          className='text-xs w-50 h-20 rounded-md shadow-lg'
        />
        <Button size='sm' color='black' className='ml-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-white'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </Button>
      </div>
    </header>
  );
};

type NavLinkProps = {
  path: string;
  title: string;
};

const NavLink = ({ path, title }: NavLinkProps) => {
  return (
    <li className='hover:text-gray-300 mr-5 transition ease-linear duration-150'>
      <Link to={path}>{title}</Link>
    </li>
  );
};

export default Header;
