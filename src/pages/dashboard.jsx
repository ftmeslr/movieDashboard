import Netflix from ".././asssets/images/netflix.png";
import Hulu from ".././asssets/images/hulu.png";
import TvPlus from ".././asssets/images/tv.png";
import Disney from ".././asssets/images/disney.png";
import Hbo from ".././asssets/images/hbo.png";
import BookmarkCard from "../components/BookmarkCard.jsx";
import Kate from "../asssets/images/kate-2021.jpg";
import Avatar from "../asssets/images/avatar.jpg";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import MiniSideBar from "../components/MiniSideBar.jsx";
import Menu from "../components/Menu.jsx";
import MovieCard from "../components/MovieCard.jsx";
import Navbar from "../components/Navbar.jsx";
import Title from "../components/Title.jsx";
import "swiper/css";
import { ArrowDown2, SearchNormal1, Setting4, TickCircle } from "iconsax-react";
export default function Dashboard() {
  const logos = [Netflix, Hulu, TvPlus, Disney, Hbo];
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const dir = i18n.dir();

  return (
    <>
      <div className="grid grid-cols-12 flex-row bg-red-200 font-dana ">
        <div className="col-span-3 flex bg-gray-200 dark:bg-[#0d0d0f] h-screen">
          <MiniSideBar logos={logos} dir={dir}></MiniSideBar>
          <Menu dir={dir}></Menu>
        </div>
        <div
          className={`col-span-7 bg-gray-200 dark:bg-[#0d0d0f] px-5 ${
            dir === "ltr" ? "-ml-12" : "-mr-12"
          }`}
        >
          <Navbar dir={dir}></Navbar>
          <Title title="Trending Movies" dir={dir}></Title>
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
          >
            <SwiperSlide>
              <MovieCard dir={dir}></MovieCard>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCard dir={dir}></MovieCard>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCard dir={dir}></MovieCard>
            </SwiperSlide>
          </Swiper>

          <Title title="Top rated" dir={dir}></Title>

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
          >
            <SwiperSlide>
              <BookmarkCard
                name="Kate"
                date="2021"
                image={Kate}
                dir={dir}
              ></BookmarkCard>
            </SwiperSlide>
            <SwiperSlide>
              <BookmarkCard
                name="Kate"
                date="2021"
                image={Kate}
                dir={dir}
              ></BookmarkCard>
            </SwiperSlide>
            <SwiperSlide>
              <BookmarkCard
                name="Kate"
                date="2021"
                image={Kate}
                dir={dir}
              ></BookmarkCard>
            </SwiperSlide>
            <SwiperSlide>
              <BookmarkCard
                name="Kate"
                date="2021"
                image={Kate}
                dir={dir}
              ></BookmarkCard>
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

          <p className="mt-20 text-[#95989F] text-xs ">{t("GENRE")}</p>

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
          <Title title="Recent Download" dir={dir}></Title>
          <Title title="Bookmarked" dir={dir}></Title>

          <BookmarkCard name="Kate" date="2021" image={Kate}></BookmarkCard>
        </div>
      </div>
    </>
  );
}
