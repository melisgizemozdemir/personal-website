import { useContext } from "react";
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { GlobalContext } from "../../context";

const Home = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className={theme ? "dark" : "light"}>
      <div className="bg-white dark:bg-dark-bg">
        <div className="mx-auto px-4 sm:px-8 xs:px-4 md:px-16 max-w-screen-lg">
          <Header />
          <Content />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
