export default function ProfileInfo({ user }: any) {
  return (
    <div className="flex gap-[30px] w-full">
      <img
        src={user?.imageUrl}
        alt="profile"
        className="w-16 h-16 md:w-32 md:h-32 xl:w-40 xl:h-40 rounded-full"
      />
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-xl md:text-2xl xl:text-4xl text-light-1">
          {user?.name}
        </p>
        <p className="text-sm xl:text-lg text-light-3">@{user?.username}</p>
        <div className="flex gap-5">
          <div className="flex flex-col gap-1">
            <p className="text-lg xl:text-xl font-medium text-light-3">
              {user?.posts.length}
            </p>
            <p className="text-base xl:text-lg font-medium text-light-2">
              Posts
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg xl:text-xl font-medium text-light-3">
              {user?.save.length}
            </p>
            <p className="text-base xl:text-lg font-medium text-light-2">
              Saves
            </p>
          </div>
        </div>
        <p className="text-sm xl:text-lg text-light-2 text-left">
          {user?.bio || "No bio provided"}
        </p>
      </div>
    </div>
  );
}
