import PropTypes from "prop-types";
import "./Item.css";


const Item = ({ title, amount }) => {
  const status = amount < 0 ? "expense" : "income";
  const symbol = amount < 0 ? "-" : "+";
  // JSX dynamic data
  return (
    <li className={status}>
      {title}
      <span>
        {symbol}
        {Math.abs(amount)}
      </span>
    </li>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Item;
