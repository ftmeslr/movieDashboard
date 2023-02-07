import { Add } from "iconsax-react";
import Imdb from "../asssets/images/IMDB.png";
import Army from "../asssets/images/army.jpg";

const MovieCard = () => {
  return (
    <div className="w-full h-64 rounded-lg relative">
      <div className="w-full h-64 bg-gradient-to-t from-neutral-800 to-transparent absolute -z-40 absolute rounded-lg"></div>
      <img
        className=" h-[250px] w-full rounded-lg absolute -z-50"
        src={Army}
        alt="image slide 1"
      />
      <div className="flex items-end h-full justify-between p-5">
        <div className="text-[#fff] flex-col">
          <p>Army of the dead</p>
          <p>2021</p>
          <div className="flex items-center">
            <img
              className="object-fill w-full w-[35px] h-[15px] mr-2 "
              src={Imdb}
              alt="image slide 1"
            />
            <p>7.9 Rating</p>
          </div>
        </div>
        <div className="button flex items-center ">
          <div className="flex items-center w-[100px] h-[40px] bg-[#e91a23] rounded-full opacity-70 mr-2">
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

export default MovieCard;
