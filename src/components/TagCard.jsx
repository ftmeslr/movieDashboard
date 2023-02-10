import { useTranslation } from "react-i18next";
import { TickCircle, Add } from "iconsax-react";

const TagCard = ({ name, toggle }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`rounded-full px-3 flex items-center justify-between w-full  h-[38px] dark:text-[#fff] pl-6 mt-3 cursor-pointer ${
        toggle ? "bg-red-500 dark:bg-red-500 " : "bg-gray-200 dark:bg-[#0d0d0f]"
      }`}
    >
      <p className="mt-[1px]">{t(`${name}`)}</p>
      {toggle && <TickCircle size="20" color="#fff" />}
      {!toggle && <Add size="20" color="#95989f" />}
    </div>
  );
};

export default TagCard;
