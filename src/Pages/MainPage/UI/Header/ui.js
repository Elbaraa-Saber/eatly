import './style.css'
import { NavLink } from 'react-router-dom';


function Navbar (){
    return(
        <div className="navbar">
            <div className="container">
                <div className='info-nav'>
                    <div className="logo">
                        <svg className='icon' width="22" height="27" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.4648 9.10547L3.17926 9.03346" stroke="#6C5FBC" stroke-width="1.48218" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19.4546 12.3664L15.8322 12.3504C14.3339 12.3438 13.1221 10.8772 13.1276 9.07718C13.1331 7.27716 14.3539 5.82135 15.8522 5.82798L19.4746 5.84399" stroke="#6C5FBC" stroke-width="1.48218" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.60602 19.537L3.87341 19.4843C3.48563 19.4825 3.16071 19.0999 3.15332 18.634L3.12183 17.4057C3.11451 16.9186 3.44186 16.5072 3.84727 16.5089L8.527 16.5614L8.60602 19.537Z" stroke="#6C5FBC" stroke-width="1.48218" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.0397 21.3078L9.35031 21.2253C8.96251 21.2236 8.63757 20.841 8.63019 20.3751L8.54495 16.5522L19.412 16.685L19.4193 17.1721C19.4739 19.4806 17.9522 21.3375 16.0397 21.3078Z" stroke="#6C5FBC" stroke-width="1.48218" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className='brand'>eatly</span>
                    </div>
                    <div className='links'>
                        <ul >
                            <li><NavLink to='#'>Menu</NavLink></li>
                            <li><NavLink to='#'>Blog</NavLink></li>
                            <li><NavLink to='#'>Pricing</NavLink></li>
                            <li><NavLink to='#'>Contacts</NavLink></li>
                        </ul>
                    </div>
                    <div className='enter'>
                        <NavLink to='/eatly/signin' className='login'>Login</NavLink>
                        <NavLink to='/eatly/signup' className='sign'>Sign Up</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;