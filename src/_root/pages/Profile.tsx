import ProfileInfo from "@/components/shared/ProfileInfo";
import UserPosts from "@/components/shared/UserPosts";
import { Button } from "@/components/ui/button";
import { useUserContext } from "@/context/AuthContext";
import {
  useGetUserById,
  useGetUserPosts,
} from "@/lib/react-query/queriesAndMutations";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();
  const { data: user } = useGetUserById(id || "");
  const { data: userPosts } = useGetUserPosts(id || "");
  const { user: currUser } = useUserContext();

  console.log(userPosts);

  return (
    <div className="profile-container">
      <div className="profile-inner_container">
        <div className="flex justify-between w-full">
          <ProfileInfo user={user} />
          {currUser && currUser.id === id && (
            <Button className="shad-button_primary">Edit Profile</Button>
          )}
        </div>
      </div>
      {userPosts && <UserPosts posts={userPosts.documents} />}
    </div>
  );
}
