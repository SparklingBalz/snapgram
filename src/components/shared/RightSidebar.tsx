import { Models } from "appwrite";
import Loader from "./Loader";
import UserCard from "./UserCard";

export default function RightSidebar({
  creators,
  isLoading,
}: {
  creators: Models.DocumentList<Models.Document> | undefined;
  isLoading: boolean;
}) {
  return (
    <div className="hidden lg:flex px-6 py-10 flex-col gap-10 min-w-[300px] bg-dark-2">
      <h3 className="h3-bold text-light-2">Top Creators</h3>
      <div className="grid grid-cols-2 justify-center items-center gap-5">
        {isLoading ? (
          <Loader />
        ) : (
          creators?.documents.map((creator: Models.Document) => (
            <UserCard user={creator} />
          ))
        )}
      </div>
    </div>
  );
}
