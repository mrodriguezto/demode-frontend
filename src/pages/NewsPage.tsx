import { Link } from "react-router-dom";
import WideCard from "../components/WideCard/WideCard";
import Spinner from "../components/Spinner";
import dayjs from "dayjs";
import "dayjs/locale/es";
import PageTitle from "../components/PageTitle";
import useNews from "../hooks/useNews";
import NewsCard from "../components/NewsCard";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const NewsPage = () => {
  const { isLoading, news } = useNews();
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
        <div className='min-h-full grid md:grid-cols-2 gap-x-8 gap-y-4 container lg:max-w-5xl mx-auto px-0 sm:px-8 py-10'>
          {news.map((item) => (
            <NewsCard
              imgUrl={item.img}
              title={item.title}
              date={item.createdAt}
              url='/'
              description={item.content}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsPage;
