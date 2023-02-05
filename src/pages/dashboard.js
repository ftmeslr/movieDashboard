import { useState } from "react";
import Netflix from ".././asssets/images/netflix.png";
import Hulu from ".././asssets/images/hulu.png";
import TvPlus from ".././asssets/images/tv.png";
import Disney from ".././asssets/images/disney.png";
import Hbo from ".././asssets/images/hbo.png";

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
  Menu,
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
          className="col-span-7 bg-[#0D0D0F]  "
          style={{ marginLeft: "-50px" }}
        >
          <div className="tabs py-5 border-b-2 border-gray-800 flex justify-between">
            <ul className="flex text-white">
              <li className="ml-8">Movies</li>
              <li className="ml-8">Series</li>
              <li className="ml-8">Tv Shows</li>
            </ul>
            <div className="icons flex">
              <Notification size="23" color="#fff" />
              <Menu className="mx-20" size="23" color="#fff" />
              <Menu size="23" color="#fff" />
            </div>
          </div>
          <div className="flex text-[#fff] justify-between">
            <h4>Trending Mmovies</h4>
            <p>See all </p>
          </div>
        </div>
        <div className="col-span-2 bg-[#1A171E]">03</div>
      </div>
    </>
  );
}
