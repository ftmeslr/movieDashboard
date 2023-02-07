import { useState } from "react";
import Netflix from ".././asssets/images/netflix.png";
import Hulu from ".././asssets/images/hulu.png";
import TvPlus from ".././asssets/images/tv.png";
import Disney from ".././asssets/images/disney.png";
import Hbo from ".././asssets/images/hbo.png";
import BookmarkCard from "../components/BookmarkCard.jsx";
import Kate from "../asssets/images/kate-2021.jpg";
import Avatar from "../asssets/images/avatar.jpg";
import i18next from "../helpers/i18n";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import MiniSideBar from "../components/MiniSideBar.jsx";
import Menu from "../components/Menu.jsx";
import MovieCard from "../components/MovieCard.jsx";
import Switcher from "../components/Switcher.jsx";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import {
  Add,
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

  const { t, i18n } = useTranslation();

  const changeLanguge = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      <div className="grid grid-cols-12 flex-row bg-red-200  ">
        <div className="col-span-3 flex bg-gray-200 dark:bg-[#0d0d0f] h-screen">
          <MiniSideBar logos={logos} Add={Add}></MiniSideBar>

          <Menu />
        </div>
        <div
          className="col-span-7 bg-gray-200 dark:bg-[#0d0d0f]  px-5  "
          style={{ marginLeft: "-50px" }}
        >
          <div className="tabs py-5 border-b-2 border-gray-800 flex justify-between">
            <ul className="flex dark:text-white">
              <li className="">{t("Movies")}</li>
              <li className="ml-8">{t("Series")}</li>
              <li className="ml-8">{t("Tv Shows")}</li>
            </ul>
            <div className="icons flex  items-center">
              <div className="mr-6">
                <div className="flex justify-center">
                  <div className=" xl:w-18">
                    <select
                      onChange={changeLanguge}
                      className="form-select appearance-none
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-[#fff]
                                bg-stone-700
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus: focus:outline-none"
                      aria-label="Default select example"
                    >
                      <option value="fa">Fa</option>
                      <option value="en">En</option>
                    </select>
                  </div>
                </div>
              </div>
              <Switcher />

              <Brodcast size="20" color="#95989F" />
              <Notification className="mx-7" size="20" color="#95989F" />
              <Element3 size="20" color="#95989F" variant="Bold" />
            </div>
          </div>
          <div className="flex dark:text-[#fff] justify-between">
            <h4 className="my-3 font-bold">{t("Trending Movies")}</h4>
            <div className="flex items-center cursor-pointer">
              <p className="mr-1 text-[#77787D] ">{t("See all")} </p>
              <ArrowRight2 size="14" color="#77787D" />
            </div>
          </div>
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
              <MovieCard></MovieCard>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCard></MovieCard>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCard></MovieCard>
            </SwiperSlide>
          </Swiper>
          <div className="flex dark:text-[#fff] justify-between">
            <h4 className="my-3 font-bold">{t("Top rated")}</h4>
            <div className="flex items-center cursor-pointer">
              <p className="mr-1 text-[#77787D] ">{t("See all")} </p>
              <ArrowRight2 size="14" color="#77787D" />
            </div>
          </div>
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
                slidesPerView: 3.5,
              },
            }}
            // navigation={true}
            // modules={[Navigation]}
          >
            <SwiperSlide>
              <BookmarkCard name="Kate" date="2021" image={Kate}></BookmarkCard>
            </SwiperSlide>
            <SwiperSlide>
              <BookmarkCard name="Kate" date="2021" image={Kate}></BookmarkCard>
            </SwiperSlide>
            <SwiperSlide>
              <BookmarkCard name="Kate" date="2021" image={Kate}></BookmarkCard>
            </SwiperSlide>
            <SwiperSlide>
              <BookmarkCard name="Kate" date="2021" image={Kate}></BookmarkCard>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-span-2 bg-gray-300 dark:bg-[#1A171E] flex-col p-5">
          <div className="flex items-center">
            <img
              className=" h-12 w-12 rounded-full "
              src={Avatar}
              alt="image slide 1"
            />
            <div className="flex-col ml-3">
              <p className="font-bold dark:text-[#fff]">Arman Rokni</p>
              <p className=" text-[#8B8D94] text-xs">armanrokni@gmail.com</p>
            </div>
            <ArrowDown2 size="12" color="#fff" />
          </div>
          <div className="relative w-[95%] m-auto mt-5">
            <input
              className="absolute -z-99 pl-8 pb-1 rounded-full bg-gray-200 dark:bg-[#0d0d0f] dark:text-[#fff] h-10 text-xs w-full"
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

          <p className="mt-20 text-[#95989F] text-xs">{t("GENRE")}</p>

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
                <div className="rounded-full px-3 flex items-center justify-between w-full bg-gray-200 dark:bg-[#0d0d0f] h-[38px] dark:text-[#fff] pl-6 mt-2">
                  <p className="mb-1">Action</p>
                  <TickCircle size="20" color="#fff" />
                </div>
                <div className="rounded-full px-3 flex items-center justify-between w-full bg-gray-200 dark:bg-[#0d0d0f] h-[38px] dark:text-[#fff] pl-6 mt-2">
                  <p className="mb-1">Action</p>
                  <TickCircle size="20" color="#fff" />
                </div>
                <div className="rounded-full px-3 flex items-center justify-between w-full bg-gray-200 dark:bg-[#0d0d0f] h-[38px] dark:text-[#fff] pl-6 mt-2">
                  <p className="mb-1">Action</p>
                  <TickCircle size="20" color="#fff" />
                </div>
                <div className="rounded-full px-3 flex items-center justify-between w-full bg-gray-200 dark:bg-[#0d0d0f] h-[38px] dark:text-[#fff] pl-6 mt-2">
                  <p className="mb-1">Action</p>
                  <TickCircle size="20" color="#fff" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex-col mt-5">
                <div className="rounded-full px-3 flex items-center justify-between w-full bg-gray-200 dark:bg-[#0d0d0f] h-[38px] dark:text-[#fff] h-[38px]  pl-6 mt-2">
                  <p className="mb-1">Action</p>
                  <TickCircle size="20" color="#fff" />
                </div>
                <div className="rounded-full px-3 flex items-center justify-between w-full bg-gray-200 dark:bg-[#0d0d0f] h-[38px] dark:text-[#fff] h-[38px]  pl-6 mt-2">
                  <p className="mb-1">Action</p>
                  <TickCircle size="20" color="#fff" />
                </div>
                <div className="rounded-full px-3 flex items-center justify-between w-full bg-gray-200 dark:bg-[#0d0d0f] h-[38px] dark:text-[#fff] h-[38px] pl-6 mt-2">
                  <p className="mb-1">Action</p>
                  <TickCircle size="20" color="#fff" />
                </div>
                <div className="rounded-full px-3 flex items-center justify-between w-full bg-gray-200 dark:bg-[#0d0d0f] h-[38px] dark:text-[#fff] h-[38px]  F pl-6 mt-2">
                  <p className="mb-1">Action</p>
                  <TickCircle size="20" color="#fff" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="flex justify-between my-5">
            <p className="dark:text-[#fff]">{t("Recent Download")}</p>

            <div className="flex items-center cursor-pointer">
              <p className="mr-1 text-[#77787D] ">{t("See all")} </p>
              <ArrowRight2 size="14" color="#77787D" />
            </div>
          </div>
          <div className="flex justify-between my-5">
            <p className="dark:text-[#fff]">{t("Bookmarked")}</p>

            <div className="flex items-center cursor-pointer">
              <p className="mr-1 text-[#77787D] ">{t("See all")} </p>
              <ArrowRight2 size="14" color="#77787D" />
            </div>
          </div>
          <BookmarkCard name="Kate" date="2021" image={Kate}></BookmarkCard>
        </div>
      </div>
    </>
  );
}
