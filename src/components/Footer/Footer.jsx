

const Footer = () => {
  
  return (
    <footer className="bg-bg-footer dark:bg-footer-bg-dark py-4 sm:py-6 md:py-8 lg:py-10">
      <div className="mt-10 mb-10 container mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
          <div className="mb-6 lg:mb-0 lg:mr-8">
            <p className="text-xl sm:text-2xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 dark:text-header-dark-gray">
              Let’s work together on
              <br /> your next product.
            </p>
            <div className="flex items-center">
              <i className="far fa-hand-point-right text-lg mr-2 dark:text-border-dark"></i>
              <a
                href="mailto:almilasucode@gmail.com"
                className="text-red-600 underline dark:text-border-dark"
              >
                almilasucode@gmail.com
              </a>
            </div>
          </div>
          <div className="mt-10 lg:mt-12 flex flex-col lg:flex-row justify-center lg:justify-end">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-400 dark:text-btn-dark dark:hover:text-gray-300 mr-4 mb-2 lg:mb-0"
            >
              Personal Blog
            </a>
            <a
              href="https://github.com/melisgizemozdemir"
              className="text-github-green hover:text-green-400 dark:hover:text-gray-300 mr-4 mb-2 lg:mb-0"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/melis-gizem-%C3%B6zdemir-654a57137/"
              className="text-linkedin-blue hover:text-blue-400 dark:hover:text-gray-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
