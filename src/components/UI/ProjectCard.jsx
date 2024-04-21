const ProjectCard = ({ data, key }) => {
  return (
    <div key={key} className="w-1/3 p-4">
      <article>
        <img src={data.image} className="w-full h-auto" />
        <h4 className="mt-5 text-xl font-semibold mb-2 text-header-light-blue dark:text-header-dark-purple">
          {data.title}
        </h4>
        <p className="mt-5 text-header-light-gray dark:text-white">
          {data.description}
        </p>
        <div className="mt-5">
          <div className="flex items-center">
            {data.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-header-light-blue font-normal rounded-md border border-header-light-blue dark:text-tag-text-dark dark:bg-tag-bg-dark inline-block mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-5 mb-20 flex justify-between ">
            <a
              href={data.githubLink}
              target="_blank"
              className="text-header-light-blue hover:text-header-light-gray underline dark:text-white"
            >
              GitHub
            </a>
            <a
              href={data.siteLink}
              target="_blank"
              className="text-header-light-blue hover:text-header-light-gray dark:text-white underline"
            >
              View Site
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProjectCard;
