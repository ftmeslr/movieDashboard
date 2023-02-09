import { SearchNormal1, Setting4 } from "iconsax-react";

const SearchInput = ({ dir }) => {
  return (
    <div className="relative w-[95%] m-auto mt-5">
      <input
        className={`absolute -z-99  rounded-full bg-gray-200 dark:bg-[#0d0d0f] dark:text-[#fff] h-10 text-xs w-full ${dir === "ltr" ? "pl-10" : "pr-10"}`}
        type="text"
        placeholder="search movies"
      />
      <SearchNormal1
        className={`z-10 absolute top-2.5  ${
          dir === "ltr" ? "left-3" : "right-3"
        }`}
        size="18"
        color="#fff"
      />
      <Setting4
        className={`z-10 absolute top-2.5 ${
          dir === "ltr" ? "right-5" : "left-5"
        }`}
        size="18"
        color="#fff"
      />
    </div>
  );
};

export default SearchInput;
