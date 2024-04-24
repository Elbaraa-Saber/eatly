import dish from '../imgs/Dish.png'

function Hero(){
    return(
        <div className="hero">

            <div className='main-photo'>
                <svg className='collapse-first' width="42" height="28" viewBox="0 0 42 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.03562 12.8839C6.63998 9.20371 11.0587 8.59002 15.5406 8.17742C21.1348 7.66242 26.8271 7.46063 31.1569 1.99998" stroke="#685BB8" stroke-width="2.65" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.63661 23.2285C4.92103 18.5553 9.69807 15.7937 15.3404 15.1712C18.2926 14.8456 21.2864 15.1697 24.22 14.6123C30.8291 13.356 36.9687 9.34402 39.8474 3.13949" stroke="#685BB8" stroke-width="2.65" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M30.5218 19.2191C28.3334 20.6222 25.9587 21.6906 23.3509 21.9971C18.1575 22.6072 12.7177 21.7974 8.77443 25.9997" stroke="#685BB8" stroke-width="2.65" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className='top-img'>
                    <div>
                        <img src={dish} alt=''/>
                        <div>
                            <p>Chicken Hell</p>
                            <p>On The Way</p>
                        </div>
                    </div>
                    <span className='time'>3:09 PM</span>
                </div>
                <img className='main' src={dish} alt=''/>
                <svg className='ellipse' width="422" height="424" viewBox="0 0 422 424" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="211" cy="212" rx="211" ry="212" fill="url(#paint0_linear_1_16826)"/>
                    <defs>
                    <linearGradient id="paint0_linear_1_16826" x1="42.5" y1="-6.27372e-06" x2="422" y2="409.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#6C5FBC"/>
                    <stop offset="1" stop-color="#5144A0"/>
                    </linearGradient>
                    </defs>
                </svg>
                <svg className='arrow' width="101" height="98" viewBox="0 0 101 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M71.6674 10.7111C80.803 24.3855 86.0196 40.0142 80.7461 55.9952C75.9861 70.42 63.0132 78.9641 48.1158 68.2622C41.0635 63.1962 36.4872 52.9723 41.0691 45.3764C46.1738 36.9138 57.5029 44.4112 60.5762 50.1704C67.7546 63.6215 63.1038 81.7597 47.3119 89.9534C28.6107 99.6567 20.562 81.1081 20.7098 81.1037" stroke="#665AB5" stroke-width="2.65" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M91.0256 14.5963C89.1011 14.9712 87.2152 14.5933 85.3117 14.3026C79.0611 13.3488 72.67 10.5339 68.7869 5.89197C71.0236 11.8454 71.6846 20.2492 66.9237 25.2906" stroke="#665AB5" stroke-width="2.65" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className='graph'>
                    <div className='time'>
                        <div className='maintime'>Main</div>
                        <div className='week'>Weekly</div>
                        <div className='month'>Monthly</div>
                        <div className='year'>Yearly</div>
                    </div>
                    <svg className='lines' width="208" height="52" viewBox="0 0 208 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line opacity="0.09" x1="0.327785" y1="50.766" x2="206.306" y2="50.766" stroke="#6C5FBC" stroke-width="0.585257" stroke-linecap="round"/>
                        <line opacity="0.09" x1="1.00943" y1="26.1087" x2="206.988" y2="26.1087" stroke="#6C5FBC" stroke-width="0.585257" stroke-linecap="round"/>
                        <line opacity="0.09" x1="0.327785" y1="0.725926" x2="206.306" y2="0.725926" stroke="#6C5FBC" stroke-width="0.585257" stroke-linecap="round"/>
                    </svg>
                    <div className='line-graph'>
                        <svg width="209" height="100" viewBox="0 0 209 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.07422 83.6715C12.1442 83.6715 13.2155 98.0846 24.9997 98.0846C36.7839 98.0846 33.9271 57.1211 44.9972 57.1211C56.0672 57.1211 49.9965 22.6056 65.3517 22.6056C80.7069 22.6056 73.5649 57.1211 87.4917 57.1211C101.418 57.1211 99.2759 16.8297 108.203 16.8297C117.131 16.8297 114.631 40.8116 125.344 40.8116C136.057 40.8116 131.058 1.25586 142.485 1.25586C153.912 1.25586 152.84 18.5225 163.196 18.5225C173.552 18.5225 174.623 38.5359 188.907 38.5359C203.191 38.5359 194.264 60.8428 207.833 60.8428" stroke="#6C5FBC" stroke-width="1.98779" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <button>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.58326 4.94316C8.58326 7.05191 6.99247 8.64248 5.17234 8.64248C3.35221 8.64248 1.76143 7.05191 1.76143 4.94316C1.76143 2.83442 3.35221 1.24385 5.17234 1.24385C6.99247 1.24385 8.58326 2.83442 8.58326 4.94316Z" fill="#C5BFED" stroke="#6C5FBC" stroke-width="2.22012"/>
                            </svg>
                        </button>
                    </div>
                    <div className='weekly-time'>
                        <button className='active'>2D</button>
                        <button>4D</button>
                        <button>5D</button>
                        <button>6D</button>
                        <button>7D</button>
                    </div>
                    <svg className='collapse-two' width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.3376 31.1198C30.2316 24.6503 32.3782 17.9383 34.9719 11.3638" stroke="#685BB8" stroke-width="2.65" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.92894 35.0005C15.8316 26.5431 22.9341 17.0933 29.461 7.55682" stroke="#685BB8" stroke-width="2.65" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.63457 15.8358C9.15324 13.2755 18.5471 6.43167 25.4724 1.99974" stroke="#685BB8" stroke-width="2.65" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>

        </div>
    )
}

export default Hero;