import { Models } from "appwrite";
import GridPostList from "./GridPostList";

type SearchResultProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
};

export default function SearchResults({
  isSearchFetching,
  searchedPosts,
}: SearchResultProps) {
  if (isSearchFetching) {
    return <p>Loading...</p>;
  }

  if (searchedPosts && searchedPosts.documents.length > 0) {
    return <GridPostList posts={searchedPosts.documents} />;
  }

  return (
    <div className="text-light-4 mt-10 text-center w-full">
      No results Found
    </div>
  );
}
