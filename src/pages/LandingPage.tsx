import { Link } from "react-router-dom";
import Logo from "../assets/logo-white.png";
import { Button } from "../components/Button";
import { MediaPreview } from "../components/MediaPreview";
import { PageTitle } from "../components/Title";
import { ProductCard, PostCard, EventCard } from "../components/Card";
import { Spinner } from "../components/Spinner";
import { useGetPreviewDataQuery } from "../api/demodeApi";

const LandingPage = () => {
  const { data: previewData, isLoading } = useGetPreviewDataQuery();

  return (
    <main>
      <div className='relative bg-black bg-hero-img bg-no-repeat bg-cover bg-center h-[80vh] w-full'>
        <div className='absolute h-full bg-gradient-to-t from-[#000000] via-[#00000022] to-[#0000001e] w-full' />

        <div className='p-6 hidden sm:block absolute left-0 right-0 mx-auto w-48 bottom-0'>
          <img src={Logo} alt='Demodé logo' />
        </div>
      </div>

      {/* Media Content */}
      <section className='text-white container mx-auto max-w-5xl px-6 md:px-12 flex flex-col items-center mt-8 mb-16'>
        <MediaPreview />
        <a href='https://www.instagram.com/banda.demode/' target='_blank'>
          <Button>Ver más</Button>
        </a>
      </section>

      {isLoading ? (
        <div className='w-full flex items-center justify-center'>
          <Spinner size='lg' />
        </div>
      ) : (
        <>
          {/* Events Section */}
          <PageTitle title='Eventos' />
          <section className='text-white container mx-auto max-w-5xl px-6 md:px-12 flex flex-col items-center mt-8 mb-16'>
            <div className='min-h-full grid md:grid-cols-2 gap-x-8 gap-y-4 container lg:max-w-5xl mx-auto px-0 sm:px-8 py-10'>
              {previewData?.events.map((event) => (
                <EventCard event={event} />
              ))}
            </div>
            <Link to='/events'>
              <Button>Ver más</Button>
            </Link>
          </section>

          {/* Post Section */}
          <PageTitle title='Noticias' />
          <section className='text-white container mx-auto max-w-5xl px-6 md:px-12 flex flex-col items-center mt-8 mb-16'>
            <div className='min-h-full grid md:grid-cols-2 gap-x-8 gap-y-4 container lg:max-w-5xl mx-auto px-0 sm:px-8 py-10'>
              {previewData?.posts.map((post) => (
                <PostCard post={post} />
              ))}
            </div>
            <Link to='/posts'>
              <Button>Ver más</Button>
            </Link>
          </section>

          {/* Products Section */}
          <PageTitle title='Productos' />
          <section className='text-white container mx-auto max-w-5xl px-6 md:px-12 flex flex-col items-center mt-8 mb-16'>
            <div className='min-h-full grid md:grid-cols-2 gap-x-8 gap-y-4 container lg:max-w-5xl mx-auto px-0 sm:px-8 py-10'>
              {previewData?.products.map((product) => (
                <ProductCard product={product} />
              ))}
            </div>
            <Link to='/products'>
              <Button>Ver más</Button>
            </Link>
          </section>
        </>
      )}
    </main>
  );
};

export default LandingPage;
