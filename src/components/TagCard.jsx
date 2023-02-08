import { useTranslation } from "react-i18next";
import { TickCircle } from "iconsax-react";
import { useState } from "react";

const TagCard = ({ name, className }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`rounded-full px-3 flex items-center justify-between w-full  h-[38px] dark:text-[#fff] pl-6 mt-2 cursor-pointer ${className}`}
    >
      <p className="mb-1">{t(`${name}`)}</p>
      <TickCircle size="20" color="#fff" />
    </div>
  );
};

export default TagCard;
