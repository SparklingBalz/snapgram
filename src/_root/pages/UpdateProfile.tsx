import UpdateProfileForm from "@/components/forms/UpdateProfileForm";
import Loader from "@/components/shared/Loader";
import { useGetUserById } from "@/lib/react-query/queriesAndMutations";
import { useParams } from "react-router-dom";

export default function UpdateProfile() {
  const { id } = useParams();
  const { data: profile, isPending } = useGetUserById(id || "");

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img
            src="/assets/icons/add-post.svg"
            alt="add"
            height={36}
            width={36}
          />
          <h2 className="h3-bold md:h2-bold text-left w-full">Edit Profile</h2>
        </div>

        <UpdateProfileForm profile={profile} />
      </div>
    </div>
  );
}
