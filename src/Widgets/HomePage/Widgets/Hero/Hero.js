import dish from '../../../../imgs/Dish.png'
import Dashboard from '../../../../Shared/UI/DashBoard/ui';
import './style.css';
import FoodImg from '../../../../imgs/Food.png'

function Hero(){
    return(
        <div className="hero">
            <img className='hero__Img' src={FoodImg} alt='food'/> 
        </div>
    )
}

export default Hero;