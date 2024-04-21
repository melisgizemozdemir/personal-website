import { useContext } from "react";
import { GlobalContext } from "../../context";

const Navigation = () => {
  const { language } = useContext(GlobalContext);

  const handleHireMeClick = () => {
    window.location.href = "mailto:almilasucode@gmail.com"};

  return (
    <div className="flex items-center space-x-16">
      <h1 className="px-2 text-header-light-gray font-normal hover:text-gray-600">
        {language.skills}
      </h1>
      <h1 className="px-2 text-header-light-gray font-normal hover:text-gray-600">
      {language.projects}
      </h1>
      <button  onClick={handleHireMeClick} className="px-4 py-2 text-btn-light font-normal rounded-md border border-btn-light hover:bg-btn-light hover:text-white dark:bg-white">
      {language.hireMe}
      </button>
    </div>
  );
};

export default Navigation;
