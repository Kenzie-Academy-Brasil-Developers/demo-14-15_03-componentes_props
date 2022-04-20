import "./styles.css";

function Button({ onFunction, title }) {
  return (
    <button className="content-button" onClick={onFunction}>
      {title}
    </button>
  );
}

export default Button;
