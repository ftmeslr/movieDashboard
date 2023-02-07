import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
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
} from "iconsax-react";

const Menue = () => {
  const [activeMenue, setActiveMenue] = useState("Home");
  const { t, i18n } = useTranslation();

  return (
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
              {t("Home")}
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
              color={`${activeMenue === "Discovery" ? "#e91a23" : "#77787d"}`}
              variant={`${activeMenue === "Discovery" ? "Bold" : "Linear"}`}
            />
            <span
              className={`${
                activeMenue === "Discovery" ? "font-normal text-slate-50" : ""
              }`}
            >
              {t("Discovery")}
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
              color={`${activeMenue === "Community" ? "#e91a23" : "#77787d"}`}
              variant={`${activeMenue === "Community" ? "Bold" : "Linear"}`}
            />
            <span
              className={`${
                activeMenue === "Community" ? "font-normal text-slate-50" : ""
              }`}
            >
              {t("Community")}
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
                variant={`${activeMenue === "ComingSoon" ? "Bold" : "Linear"}`}
              />
              <span
                className={`${
                  activeMenue === "ComingSoon"
                    ? "font-normal text-slate-50"
                    : ""
                }`}
              >
                {t("ComingSoon")}
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
              color={`${activeMenue === "Recent" ? "#e91a23" : "#77787d"}`}
              variant={`${activeMenue === "Recent" ? "Bold" : "Linear"}`}
            />
            <span
              className={`${
                activeMenue === "Recent" ? "font-normal text-slate-50" : ""
              }`}
            >
              {t("Recent")}
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
              color={`${activeMenue === "Bookmark" ? "#e91a23" : "#77787d"}`}
              variant={`${activeMenue === "Bookmark" ? "Bold" : "Linear"}`}
            />
            <span
              className={`${
                activeMenue === "Bookmark" ? "font-normal text-slate-50" : ""
              }`}
            >
              {t("Bookmarked")}
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
              color={`${activeMenue === "topRated" ? "#e91a23" : "#77787d"}`}
              variant={`${activeMenue === "topRated" ? "Bold" : "Linear"}`}
            />
            <span
              className={`${
                activeMenue === "topRated" ? "font-normal text-slate-50" : ""
              }`}
            >
              {t("Top rated")}
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
              color={`${activeMenue === "Downloaded" ? "#e91a23" : "#77787d"}`}
              variant={`${activeMenue === "Downloaded" ? "Bold" : "Linear"}`}
            />
            <span
              className={`${
                activeMenue === "Downloaded" ? "font-normal text-slate-50" : ""
              }`}
            >
              {t("Downloaded")}
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
              color={`${activeMenue === "Setting" ? "#e91a23" : "#77787d"}`}
              variant={`${activeMenue === "Setting" ? "Bold" : "Linear"}`}
            />
            <span
              className={`${
                activeMenue === "Setting" ? "font-normal text-slate-50" : ""
              }`}
            >
              {t("Setting")}
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
              {t("Help")}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menue;
