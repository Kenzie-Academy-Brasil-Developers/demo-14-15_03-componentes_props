import Button from "../Button";
import "./styles.css";

const Card = ({ info }) => {
  const moreInfo = (country) => {
    alert(country);
  };

  return (
    <div className="content_card">
      <h3>{info.country}</h3>
      <p>{info.population}</p>
      <span>{info.size}</span>

      <Button
        onFunction={() => moreInfo(info.country)}
        title="Mais Informação"
      />
    </div>
  );
};

export default Card;
