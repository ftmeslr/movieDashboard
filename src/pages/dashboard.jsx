import Netflix from ".././asssets/images/netflix.png";
import Hulu from ".././asssets/images/hulu.png";
import TvPlus from ".././asssets/images/tv.png";
import Disney from ".././asssets/images/disney.png";
import Hbo from ".././asssets/images/hbo.png";
import BookmarkCard from "../components/BookmarkCard.jsx";
import Kate from "../asssets/images/kate-2021.jpg";
import Avatar from "../asssets/images/avatar.jpg";
import LastButtol from "../asssets/images/lastButtol.jpg";
import Mosul from "../asssets/images/mosul.jpg";
import redNotice from "../asssets/images/red-notice.jpg";
import Sas from "../asssets/images/sas.jpg";
import Army from "../asssets/images/army.jpg";
import Blood from "../asssets/images/blood.jpg";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import MiniSideBar from "../components/MiniSideBar.jsx";
import Menu from "../components/Menu.jsx";
import MovieCard from "../components/MovieCard.jsx";
import Navbar from "../components/Navbar.jsx";
import Title from "../components/Title.jsx";
import SearchInput from "../components/SearchInput.jsx";
import TagCard from "../components/TagCard.jsx";
import "swiper/css";
import { ArrowDown2 } from "iconsax-react";
import { useState } from "react";
import VidedCard from "../components/VideoCard.jsx";
import Gunpow from "../asssets/images/gunpow.jpg";
export default function Dashboard() {
  const logos = [Netflix, Hulu, TvPlus, Disney, Hbo];

  const trendingMovie = [
    {
      name: "Army of the dead",
      date: "2021",
      rate: "7.9",
      img: Army,
    },
    {
      name: "Gunpowder milkshake",
      date: "2021",
      rate: "7.5",
      img: Gunpow,
    },
    {
      name: "Army of the dead",
      date: "2023",
      rate: "7.9",
      img: Army,
    },
  ];
  const TopRatedMovie = [
    {
      name: "Extraction",
      date: "2021",
      rate: "7.9",
      image: Kate,
    },
    {
      name: "Mosul",
      date: "2019",
      rate: "7.1",
      image: Mosul,
    },
    {
      name: "Spider man",
      date: "2017",
      rate: "7.9",
      image: Mosul,
    },
    {
      name: "Bright",
      date: "2017",
      rate: "7.0",
      image: Kate,
    },
    {
      name: "Extraction",
      date: "2021",
      rate: "7.9",
      image: Kate,
    },
  ];
  const VideoWhatching = [
    {
      name: "Red notice",
      date: "2021",
      image: redNotice,
    },
    {
      name: "SAS:Red notice",
      date: "2019",
      image: Sas,
    },
    {
      name: "BloodShot",
      date: "2017",
      image: Blood,
    },
    {
      name: "BloodShot",
      date: "2012",
      image: redNotice,
    },
  ];
  const Ganre = [
    "Action",
    "Comedy",
    "Historical",
    "Romance",
    "Drama",
    "Crime",
    "Adventure",
    "Horror",
    "Document",
    "Adventure",
  ];
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const dir = i18n.dir();

  const [activeTag, setActiveTag] = useState(Ganre[0]);
  return (
    <>
      <div
        className={`grid grid-cols-12 flex-row bg-red-200   ${
          dir === "ltr" ? " " : "font-dana"
        }`}
      >
        <div className="col-span-3 flex bg-gray-200 dark:bg-[#0d0d0f] h-auto">
          <MiniSideBar logos={logos} dir={dir}></MiniSideBar>
          <Menu dir={dir}></Menu>
        </div>
        <div
          className={`col-span-7 bg-gray-200 dark:bg-[#0d0d0f] px-5 ${
            dir === "ltr" ? "-ml-32" : "-mr-32"
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
                slidesPerView: 1.8,
              },
            }}
          >
            {trendingMovie.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <MovieCard props={item} dir={dir}></MovieCard>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Title title="Continue watching" dir={dir}></Title>
          <Swiper
            className="w-full mySwiper"
            spaceBetween={20}
            slidesPerView="auto"
            freeMode={true}
            breakpoints={{
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
                slidesPerView: 2.3,
              },
            }}
          >
            {VideoWhatching.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <VidedCard props={item}></VidedCard>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Title title="Top rated" dir={dir}></Title>
          <Swiper
            className="w-full mySwiper"
            spaceBetween={20}
            slidesPerView="auto"
            freeMode={true}
            breakpoints={{
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
            {TopRatedMovie.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <BookmarkCard props={item} dir={dir}></BookmarkCard>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="col-span-2 bg-gray-300 dark:bg-[#1A171E] flex-col p-5">
          <div className="flex items-center">
            <img
              className=" h-12 w-12 rounded-full "
              src={Avatar}
              alt="image slide 1"
            />
            <div className="flex-col mx-3">
              <p className="font-bold dark:text-[#fff]">Arman Rokni</p>
              <p className=" text-[#8B8D94] text-xs">armanrokni@gmail.com</p>
            </div>
            <ArrowDown2 size="12" color="#fff" />
          </div>

          <SearchInput dir={dir} />
          <p className="mt-20 text-[#95989F] text-xs ">{t("GENRE")}</p>

          <Swiper
            className="w-full mySwiper"
            spaceBetween={15}
            slidesPerView="auto"
            freeMode={true}
            breakpoints={{
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
                {Ganre.map((item, index) => {
                  return (
                    index < 5 && (
                      <div onClick={() => setActiveTag(item)}>
                        <TagCard
                          key={index}
                          name={item}
                          toggle={activeTag === item ? true : false}
                        />
                      </div>
                    )
                  );
                })}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex-col mt-5">
                {Ganre.map((item, index) => {
                  return (
                    index >= 5 && (
                      <div onClick={() => setActiveTag(item)}>
                        <TagCard
                          key={index}
                          name={item}
                          toggle={activeTag === item ? true : false}
                        />
                      </div>
                    )
                  );
                })}
              </div>
            </SwiperSlide>
          </Swiper>
          <Title title="Recent Download" dir={dir}></Title>
          <Title title="Bookmarked" dir={dir}></Title>

          <BookmarkCard props={TopRatedMovie[0]}></BookmarkCard>
        </div>
      </div>
    </>
  );
}
