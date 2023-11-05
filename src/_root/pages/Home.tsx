import Loader from "@/components/shared/Loader";
import PostCard from "@/components/shared/PostCard";
import RightSidebar from "@/components/shared/RightSidebar";
import {
  useGetRecentPosts,
  useGetUsers,
} from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";

export default function Home() {
  const {
    data: posts,
    isPending: isPostsLoading,
    isError: isErrorPosts,
  } = useGetRecentPosts();

  const {
    data: creators,
    isPending: isUsersLoading,
    isError: isErrorCreators,
  } = useGetUsers(10);

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>
          {isPostsLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full">
              {posts?.documents.map((post: Models.Document) => (
                <PostCard post={post} key={post.caption} />
              ))}
            </ul>
          )}
        </div>
      </div>
      <RightSidebar creators={creators} isLoading={isUsersLoading} />
    </div>
  );
}
