import { Link } from "react-router-dom";
import WideCard from "../components/WideCard/WideCard";
import Spinner from "../components/Spinner";
import dayjs from "dayjs";
import "dayjs/locale/es";
import PageTitle from "../components/PageTitle";
import useNews from "../hooks/useNews";

const NewsPage = () => {
  const { isLoading, news } = useNews();

  return (
    <div className='text-white pt-[112px] min-h-full'>
      <PageTitle title='Noticias' />

      {isLoading ? (
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

type NewsCardProps = {
  url: string;
  title: string;
  description: string;
  date: string;
  imgUrl: string;
};

const NewsCard = ({ url, title, description, date, imgUrl }: NewsCardProps) => {
  const formatedDate = dayjs(date)
    .locale("es")
    .format("ddd DD MMM [de] YYYY - HH:mm");
  return (
    <Link className='hover:opacity-90 transition duration-200' to={url}>
      <WideCard imgSrc={imgUrl}>
        <small className='text-secondary text-sm font-body'>
          {formatedDate}
        </small>
        <h3 className='font-title font-bold text-xl'>{title}</h3>
        <p className='text-gray-200 font-body'>{description}</p>
      </WideCard>
    </Link>
  );
};

export default NewsPage;
