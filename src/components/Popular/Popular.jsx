import "./Popular.scss"
import popular_data from "../../assets/popular_data";
import Item from "../Item/Item";

const Popular = () => {
    return (
        <div className="popular">
            <h1>POPULAR PRODUCTS</h1>
            <hr />
            <div className="popular-item">
                {popular_data.map((item, index) => {
                    return <Item key={index} item={item}/>
                })}
            </div>
        </div>
    );
};

export default Popular;