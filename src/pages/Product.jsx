import { useContext } from "react";
import { useParams } from 'react-router-dom'
import { ShopContext } from "../Context/ShopContext";
import Breadcrum from "../components/Breadcrums/Breadcrum";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";

const Product = () => {

    const {product_data} = useContext(ShopContext);
    const {productId} = useParams();
    const product = product_data.find((e) => e.id === Number(productId));
    return (
        <div>
            <Breadcrum product={product}/>
            <ProductDisplay product={product}/>
            <RelatedProducts product={product}/>
        </div>
    );
};

export default Product;