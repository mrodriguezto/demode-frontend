import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WideCard from "../components/WideCard/WideCard";
import demodeApi from "../api/axios";
import { Post } from "../types/dataTypes";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";

const NewsPage = () => {
  const [news, setNews] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      const res = await demodeApi.get<Post[]>("/posts");
      setIsLoading(false);
      setNews(res.data);
    } catch (error) {
      toast.error("No se lograron obtener los datos");
    }
  };

  return (
    <div className='text-white pt-[112px] min-h-full'>
      <h1 className='my-6 text-center text-3xl'>Noticias</h1>
      <div className='min-h-full grid md:grid-cols-2 gap-x-8 gap-y-4 container lg:max-w-5xl mx-auto px-0 sm:px-8 py-10'>
        {isLoading ? (
          <Spinner />
        ) : news.length == 0 ? (
          <>Aún no hay publicaciones.</>
        ) : (
          news.map((item) => (
            <NewsCard
              imgUrl={item.img}
              title={item.title}
              date={item.createdAt}
              url='/'
              description={item.content}
            />
          ))
        )}
      </div>
    </div>
  );
};

type NewsCardProps = {
  url: string;
  title: string;
  description: string;
  date: string;
  imgUrl: string;
};

const NewsCard = ({ url, title, description, date, imgUrl }: NewsCardProps) => {
  return (
    <Link className='hover:opacity-90 transition duration-200' to={url}>
      <WideCard imgSrc={imgUrl}>
        <small className='text-secondary text-sm'>{date}</small>
        <h3 className='font-title text-xl'>{title}</h3>
        <p className='text-gray-200'>{description}</p>
      </WideCard>
    </Link>
  );
};

export default NewsPage;
