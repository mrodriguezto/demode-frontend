import { useContext, useState } from "react";

import { Spinner } from "../components/Spinner";
import { PageTitle } from "../components/Title";
import { PostCard } from "../components/Card";
import { AuthContext } from "../context/AuthContext";
import { Button } from "../components/Button";
import { NewPostModal } from "../components/Modal";
import usePosts from "../hooks/usePosts";

import "dayjs/locale/es";

const PostsPage = () => {
  const [isOpened, setIsOpened] = useState(false);
  const { isLoading, posts } = usePosts();
  const { status } = useContext(AuthContext);

  return (
    <div className='text-white pt-36 min-h-full'>
      <PageTitle title='Noticias' />

      {isLoading || status === "checking" ? (
        <div className='w-full flex items-center justify-center'>
          <Spinner size='lg' />
        </div>
      ) : posts.length == 0 ? (
        <div className='text-center'>Aún no hay publicaciones.</div>
      ) : (
        <div className='min-h-full container lg:max-w-5xl mx-auto px-0 sm:px-8 py-4 mb-10'>
          {status === "authenticated" && (
            <div className='flex justify-end mb-8'>
              <Button onClick={() => setIsOpened(true)}>
                Añadir nuevo artículo
              </Button>
            </div>
          )}
          <div className='min-h-full grid md:grid-cols-2 gap-x-8 gap-y-4 '>
            {posts.map((post) => (
              <PostCard
                key={post._id}
                post={post}
                admin={status === "authenticated"}
              />
            ))}
          </div>
        </div>
      )}
      <NewPostModal isOpened={isOpened} onClose={() => setIsOpened(false)} />
    </div>
  );
};

export default PostsPage;
