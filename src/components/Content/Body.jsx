import { useEffect, useState } from "react";
import Card from "../UI/Card";
import ProjectCard from "../UI/ProjectCard";
import axios from "axios";

const Body = () => {
 
  const [content, setContent] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("src/data.json");
        setContent(response.data.content);
        setProjects(response.data.projects);
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="mt-20 container mx-auto py-8">
      <header>
        <h1 className="text-3xl font-bold mb-4 text-header-black dark:text-header-dark-gray">Skills</h1>
      </header>

      <article className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {content.map((item, index) => (
          <Card data={item} key={index} />
        ))}
      </article>

      <hr className="mt-10 my-8 border-t border-gray-300 dark:border-border-dark" />

      <header>
        <h1 className="text-3xl font-bold mb-4 text-header-black dark:text-header-dark-gray">Profile</h1>
      </header>

      <article className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <h2 className="text-xl font-semibold mb-2 text-header-light-blue dark:text-header-dark-purple">Profile</h2>
          <ul className="mb-4 list-none leading-8 dark:text-white">
            <li>
              <strong>Doğum Tarihi</strong> 24.03.1996
            </li>
            <li>
              <strong>Ikamet Şehri</strong> Ankara
            </li>
            <li>
              <strong>Eğitim Durumu</strong> Hacettepe Üniversitesi Biyoloji,
              Lisans 2016
            </li>
            <li>
              <strong>Tercih Ettigi Rol</strong> Frontend, UI
            </li>
          </ul>
        </div>

        <Card data={{title:'About me', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia sit maiores accusantium architecto pariatur sequi,reprehenderit, inventore, nobis aspernatur ducimus sed molestiaeporro enim iste labore praesentium quasi reiciendis?"
          }} key={0} />
       
      </article>

      <hr className="mt-10 my-8 border-t border-gray-300 dark:border-border-dark" />

      <article>

        <header>
        <h1 className="text-3xl font-bold mb-4 dark:text-header-dark-gray">Projects</h1>
        </header>

      <div className="flex flex-wrap">
      {projects.map((project, index) => (
        <ProjectCard key={index} data={project} />
      ))}
    </div>
        
      </article>
     
    </section>

  );
};

export default Body;
