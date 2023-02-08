import { useTranslation } from "react-i18next";
import { ArrowRight2, ArrowLeft2 } from "iconsax-react";
const Title = ({ title, dir }) => {
  const { t } = useTranslation();
  return (
    <div className="flex dark:text-[#fff] justify-between">
      <h4 className="my-3 font-bold">{t(`${title}`)}</h4>
      <div className="flex items-center cursor-pointer">
        <p className="mr-1 text-[#77787D] text-xs">{t("See all")} </p>
        {dir === "ltr" ? (
          <ArrowRight2 size="14" color="#77787D" />
        ) : (
          <ArrowLeft2 size="14" color="#77787D" />
        )}
      </div>
    </div>
  );
};

export default Title;
