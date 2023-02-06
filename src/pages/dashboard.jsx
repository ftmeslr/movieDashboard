import { useState } from "react";
import Netflix from ".././asssets/images/netflix.png";
import Hulu from ".././asssets/images/hulu.png";
import TvPlus from ".././asssets/images/tv.png";
import Disney from ".././asssets/images/disney.png";
import Hbo from ".././asssets/images/hbo.png";
import Army from "../asssets/images/army.jpg";
import Imdb from "../asssets/images/IMDB.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import {
  Add,
  Clock,
  LocationDiscover,
  People,
  Timer1,
  Bookmark,
  Star1,
  DocumentDownload,
  Setting2,
  InfoCircle,
  Home,
  Notification,
  Element3,
  ArrowRight2,
  ArrowDown2,
  Brodcast,
  SearchNormal1,
  Setting4,
  TickCircle,
} from "iconsax-react";
export default function Dashboard() {
  const logos = [Netflix, Hulu, TvPlus, Disney, Hbo];
  const [activeLogo, setActiveLogo] = useState(Netflix);
  const [activeMenue, setActiveMenue] = useState("Home");
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
    <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
    <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  ];

  return (
    <>
      <div className="grid grid-cols-12 flex-row bg-red-200">
        <div className="col-span-3 flex bg-[#0d0d0f] h-screen">
          <div className="w-20 mt-20">
            {logos.map((item, index) => (
              <div className={`w-full relative `}>
                <div
                  className={`absolute bg-[#e40712] w-1 h-12 rounded-r-lg ${
                    activeLogo === item ? "" : "hidden"
                  }`}
                ></div>
                <div
                  key={index}
                  className={`w-12 h-12 rounded-full mx-4 my-5 cursor-pointer`}
                  onClick={() => setActiveLogo(item)}
                >
                  <img
                    className="object-cover rounded-full"
                    src={item}
                    alt="netflix"
                  />
                </div>
              </div>
            ))}

            <div className="w-12 h-px bg-[#2f3137] m-auto"></div>
            <div className="w-12 h-12 rounded-full bg-[#222127] mx-4 my-5 relative">
              <Add
                className="m-auto d-block absolute left-0 right-0 bottom-0 top-0 cursor-pointer"
                size="24"
                color="#fff"
              />
            </div>
          </div>
          <div className="bg-[#1a171e] grow text-zinc-700 px-5 max-w-[250px] ">
            <div className="mt-20">
              <p className="text-xs">MENU</p>
              <ul>
                <li
                  className="my-5 flex items-center cursor-pointer relative"
                  onClick={() => setActiveMenue("Home")}
                >
                  <div
                    className={`absolute bg-[#e40712] w-1 h-6 rounded-l-lg right-[-20px] ${
                      activeMenue === "Home" ? "" : "hidden"
                    }`}
                  ></div>
                  <Home
                    className="mr-2"
                    size="18"
                    color={`${activeMenue === "Home" ? "#e91a23" : "#77787d"}`}
                    variant={`${activeMenue === "Home" ? "Bold" : "Linear"}`}
                  />
                  <span
                    className={`${
                      activeMenue === "Home" ? "font-normal text-slate-50 " : ""
                    }`}
                  >
                    Home
                  </span>
                </li>
                <li
                  className="my-5 flex items-center cursor-pointer relative"
                  onClick={() => setActiveMenue("Discovery")}
                >
                  <div
                    className={`absolute bg-[#e40712] w-1 h-6 rounded-l-lg right-[-20px] ${
                      activeMenue === "Discovery" ? "" : "hidden"
                    }`}
                  ></div>
                  <LocationDiscover
                    className="mr-2"
                    size="18"
                    color={`${
                      activeMenue === "Discovery" ? "#e91a23" : "#77787d"
                    }`}
                    variant={`${
                      activeMenue === "Discovery" ? "Bold" : "Linear"
                    }`}
                  />
                  <span
                    className={`${
                      activeMenue === "Discovery"
                        ? "font-normal text-slate-50"
                        : ""
                    }`}
                  >
                    Discovery
                  </span>
                </li>
                <li
                  className="my-5 flex items-center cursor-pointer relative"
                  onClick={() => setActiveMenue("Community")}
                >
                  <div
                    className={`absolute bg-[#e40712] w-1 h-6 rounded-l-lg right-[-20px] ${
                      activeMenue === "Community" ? "" : "hidden"
                    }`}
                  ></div>
                  <People
                    className="mr-2"
                    size="18"
                    color={`${
                      activeMenue === "Community" ? "#e91a23" : "#77787d"
                    }`}
                    variant={`${
                      activeMenue === "Community" ? "Bold" : "Linear"
                    }`}
                  />
                  <span
                    className={`${
                      activeMenue === "Community"
                        ? "font-normal text-slate-50"
                        : ""
                    }`}
                  >
                    Community
                  </span>
                </li>
                <li
                  className="my-5 flex items-center cursor-pointer justify-between relative"
                  onClick={() => setActiveMenue("ComingSoon")}
                >
                  <div className="flex">
                    <div
                      className={`absolute bg-[#e40712] w-1 h-6 rounded-l-lg right-[-20px] ${
                        activeMenue === "ComingSoon" ? "" : "hidden"
                      }`}
                    ></div>
                    <Timer1
                      className="mr-2"
                      size="18"
                      color={`${
                        activeMenue === "ComingSoon" ? "#e91a23" : "#77787d"
                      }`}
                      variant={`${
                        activeMenue === "ComingSoon" ? "Bold" : "Linear"
                      }`}
                    />
                    <span
                      className={`${
                        activeMenue === "ComingSoon"
                          ? "font-normal text-slate-50"
                          : ""
                      }`}
                    >
                      ComingSoon
                    </span>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#e91a23] ml-2 mr-2 px-2">
                    <div className="text-xs mt-1 font-bold">2</div>
                  </div>
                </li>
              </ul>
              <div className="w-34 h-px bg-[#2f3137] m-auto"></div>
              <p className="text-xs mt-5">LIBRARY</p>
              <ul>
                <li
                  className="my-5 flex items-center cursor-pointer relative"
                  onClick={() => setActiveMenue("Recent")}
                >
                  <div
                    className={`absolute bg-[#e40712] w-1 h-6 rounded-l-lg right-[-20px] ${
                      activeMenue === "Recent" ? "" : "hidden"
                    }`}
                  ></div>
                  <Clock
                    className="mr-2"
                    size="18"
                    color={`${
                      activeMenue === "Recent" ? "#e91a23" : "#77787d"
                    }`}
                    variant={`${activeMenue === "Recent" ? "Bold" : "Linear"}`}
                  />
                  <span
                    className={`${
                      activeMenue === "Recent"
                        ? "font-normal text-slate-50"
                        : ""
                    }`}
                  >
                    Recent
                  </span>
                </li>
                <li
                  className="my-5 flex items-center cursor-pointer relative"
                  onClick={() => setActiveMenue("Bookmark")}
                >
                  <div
                    className={`absolute bg-[#e40712] w-1 h-6 rounded-l-lg right-[-20px] ${
                      activeMenue === "Bookmark" ? "" : "hidden"
                    }`}
                  ></div>
                  <Bookmark
                    className="mr-2"
                    size="18"
                    color={`${
                      activeMenue === "Bookmark" ? "#e91a23" : "#77787d"
                    }`}
                    variant={`${
                      activeMenue === "Bookmark" ? "Bold" : "Linear"
                    }`}
                  />
                  <span
                    className={`${
                      activeMenue === "Bookmark"
                        ? "font-normal text-slate-50"
                        : ""
                    }`}
                  >
                    Bookmarked
                  </span>
                </li>
                <li
                  className="my-5 flex items-center cursor-pointer relative"
                  onClick={() => setActiveMenue("topRated")}
                >
                  <div
                    className={`absolute bg-[#e40712] w-1 h-6 rounded-l-lg right-[-20px] ${
                      activeMenue === "topRated" ? "" : "hidden"
                    }`}
                  ></div>
                  <Star1
                    className="mr-2"
                    size="18"
                    color={`${
                      activeMenue === "topRated" ? "#e91a23" : "#77787d"
                    }`}
                    variant={`${
                      activeMenue === "topRated" ? "Bold" : "Linear"
                    }`}
                  />
                  <span
                    className={`${
                      activeMenue === "topRated"
                        ? "font-normal text-slate-50"
                        : ""
                    }`}
                  >
                    Top rated
                  </span>
                </li>

                <li
                  className="my-5 flex items-center cursor-pointer relative"
                  onClick={() => setActiveMenue("Downloaded")}
                >
                  <div
                    className={`absolute bg-[#e40712] w-1 h-6 rounded-l-lg right-[-20px] ${
                      activeMenue === "Downloaded" ? "" : "hidden"
                    }`}
                  ></div>
                  <DocumentDownload
                    className="mr-2"
                    size="18"
                    color={`${
                      activeMenue === "Downloaded" ? "#e91a23" : "#77787d"
                    }`}
                    variant={`${
                      activeMenue === "Downloaded" ? "Bold" : "Linear"
                    }`}
                  />
                  <span
                    className={`${
                      activeMenue === "Downloaded"
                        ? "font-normal text-slate-50"
                        : ""
                    }`}
                  >
                    Downloaded
                  </span>
                </li>
              </ul>
              <div className="w-34 h-px bg-[#2f3137] m-auto"></div>
              <ul>
                <li
                  className="my-5 flex items-center cursor-pointer relative"
                  onClick={() => setActiveMenue("Setting")}
                >
                  <div
                    className={`absolute bg-[#e40712] w-1 h-6 rounded-l-lg right-[-20px] ${
                      activeMenue === "Setting" ? "" : "hidden"
                    }`}
                  ></div>
                  <Setting2
                    className="mr-2"
                    size="18"
                    color={`${
                      activeMenue === "Setting" ? "#e91a23" : "#77787d"
                    }`}
                    variant={`${activeMenue === "Setting" ? "Bold" : "Linear"}`}
                  />
                  <span
                    className={`${
                      activeMenue === "Setting"
                        ? "font-normal text-slate-50"
                        : ""
                    }`}
                  >
                    Setting
                  </span>
                </li>
                <li
                  className="my-5 flex items-center cursor-pointer relative"
                  onClick={() => setActiveMenue("Help")}
                >
                  <div
                    className={`absolute bg-[#e40712] w-1 h-6 rounded-l-lg right-[-20px] ${
                      activeMenue === "Help" ? "" : "hidden"
                    }`}
                  ></div>
                  <InfoCircle
                    className="mr-2"
                    size="18"
                    color={`${activeMenue === "Help" ? "#e91a23" : "#77787d"}`}
                    variant={`${activeMenue === "Help" ? "Bold" : "Linear"}`}
                  />
                  <span
                    className={`${
                      activeMenue === "Help" ? "font-normal text-slate-50" : ""
                    }`}
                  >
                    Help
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="col-span-7 bg-[#0D0D0F] px-5  "
          style={{ marginLeft: "-50px" }}
        >
          <div className="tabs py-5 border-b-2 border-gray-800 flex justify-between">
            <ul className="flex text-white">
              <li className="">Movies</li>
              <li className="ml-8">Series</li>
              <li className="ml-8">Tv Shows</li>
            </ul>
            <div className="icons flex">
              <Brodcast size="20" color="#95989F" />
              <Notification className="mx-7" size="20" color="#95989F" />
              <Element3 size="20" color="#95989F" variant="Bold" />
            </div>
          </div>
          <div className="flex text-[#fff] justify-between">
            <h4 className="my-3 font-bold">Trending Movies</h4>
            <div className="flex items-center cursor-pointer">
              <p className="mr-1 text-[#77787D] ">See all </p>
              <ArrowRight2 size="14" color="#77787D" />
            </div>
          </div>{" "}
          <Swiper
            className="w-full mySwiper"
            spaceBetween={20}
            slidesPerView="auto"
            freeMode={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              425: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1.5,
              },
              1280: {
                slidesPerView: 2,
              },

              1536: {
                slidesPerView: 2.5,
              },
            }}
            // navigation={true}
            // modules={[Navigation]}
          >
            <SwiperSlide>
              <div className="w-full h-64 rounded-lg relative">
                <div className="w-full h-64 bg-gradient-to-t from-neutral-800 to-transparent absolute -z-40 absolute rounded-lg"></div>
                <img
                  className="h-[250px] w-full rounded-lg absolute -z-50"
                  src={Army}
                  alt="image slide 1"
                />
                <div className="flex items-end h-full justify-between p-5">
                  <div className="text-[#fff] flex-col">
                    <p className="font-bold">Army of the dead</p>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-span-2 bg-[#1A171E] flex-col p-5">
          <div className="flex items-center">
            <img
              className=" h-12 w-12 rounded-full "
              src={Army}
              alt="image slide 1"
            />
            <div className="flex-col">
              <p className="font-bold">Arman Rokni</p>
              <p className="">armanrokni@gmail.com</p>
            </div>
            <ArrowDown2 size="16" color="#FF8A65" />
          </div>
          <div className="relative w-[95%] m-auto mt-5">
            <input
              className="absolute -z-99 pl-8 pb-1 rounded-full bg-[#0D0D0F] text-[#fff] h-10 text-xs w-full"
              type="text"
              placeholder="search movies"
            />
            <SearchNormal1
              className=" z-10 absolute top-2.5 left-2"
              size="18"
              color="#fff"
            />
            <Setting4
              className="z-10 absolute right-5 top-2.5"
              size="18"
              color="#fff"
            />
          </div>

          <p className="mt-20">GENRE</p>

          <Swiper
            className="w-full mySwiper"
            spaceBetween={15}
            slidesPerView="auto"
            freeMode={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              425: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1.5,
              },
              1280: {
                slidesPerView: 1.5,
              },

              1536: {
                slidesPerView: 1.5,
              },
            }}
            // navigation={true}
            // modules={[Navigation]}
          >
            <SwiperSlide>
              <div className="flex-col mt-5 ">
                <div className="rounded-full px-3 flex items-center justify-between w-full bg-[#0D0D0F] h-[38px] text-[#fff] pl-6 mt-2">
                  <p className="mb-1">Action</p>
                  <TickCircle size="20" color="#fff" />
                </div>
                <div className="rounded-full px-3 flex items-center justify-between w-full bg-[#0D0D0F] h-[38px] text-[#fff] pl-6 mt-2">
                  <p className="mb-1">Action</p>
                  <TickCircle size="20" color="#fff" />
                </div>
                <div className="rounded-full px-3 flex items-center justify-between w-full bg-[#0D0D0F] h-[38px] text-[#fff] pl-6 mt-2">
                  <p className="mb-1">Action</p>
                  <TickCircle size="20" color="#fff" />
                </div>
                <div className="rounded-full px-3 flex items-center justify-between w-full bg-[#0D0D0F] h-[38px] text-[#fff] pl-6 mt-2">
                  <p className="mb-1">Action</p>
                  <TickCircle size="20" color="#fff" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex-col mt-5">
                <div className="rounded-full px-3 flex items-center justify-between w-full bg-[#0D0D0F] h-[38px] text-[#fff] pl-6 mt-2">
                  <p className="mb-1">Action</p>
                  <TickCircle size="20" color="#fff" />
                </div>
                <div className="rounded-full px-3 flex items-center justify-between w-full bg-[#0D0D0F] h-[38px] text-[#fff] pl-6 mt-2">
                  <p className="mb-1">Action</p>
                  <TickCircle size="20" color="#fff" />
                </div>
                <div className="rounded-full px-3 flex items-center justify-between w-full bg-[#0D0D0F] h-[38px] text-[#fff] pl-6 mt-2">
                  <p className="mb-1">Action</p>
                  <TickCircle size="20" color="#fff" />
                </div>
                <div className="rounded-full px-3 flex items-center justify-between w-full bg-[#0D0D0F] h-[38px] text-[#fff] pl-6 mt-2">
                  <p className="mb-1">Action</p>
                  <TickCircle size="20" color="#fff" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="flex justify-between my-5">
            <p className="text-[#fff]">Recent Download</p>

            <div className="flex items-center cursor-pointer">
              <p className="mr-1 text-[#77787D] ">See all </p>
              <ArrowRight2 size="14" color="#77787D" />
            </div>
          </div>
          <div className="flex justify-between my-5">
            <p className="text-[#fff]">Bookmarked</p>

            <div className="flex items-center cursor-pointer">
              <p className="mr-1 text-[#77787D] ">See all </p>
              <ArrowRight2 size="14" color="#77787D" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
