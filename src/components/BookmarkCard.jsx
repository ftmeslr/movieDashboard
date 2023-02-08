import Button from "../components/Button.jsx";

const BookmarkCard = ({ name, date, image, dir }) => {
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
        <Button dir={dir}></Button>
      </div>
    </div>
  );
};

export default BookmarkCard;
