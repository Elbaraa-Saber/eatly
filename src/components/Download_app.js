import mobile from '../imgs/mobile.png'
import mobileScreen from '../imgs/mobileScreen.png'
import '../css/download_app.css'

function Download_app(){
    return (
        <div className='container'>
            <div className="download">
                <div className="mobile">
                    <svg width="40" height="45" viewBox="0 0 40 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.2478 6.22889C14.559 9.30376 8.28816 13.0796 1.76205 16.4421" stroke="#6C5FBC" stroke-width="1.88444" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M39.0674 16.4794C27.1042 17.68 15.0871 20.2036 3.46053 23.189" stroke="#6C5FBC" stroke-width="1.88444" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M30.874 35.7609C23.2466 32.6161 11.2224 31.5353 2.77782 30.2592" stroke="#6C5FBC" stroke-width="1.88444" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <img src={mobile} alt=''/>
                    <img src={mobileScreen} alt=''/>
                </div>
                <div className="text">
                    <h3>Premium <span>Quality </span>For Your Health</h3>
                    <ul>
                        <li>Premium quality food is made with ingredients that are packed with essential vitamins, minerals.</li>
                        <li>These foods promote overall wellness by support healthy digestion and boosting immunity</li>
                    </ul>
                    <button>Download <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.70605 10.0762H15.946" stroke="white" stroke-width="1.6055" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.3242 4.4574L15.9442 10.0774L10.3242 15.6973" stroke="white" stroke-width="1.6055" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Download_app;