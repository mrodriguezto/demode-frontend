import Logo from "../assets/logo-white.png";
import Button from "../components/Button";
import ContentPreviewer from "../components/ContentPreviewer";

const contentLinks = [
  { path: "/photos", title: "Fotos" },
  { path: "/videos", title: "Videos" },
  { path: "/products", title: "Productos" },
  { path: "/contact", title: "Contacto" },
];

const LandingPage = () => {
  return (
    <>
      <div className='relative bg-black bg-hero-img bg-no-repeat bg-cover bg-center h-[80vh] w-full'>
        {/* <img
          className='h-[90vh] w-full object-cover'
          src={HeroImg}
          alt='Integrantes de la banda'
        /> */}
        <div className='absolute h-full bg-gradient-to-t from-[#000000] via-[#00000022] to-[#0000001e] w-full' />
        <div className='p-6 absolute left-0 right-0 mx-auto w-48 bottom-0'>
          <img className='' src={Logo} alt='Demodé logo' />
        </div>
      </div>

      {contentLinks.map(({ path, title }, index) => (
        <ContentPreviewer key={index} path={path} title={title} />
      ))}

      <div className='text-white p-10 m-24 bg-darkGray'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum tempora
        delectus tempore esse, debitis animi enim magni recusandae, modi
        repudiandae iste aliquid quisquam veritatis corporis distinctio.
        Pariatur, veritatis. Ducimus ut veritatis dolores ad assumenda vel
        corporis consectetur, adipisci, optio ratione dignissimos eligendi
        obcaecati saepe exercitationem dolorem deleniti, quisquam eum iure
        quibusdam neque cumque magni placeat unde nihil. Ratione sed, ipsam
        voluptate molestiae sit quis magnam voluptates maiores mollitia placeat
        consectetur? Sapiente nesciunt iure officia porro aut, doloremque <br />
        <Button color='primary' size='sm' className='my-5'>
          Presióname
        </Button>
      </div>
    </>
  );
};

export default LandingPage;
