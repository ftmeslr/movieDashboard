import { Add } from "iconsax-react";

const BookmarkCard = ({ name, date, image }) => {
  return (
    <div className="w-full h-[210px] rounded-lg relative ">
      <div className="w-full h-[210px] bg-gradient-to-t from-neutral-800 to-transparent absolute absolute rounded-lg z-10"></div>
      <img
        className="h-[210px] w-full rounded-lg absolute z-0"
        src={image}
        alt="image slide 1"
      />
      <div className="flex flex-col h-full p-5 justify-end z-50 absolute w-full">
        <div className="text-[#fff] flex-col">
          <p className="font-bold">{name}</p>
          <p className="mb-3">{date}</p>
        </div>
        <div className="button flex items-center justify-between ">
          <div className="flex items-center  w-[100px] h-[40px] bg-[#e91a23] rounded-full opacity-70 ">
            <p className="text-sm m-auto font-semibold text-[#fff] ">
              Whatch now
            </p>
          </div>
          <div
            className="w-10 h-10 rounded-full bg-[#fff] opacity-20 relative
          "
          >
            <Add
              className="m-auto d-block absolute left-0 right-0 bottom-0 top-0 cursor-pointer  "
              style={{ opacity: "100% !important" }}
              size="24"
              color="#111"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookmarkCard;
