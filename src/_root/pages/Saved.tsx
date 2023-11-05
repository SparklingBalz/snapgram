import Loader from "@/components/shared/Loader";
import SavedPostList from "@/components/shared/SavedPostList";
import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutations";

export default function Saved() {
  const { data: currUser, isPending } = useGetCurrentUser();

  if (currUser && currUser.save.length === 0) {
    return (
      <p className="h3-bold md:h2-bold text-center p-5 w-full">
        You have no saved posts
      </p>
    );
  }

  return (
    <div className="saved-container">
      <h2 className="h3-bold md:h2-bold text-left w-full">Saved</h2>
      {isPending ? (
        <Loader />
      ) : (
        <div className="w-full">
          <SavedPostList posts={currUser?.save} />
        </div>
      )}
    </div>
  );
}
