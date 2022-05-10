import { useContext } from "react";

import { Spinner } from "../components/Spinner";
import { PageTitle } from "../components/Title";
import { NewsCard } from "../components/Card";
import { AuthContext } from "../context/AuthContext";
import { Button } from "../components/Button";
import { NewNewsModal } from "../components/Modal";
import useNews from "../hooks/useNews";

import "dayjs/locale/es";

const NewsPage = () => {
  const { isLoading, news, addNews } = useNews();
  const { status } = useContext(AuthContext);

  return (
    <div className='text-white pt-36 min-h-full'>
      <PageTitle title='Noticias' />

      {isLoading || status === "checking" ? (
        <div className='w-full flex items-center justify-center'>
          <Spinner size='lg' />
        </div>
      ) : news.length == 0 ? (
        <div className='text-center'>Aún no hay publicaciones.</div>
      ) : (
        <div className='min-h-full container lg:max-w-5xl mx-auto px-0 sm:px-8 py-4 mb-10'>
          {status === "authenticated" && (
            <div className='flex justify-end mb-8'>
              <Button dataToggle='modal' dataTarget='#newNewsModal'>
                Añadir nuevo artículo
              </Button>
            </div>
          )}
          <div className='min-h-full grid md:grid-cols-2 gap-x-8 gap-y-4 '>
            {news.map((item) => (
              <NewsCard
                id={item._id}
                imgUrl={item.img}
                title={item.title}
                date={item.createdAt}
                url='/'
                content={item.content}
                admin={status === "authenticated"}
              />
            ))}
          </div>
        </div>
      )}
      <NewNewsModal callback={addNews} />
    </div>
  );
};

export default NewsPage;
