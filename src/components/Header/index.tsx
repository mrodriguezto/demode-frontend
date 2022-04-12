import { Link } from "react-router-dom";
import Logo from "../../assets/logo-white.png";

/*

TODO: 

Modificar el tamaño del reproductor
para que no se vea cortado. O en su defecto, el
tamaño del navbar o el contenedor

*/

const navLinks = [
  { path: "/news", title: "NOTICIAS" },
  { path: "/concerts", title: "CONCIERTOS" },
  { path: "/about", title: "CONÓCENOS" },
  { path: "/contact", title: "CONTÁCTANOS" },
];

const Header = () => {
  return (
    <header className='w-full bg-dark bg-opacity-5 flex items-center absolute py-3 px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 z-10'>
      <Link to='/'>
        <img className='h-12' src={Logo} alt='Demodé logo' />
      </Link>
      <nav className='hidden md:block px-4'>
        <ul className='text-white flex font-semibold text-md px-6'>
          {navLinks.map(({ path, title }, index) => (
            <NavLink key={index} path={path} title={title} />
          ))}
        </ul>
      </nav>
      <div className='ml-auto w-50 h-16'>

      <iframe 
        src="https://open.spotify.com/embed/artist/3GqamhwxJhnybRLVUmEb1s?utm_source=generator" 
        width="100%" 
        frameBorder="0" 
        className='text-xs w-50 h-16'
        >
        </iframe>
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
