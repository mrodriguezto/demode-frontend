import { SocialMedia } from "../../components/SocialMedia";

export const Footer = () => {
  return (
    <footer className='bg-black flex flex-col items-center text-gray-200'>
      <div className='border-t-2 min-w-[100px] mb-4' />
      <div className='flex flex-col lg:flex-row lg:space-x-24'>
        <div className='my-3  flex flex-col items-center'>
          <a href='/about'>
            <h2 className='font-bold text-lg'>QUIÉNES SOMOS</h2>
          </a>
          <a href='/about/#historia'>
            <span>Nuestra Historia</span>
          </a>
          <a href='/about/#miembros'>
            <span>Miembros de la banda</span>
          </a>
        </div>
        <div className='my-3 flex flex-col items-center'>
          <a href='/events'>
            <h2 className='font-bold text-lg'>EVENTOS</h2>
          </a>
          <a href='/news'>
            <span>Noticias</span>
          </a>
          <a href='/eventos'>
            <span>Conciertos</span>
          </a>
        </div>
        <div className='my-3  flex flex-col items-center'>
          <a href='/products'>
            <h2 className='font-bold text-lg'>MERCHANDISE</h2>
          </a>
          <a href='/products'>
            <span>Nuestros artículos</span>
          </a>
          <a href='/products'>
            <span>Nuestra tienda</span>
          </a>
        </div>
        <div className='my-3  flex flex-col items-center'>
          <a href='/contact'>
            <h2 className='font-bold text-lg'>CONTACTO</h2>
          </a>
          <a href='/contact'>
            <span>Encuentranos en:</span>
          </a>
          <SocialMedia title=''></SocialMedia>
        </div>
      </div>
      <div className=' text-sm text-gray-400 my-3'>
        Demodé &copy;. Todos los derechos reservados
      </div>
    </footer>
  );
};
