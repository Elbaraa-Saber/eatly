import Hero from "./Hero";
import HeroText from "./HeroText";
import '../css/home.css'
function Home(){
    return(
        <div className="home">
            <div className="container">
                <div className="info-home">
                    <HeroText/>
                    <Hero/>
                </div>
            </div>
        </div>
    )
}

export default Home;