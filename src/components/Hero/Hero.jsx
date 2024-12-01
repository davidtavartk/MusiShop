import "./Hero.scss";
import hero_image from "../../assets/hero_image.png";
import arrow_icon from "../../assets/arrow.png"

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>Choose the best gear!</h2>
                <div>
                    <div className="hero-hand-icon">
                    </div>
                    <p>Create music</p>
                    <p>with high quality products</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="arrow" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>
            
        </div>
    );
};

export default Hero;