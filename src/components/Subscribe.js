import backg from '../imgs/Rectangle 4170.png'
import '../css/subscribe.css'
import dish from '../imgs/Dish.png'
import icon1 from '../imgs/Group 34845.png'
import icon2 from '../imgs/Group 34844.png'
function Subscribe (){
    return (
        <div className='container'>
            <div className="subscribe">
                <div className='photos'>
                    
                    {/* <img className='icons1' src={icon1} alt=''/> */}
                    <div className='info-back'>
                        <p>GET 50%</p>
                        <form className='email'>
                            <input placeholder='Enter your email address'/>
                            <button>Subscribe</button>
                        </form>
                    </div>
                    <div className='right-back'>
                        <img className='dish' src={dish} alt=''/>
                    </div>
                    {/* <img className='icons2' src={icon2} alt=''/> */}
                </div>
            </div>
        </div>
    )
}

export default Subscribe;