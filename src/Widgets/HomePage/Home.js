import Hero from "./Widgets/Hero/Hero";
import HeroText from "./Widgets/HeroText/HeroText";
import './home.css';

function Home(){
    return(
        <div className="home">
            <div className="container home__container">
                <div className="home__info-home">
                    <HeroText/>
                    <Hero/>
                </div>
            </div>
        </div>
    )
}

export default Home;