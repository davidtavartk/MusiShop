import { Link } from "react-router-dom";
import "./Item.scss";

const Item = ({ item }) => {
  return (
    <div className="item">
      <div className="image-container">
        <Link to={`/product/${item.id}`}>
          <div className="overlay"></div>
          <img onClick={window.scrollTo(0, 0)}  src={item.image} alt="" />
        </Link>
      </div>
      <p>{item.name}</p>
      <div className="item-price-container">
        <div className="item-price">${item.price}</div>
      </div>
    </div>
  );
};

export default Item;
