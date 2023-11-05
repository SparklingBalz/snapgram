import Loader from "@/components/shared/Loader";
import UserCard from "@/components/shared/UserCard";
import { useGetUsers } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";

export default function AllUsers() {
  const {
    data: creators,
    isPending: isUsersLoading,
    isError: isErrorCreators,
  } = useGetUsers();

  return (
    <div className="flex flex-1">
      <div className="user-container mx-10">
        <h2 className="h3-bold md:h2-bold text-left w-full mt-5">All Users</h2>
        <div className="user-grid">
          {isUsersLoading && !creators ? (
            <Loader />
          ) : (
            creators?.documents.map((creator: Models.Document) => (
              <UserCard user={creator} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
