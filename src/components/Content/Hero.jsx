import { useContext } from "react";
import "./hero.css";
import { GlobalContext } from "../../context";

const Hero = () => {

  const { language } = useContext(GlobalContext);

  const handleHireMeClick = () => {
    window.location.href = "mailto:almilasucode@gmail.com"};

  const handleClick= () => {
    window.location.href = "https://github.com/melisgizemozdemir/personal-website"};
  

  const handleClick2= () => {
      window.location.href = "https://www.linkedin.com/in/melis-gizem-%C3%B6zdemir-654a57137/"};
  return (

    <div className="mt-20 flex flex-col md:flex-row items-center justify-center mx-auto my-4 max-w-screen-lg">

      <div className="flex flex-col md:w-1/2 md:mr-4">
        <div className="flex items-center mb-4">
          <hr className="w-20 mr-3 border-t-2 border-header-dark-purple dark:border-border-dark" />
          <div>
            <h1 className="text-l leading-none font-medium text-header-light-blue dark:text-header-dark-purple">
              Almila Su
            </h1>
          </div>
        </div>
        <h1 className="mt-8 text-6xl leading-none font-bold mb-2 text-header-black dark:text-header-dark-gray">
          {language.mainTitle}
        </h1>
        <p className="mt-8 text-md leading-7 text-header-light-gray dark:text-white mb-4">
          {language.intro}
        </p>
        <div className="mt-3 space-x-4">
          <button onClick={handleHireMeClick} className="px-4 py-2 text-white font-normal rounded-md border bg-btn-light hover:bg-white hover:border-header-light-gray hover:text-header-light-gray dark:bg-btn-dark dark:text-black">
            {language.hireMe}
          </button>

          <button onClick={handleClick} className="px-4 py-2 text-btn-light font-normal rounded-md border border-btn-light hover:border-header-light-gray hover:text-header-light-gray dark:border-btn-dark dark:text-btn-dark">
            <i className="fab fa-github mr-2 "></i>
            Github
          </button>
          
          <button onClick={handleClick2} className="px-4 py-2 text-btn-light font-normal rounded-md border border-btn-light hover:border-header-light-gray hover:text-header-light-gray dark:border-btn-dark dark:text-btn-dark">          
          <i className="fa-brands fa-linkedin mr-2"></i>
            Linkedin
          </button>

        </div>
      </div>
      <div className="md:w-1/2 md:ml-4">
      <img className="w-85 h-85 rounded-lg shadow-custom" src="./assets/images/frontend-challenge-hero-img.png"/>
        
      </div>
    </div>
  );
};

export default Hero;
