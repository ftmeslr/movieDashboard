import { useState } from "react";
import { useTranslation } from "react-i18next";
import { clsx } from "clsx";

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
  LoginCurve,
} from "iconsax-react";

const Menue = ({ dir }) => {
  const [activeMenue, setActiveMenue] = useState("Home");
  const { t } = useTranslation();
  const iconList = [
    <Home
      size="18"
      color={`${activeMenue === "Home" ? "#e91a23" : "#77787d"}`}
      variant={`${activeMenue === "Home" ? "Bold" : "Linear"}`}
    />,
    <LocationDiscover
      size="18"
      color={`${activeMenue === "Discovery" ? "#e91a23" : "#77787d"}`}
      variant={`${activeMenue === "Discovery" ? "Bold" : "Linear"}`}
    />,
    <People
      size="18"
      color={`${activeMenue === "Community" ? "#e91a23" : "#77787d"}`}
      variant={`${activeMenue === "Community" ? "Bold" : "Linear"}`}
    />,
    <Timer1
      size="18"
      color={`${activeMenue === "Coming Soon" ? "#e91a23" : "#77787d"}`}
      variant={`${activeMenue === "Coming Soon" ? "Bold" : "Linear"}`}
    />,
    <Clock
      size="18"
      color={`${activeMenue === "Recent" ? "#e91a23" : "#77787d"}`}
      variant={`${activeMenue === "Recent" ? "Bold" : "Linear"}`}
    />,
    <Bookmark
      size="18"
      color={`${activeMenue === "Bookmarked" ? "#e91a23" : "#77787d"}`}
      variant={`${activeMenue === "Bookmarked" ? "Bold" : "Linear"}`}
    />,
    <Star1
      size="18"
      color={`${activeMenue === "Top rated" ? "#e91a23" : "#77787d"}`}
      variant={`${activeMenue === "Top rated" ? "Bold" : "Linear"}`}
    />,
    <DocumentDownload
      size="18"
      color={`${activeMenue === "Downloaded" ? "#e91a23" : "#77787d"}`}
      variant={`${activeMenue === "Downloaded" ? "Bold" : "Linear"}`}
    />,

    <Setting2
      size="18"
      color={`${activeMenue === "Setting" ? "#e91a23" : "#77787d"}`}
      variant={`${activeMenue === "Setting" ? "Bold" : "Linear"}`}
    />,

    <InfoCircle
      size="18"
      color={`${activeMenue === "Help" ? "#e91a23" : "#77787d"}`}
      variant={`${activeMenue === "Help" ? "Bold" : "Linear"}`}
    />,
  ];
  const menueItems = [
    "Home",
    "Discovery",
    "Community",
    "Coming Soon",
    "Recent",
    "Bookmarked",
    "Top rated",
    "Downloaded",
    "Setting",
    "Help",
  ];
  return (
    <div className=" bg-gray-300 dark:bg-[#1a171e] grow text-zinc-700 px-5  ">
      <div className="mt-20 max-w-[280px]">
        <p className="text-xs">{t("MENU")}</p>
        <ul>
          {menueItems.map((item, index) => {
            return (
              <div key={index}>
                <MenueItem
                  title={item}
                  activeMenue={activeMenue}
                  setActiveMenue={setActiveMenue}
                  icon={iconList[index]}
                  dir={dir}
                />
                <div
                  className={`h-px bg-[#2f3137] m-auto ${
                    index === 3 || index === 7 ? "w-[220px]" : "hidden"
                  } `}
                ></div>
                <p
                  className={`text-xs mt-5 ${
                    index === 3 ? "-mb-3" : "hidden"
                  } `}
                >
                  {t("LIBRARY")}
                </p>
              </div>
            );
          })}
          <MenueItem
            className={"mt-72"}
            title="Logout"
            activeMenue={activeMenue}
            setActiveMenue={setActiveMenue}
            icon={
              <LoginCurve
                size="18"
                color={`${activeMenue === "Logout" ? "#e91a23" : "#77787d"}`}
                variant={`${activeMenue === "Logout" ? "Bold" : "Linear"}`}
              />
            }
            dir={dir}
          />
        </ul>
      </div>
    </div>
  );
};

export default Menue;

const MenueItem = ({
  title,
  activeMenue,
  setActiveMenue,
  icon,
  dir,
  className,
}) => {
  const { t, i18n } = useTranslation();
  return (
    <li
      className={`my-5 flex items-center cursor-pointer relative ${className}`}
      onClick={() => setActiveMenue(title)}
    >
      <div
        className={`absolute bg-[#e40712] w-1 h-6  ${
          activeMenue === title ? "" : "hidden"
        }  ${
          dir === "ltr"
            ? "rounded-l-lg right-[18px]"
            : "rounded-r-lg right-[260px]"
        }`}
      ></div>
      {icon}
      <span
        className={clsx("mt-1 mx-2", [
          activeMenue === title && "font-normal text-slate-50",
        ])}
      >
        {t(title)}
      </span>
    </li>
  );
};
