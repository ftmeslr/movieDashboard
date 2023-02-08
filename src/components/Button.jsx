import { Add } from "iconsax-react";
import { useTranslation } from "react-i18next";

const Button = ({ dir }) => {
  const { t } = useTranslation();

  return (
    <div className="button flex items-center justify-between ">
      <div
        className={`flex items-center  w-[100px] h-[40px] bg-[#e91a23] rounded-full opacity-70 cursor-pointer ${
          dir === "ltr" ? "mr-2" : "ml-2"
        }`}
      >
        <p className="text-sm m-auto font-semibold text-[#fff] ">
          {t("Whatch now")}
        </p>
      </div>
      <div
        className="w-10 h-10 rounded-full bg-[#fff] opacity-20 relative 
      "
      >
        <Add
          className="m-auto d-block absolute left-0 right-0 bottom-0 top-0 cursor-pointer  "
          style={{ opacity: "100% !important" }}
          size="24"
          color="#111"
        />
      </div>
    </div>
  );
};

export default Button;
