import '../css/navbar.css'
import { PiForkKnife } from "react-icons/pi";
import { RiKnifeLine } from "react-icons/ri";


function Navbar (){
    return(
        <div className="navbar">
            <div className="container">
                <div className='info-nav'>

                    <div className="logo">
                        <div className='icon'><PiForkKnife /></div>
                        <span className='brand'>eatly</span>
                    </div>
                    <div className='links'>
                        <ul >
                            <li><a href='#'>Menu</a></li>
                            <li><a href='#'>Blog</a></li>
                            <li><a href='#'>Pricing</a></li>
                            <li><a href='#'>Contacts</a></li>
                        </ul>
                    </div>
                    <div className='enter'>
                        <div className='login'>Login</div>
                        <div className='sign'>Sign Up</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;