import './Newsletter.scss';

const Newsletter = () => {
    return (
        <div className="newsletter">
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe and stay updated</p>
            <div className='newsletter-form'>
                <input type="email" placeholder='Your Email'/>
                <button>Subscribe</button>
            </div>
        </div>
    );
};

export default Newsletter;