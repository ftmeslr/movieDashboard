import Button from "../components/Button.jsx";
import { Star1 } from "iconsax-react";

const BookmarkCard = ({ props, dir }) => {
  const { name, date, image } = props;
  return (
    <div className="w-full h-[210px] rounded-lg relative ">
      <div className="w-full h-[210px] bg-gradient-to-t from-neutral-800 to-transparent absolute absolute rounded-lg z-10"></div>
      <img
        className="h-[210px] w-full rounded-lg absolute z-0"
        src={image}
        alt="image slide 1"
      />
      <div className="flex flex-col h-full p-5 justify-end z-50 absolute w-full ">
        <div className="w-11 h-6 bg-black rounded-full text-white absolute left-5 top-5">
          <div className="flex justify-center items-center">
            <p className="text-xs mt-[6px]">{props.rate}</p>
            <Star1
              className="mt-[2px]"
              size="14"
              color="#ffc728"
              variant="Bold"
            />
          </div>
        </div>

        <div className="text-[#fff] flex-col">
          <p className="font-bold text-xl">{name}</p>
          <p className="mb-3">{date}</p>
        </div>
        <Button dir={dir}></Button>
      </div>
    </div>
  );
};

export default BookmarkCard;
