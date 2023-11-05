import { Models } from "appwrite";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

type UserCardProps = {
  user: Models.Document;
};

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="flex flex-col justify-center items-center px-9 py-6 gap-[10px] border border-dark-4 rounded-[20px] bg-dark-2">
      <img
        src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
        alt="profile-img"
        className="w-14 h-14 rounded-full"
      />
      <h3 className="text-[14px] text-light-2 font-semibold">{user.name}</h3>
      <p className="text-[10px] font-medium text-light-3">@{user.username}</p>
      <Button className="shad-button_primary">
        <Link to={`/profile/${user.$id}`}>Profile</Link>
      </Button>
    </div>
  );
}
