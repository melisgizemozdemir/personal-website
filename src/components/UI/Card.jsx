import "../Content/content.css";

const Card = ({ data, key }) => {
  return (
    <div key={key}>
      <h2 className="text-xl font-semibold mb-2 text-header-light-blue dark:text-header-dark-purple">{data.title}</h2>
      <p className="text-header-light-gray text-s dark:text-white">{data.desc}</p>
    </div>
  );
};

export default Card;
