import PropTypes from 'prop-types';

const Item = ({title,amount}) => {
  // JSX dynamic data
  return (
    <li>
      {title} <span>{amount}</span>
    </li>
  );
};

Item.propTypes={
  title:PropTypes.string.isRequired,
  amount:PropTypes.number.isRequired,
}

export default Item;
