import "./Breadcrum.scss";
import { MdArrowForwardIos } from "react-icons/md";

const Breadcrum = ({ product }) => {
  return (
    <div className="breadcrum">
      HOME <MdArrowForwardIos /> Shop<MdArrowForwardIos /> {product.category}{" "}
      <MdArrowForwardIos /> {product.name}
    </div>
  );
};

export default Breadcrum;
