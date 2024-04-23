import { RiStarSFill } from "react-icons/ri";


function HeroText (){
    return (
        <div className="hero-text">
            <p>OVER 1000 USERS</p>
            <h1>Enjoy Foods All Over The <span>World</span></h1>
            <p>EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a $20 bonus.</p>
            <div className="btns">
                <a className="btn start">Get Started</a>
                <a className="btn pro">Go Pro</a>
            </div>
            <div className="review">
                <div className="txt">
                    <span className="vecor"><RiStarSFill/></span>
                    <div>Trustpilot</div>
                </div>
                <div className="stars">
                    <span className="star"><RiStarSFill/></span>
                    <span className="star"><RiStarSFill/></span>
                    <span className="star"><RiStarSFill/></span>
                    <span className="star"><RiStarSFill/></span>
                    <span className="star"><RiStarSFill/></span>
                    <span className="num">4900+</span>
                </div>
            </div>
        </div>
    )
}

export default HeroText;