import HeroImg from "../assets/hero-img.jpg";
import Logo from "../assets/logo-white.png";
import Button from "../components/Button";

const LandingPage = () => {
  return (
    <>
      <div className='relative'>
        <img
          className='h-[90vh] w-full object-cover'
          src={HeroImg}
          alt='Integrantes de la banda'
        />
        <div className='p-6 absolute left-0 right-0 mx-auto w-48 bottom-0'>
          <img className='' src={Logo} alt='Demodé logo' />
        </div>
      </div>
      <div className='text-white p-10 m-24 bg-darkGray'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum tempora
        delectus tempore esse, debitis animi enim magni recusandae, modi
        repudiandae iste aliquid quisquam veritatis corporis distinctio.
        Pariatur, veritatis. Ducimus ut veritatis dolores ad assumenda vel
        corporis consectetur, adipisci, optio ratione dignissimos eligendi
        obcaecati saepe exercitationem dolorem deleniti, quisquam eum iure
        quibusdam neque cumque magni placeat unde nihil. Ratione sed, ipsam
        voluptate molestiae sit quis magnam voluptates maiores mollitia placeat
        consectetur? Sapiente nesciunt iure officia porro aut, doloremque
        aliquam magni deserunt beatae velit cupiditate corporis tempore,
        suscipit sint eos blanditiis tenetur recusandae! Delectus amet tenetur
        at exercitationem ex, impedit assumenda deleniti earum mollitia quaerat
        inventore alias possimus rerum vero error adipisci cum, officiis commodi
        totam nostrum beatae. Iusto accusamus tenetur optio natus doloremque
        porro nesciunt! Sapiente officiis rem reprehenderit quos voluptates
        alias soluta delectus sunt tempore dolor. Autem aut quaerat possimus
        nemo fugiat hic doloribus, consequuntur animi repudiandae quae dolore
        optio dolor esse debitis dolores impedit assumenda vero corporis unde
        reprehenderit praesentium eveniet quod. Delectus, ipsam magnam amet
        facere quod saepe atque sequi recusandae provident nihil, voluptatibus
        dolore illo magni molestias excepturi corrupti error iste dignissimos
        iusto quidem! At officiis tempore tenetur illo! Blanditiis natus magnam
        earum error quas beatae consequuntur.
        <Button color='secondary' size='sm' className='my-5'>
          Presióname
        </Button>
      </div>
    </>
  );
};

export default LandingPage;
