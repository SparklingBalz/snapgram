export default function ProfileInfo({ user }: any) {
  return (
    <div className="flex gap-[30px] w-full">
      <img
        src={user?.imageUrl}
        alt="profile"
        className="w-40 h-40 rounded-full"
      />
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-4xl text-light-1">{user?.name}</p>
        <p className="text-lg text-light-3">@{user?.username}</p>
        <div className="flex gap-5">
          <div className="flex flex-col gap-1">
            <p className="text-xl font-medium text-light-3">
              {user?.posts.length}
            </p>
            <p className="text-lg font-medium text-light-2">Posts</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xl font-medium text-light-3">
              {user?.save.length}
            </p>
            <p className="text-lg font-medium text-light-2">Saves</p>
          </div>
        </div>
        <p>{user?.bio || "No bio provided"}</p>
      </div>
    </div>
  );
}
