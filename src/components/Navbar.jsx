import { useTranslation } from "react-i18next";
import Switcher from "../components/Switcher.jsx";
import { Notification, Element3, Brodcast } from "iconsax-react";

const Navbar = ({ dir }) => {
  const { t, i18n } = useTranslation();
  const changeLanguge = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <div className="tabs py-5 border-b-2 border-gray-400 flex justify-between">
      <ul className="flex dark:text-white mt-2">
        <li className="cursor-pointer">{t("Movies")}</li>
        <li className={`cursor-pointer ${dir === "ltr" ? "mx-8" : "mx-8"}`}>
          {t("Series")}
        </li>
        <li className={"cursor-pointer"}>{t("Tv Shows")}</li>
      </ul>
      <div className="icons flex  items-center">
        <div>
          <div className="flex justify-center">
            <div className=" xl:w-18">
              <select
                onChange={changeLanguge}
                className="form-select appearance-none
                        block
                        w-full
                        px-4
                        pb-1
                        text-base
                        font-normal
                        text-[#fff]
                        dark:bg-stone-700
                        bg-[#95989f]
                        rounded
                        transition
                        ease-in-out
                        focus: focus:outline-none"
                aria-label="Default select example"
              >
                <option value="en">en</option>
                <option value="fa">fa</option>
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
  );
};

export default Navbar;
