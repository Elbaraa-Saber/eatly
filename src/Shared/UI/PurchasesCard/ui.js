import './style.css';

function Card (props){
    return (
        <div className="card">
            <div className="card__txt">
                <div className="card__title">
                    {
                        props.title === "Expense" ?  
                        <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.532227" y="0.358887" width="50.2588" height="50.2588" rx="25.1294" fill="#F4F0FF"/>
                            <path d="M26.3524 14.7749L26.321 14.8482L23.2845 21.8949H20.3004C19.5884 21.8949 18.9078 22.0415 18.29 22.3033L20.1224 17.9266L20.1643 17.8219L20.2376 17.6544C20.2585 17.5915 20.2795 17.5287 20.3109 17.4764C21.6825 14.3038 23.2322 13.5813 26.3524 14.7749Z" stroke="#936DFF" stroke-width="1.57059" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M31.9957 22.1043C31.5245 21.9577 31.0219 21.8949 30.5194 21.8949H23.2842L26.3206 14.8482L26.3521 14.7749C26.5091 14.8273 26.6557 14.9005 26.8128 14.9634L29.1268 15.9371C30.4147 16.4711 31.3151 17.0261 31.8596 17.6962C31.9643 17.8218 32.0481 17.937 32.1214 18.0731C32.2156 18.2197 32.2889 18.3663 32.3308 18.5234C32.3727 18.6176 32.4041 18.7118 32.425 18.7956C32.7077 19.6751 32.5402 20.7536 31.9957 22.1043Z" stroke="#936DFF" stroke-width="1.57059" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M35.6303 27.0052V29.0469C35.6303 29.2563 35.6198 29.4657 35.6093 29.6752C35.4104 33.3294 33.3686 35.1722 29.4945 35.1722H21.3274C21.0761 35.1722 20.8249 35.1513 20.584 35.1199C17.2544 34.9 15.4744 33.12 15.2545 29.7903C15.2231 29.5495 15.2021 29.2982 15.2021 29.0469V27.0052C15.2021 24.9006 16.4796 23.0892 18.3014 22.3039C18.9297 22.0421 19.5998 21.8955 20.3118 21.8955H30.5311C31.0441 21.8955 31.5467 21.9688 32.0074 22.1049C34.0911 22.7436 35.6303 24.6912 35.6303 27.0052Z" stroke="#936DFF" stroke-width="1.57059" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.1221 17.9268L18.2897 22.3035C16.4678 23.0888 15.1904 24.9002 15.1904 27.0048V23.9369C15.1904 20.9632 17.3055 18.4817 20.1221 17.9268Z" stroke="#936DFF" stroke-width="1.57059" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M35.6277 23.9358V27.0036C35.6277 24.7001 34.099 22.7421 32.0049 22.1139C32.5494 20.7527 32.7064 19.6847 32.4446 18.7947C32.4237 18.7005 32.3923 18.6062 32.3504 18.5225C34.2979 19.5276 35.6277 21.5903 35.6277 23.9358Z" stroke="#936DFF" stroke-width="1.57059" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        :
                        <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.532227" y="0.41748" width="50.2588" height="50.2588" rx="25.1294" fill="#F2FDF6"/>
                            <path d="M30.8963 35.2331H20.4257C17.2845 35.2331 15.1904 33.6625 15.1904 29.9978V22.6684C15.1904 19.0037 17.2845 17.4331 20.4257 17.4331H30.8963C34.0375 17.4331 36.1316 19.0037 36.1316 22.6684V29.9978C36.1316 33.6625 34.0375 35.2331 30.8963 35.2331Z" stroke="#22C55E" stroke-width="1.57059" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M25.6617 29.4738C27.3965 29.4738 28.8029 28.0674 28.8029 26.3326C28.8029 24.5978 27.3965 23.1914 25.6617 23.1914C23.9269 23.1914 22.5205 24.5978 22.5205 26.3326C22.5205 28.0674 23.9269 29.4738 25.6617 29.4738Z" stroke="#22C55E" stroke-width="1.57059" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18.8564 23.7153V28.9506" stroke="#22C55E" stroke-width="1.57059" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M32.4668 23.7153V28.9506" stroke="#22C55E" stroke-width="1.57059" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        
                    }
                    
                    <div>
                        <h4>{props.title}</h4>
                        <p>{props.desc}</p>
                    </div>
                </div>
                <div className="card__price">{props.total}</div>
            </div>
            <div className={props.title === "Expense" ? "card__progress card__progress-purple" : "card__progress card__progress-yellow"}>
                <span></span>
            </div>

        </div>
    )
}
export default Card;