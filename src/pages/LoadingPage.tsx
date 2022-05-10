import { Spinner } from "../components/Spinner";

const LoadingPage = () => {
  return (
    <div className='text-white pt-36 min-h-full w-full flex items-center justify-center'>
      <Spinner color='lightGray' size='lg' />
    </div>
  );
};

export default LoadingPage;
