import { useContext, useState } from "react";
import Navigation from "../UI/Navigation";
import "./header.css";
import { GlobalContext } from "../../context";
import { en } from "../../translate/en";
import { tr } from "../../translate/tr";
import Switcher from "../UI/Switcher";

var languages = {
  tr: tr,
  en: en,
};
const Header = () => {
  const { setLanguage, language } = useContext(GlobalContext);


  const [lang, setLang] = useState('en');


  const toggleLanguage = () => {
    setLang(lang === "tr" ? "en" : "tr")
    setLanguage(languages[lang === "tr" ? "en" : "tr"]);
  };
  return (
    <div>
     <div className="flex items-center justify-end space-x-4">
     <Switcher/>
    <div className="h-6 bg-gray-300 w-px dark:bg-border-dark"></div>
  <button className="text-[#777777] dark:text-[#D9D9D9]]" onClick={toggleLanguage}>{language.lang}</button>
</div>
      <div className="flex justify-between items-center p-4 mt-10">
        <div>
          <img
            src="https://picsum.photos/200"
            className="w-16 h-16 rounded-full"
          ></img>
        </div>
        <Navigation />
      </div>

      </div>
    
  );
};

export default Header;
