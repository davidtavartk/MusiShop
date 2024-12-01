import { useContext } from "react";
import "./RelatedProducts.scss";
import { ShopContext } from "../../Context/ShopContext";
import Item from "../Item/Item";


const RelatedProducts = ({product}) => {
  const { product_data } = useContext(ShopContext);


  const renderRelatedItems = () => {
      const relatedItems = product_data.filter(item => (item.id != product.id && item.category == product.category)).slice(0, 4);

      return relatedItems.map((item, index) => <Item key={index} item={item} />);

  };

  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {renderRelatedItems()}
      </div>
    </div>
  );
};

export default RelatedProducts;
