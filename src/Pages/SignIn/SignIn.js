import { Link } from 'react-router-dom';
import './style.css'
import photoDish from '../../Shared/imgs/Group 162806.png'


function SignIn(){
    return (
        <div className="signin">
            <div className="left-in">
                <svg className='logo' width="53" height="49" viewBox="0 0 53 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4.23877" y="5.74316" width="48.761" height="43.0728" rx="8.04025" fill="#6C5FBC"/>
                    <rect x="1.16228" y="1.16228" width="46.4364" height="40.7482" rx="6.87797" fill="#DBD9EE" stroke="#6C5FBC" stroke-width="2.32456"/>
                    <path d="M37.6362 13.9023L11.2162 13.7855" stroke="#6C5FBC" stroke-width="2.40454" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M37.6199 19.1922L31.744 19.1662C29.3136 19.1555 27.348 16.7766 27.3569 13.8568C27.3659 10.937 29.346 8.57558 31.7765 8.58632L37.6523 8.6123" stroke="#6C5FBC" stroke-width="2.40454" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.0285 30.8277L12.3518 30.7422C11.7228 30.7394 11.1957 30.1188 11.1838 29.3631L11.1327 27.3706C11.1208 26.5805 11.6518 25.9131 12.3094 25.916L19.9003 26.0011L20.0285 30.8277Z" stroke="#6C5FBC" stroke-width="2.40454" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M32.0865 33.6975L21.2357 33.5636C20.6066 33.5608 20.0796 32.9402 20.0676 32.1844L19.9293 25.9835L37.5566 26.1988L37.5684 26.989C37.657 30.7336 35.1888 33.7455 32.0865 33.6975Z" stroke="#6C5FBC" stroke-width="2.40454" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <div className='info'>
                    <h1>Sign In To eatly</h1>
                    <div className='accounts'>
                        <div className='google'>G</div>
                        <div className='apple'>
                            <svg width="27" height="31" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.5299 24.2333C25.0708 25.282 24.5274 26.2474 23.8978 27.1349C23.0396 28.3448 22.3369 29.1823 21.7954 29.6474C20.9559 30.4107 20.0565 30.8017 19.0933 30.8239C18.4019 30.8239 17.568 30.6294 16.5974 30.2347C15.6236 29.8419 14.7286 29.6474 13.9103 29.6474C13.0521 29.6474 12.1317 29.8419 11.1472 30.2347C10.1612 30.6294 9.36685 30.835 8.75955 30.8554C7.83594 30.8943 6.91533 30.4923 5.9964 29.6474C5.4099 29.1415 4.6763 28.2744 3.79747 27.046C2.85456 25.7341 2.07936 24.2129 1.47206 22.4787C0.821651 20.6054 0.495605 18.7915 0.495605 17.0353C0.495605 15.0237 0.935205 13.2887 1.81571 11.8347C2.50772 10.6669 3.42833 9.74565 4.58054 9.06936C5.73276 8.39307 6.97773 8.04843 8.31845 8.02639C9.05205 8.02639 10.0141 8.25077 11.2096 8.69175C12.4017 9.13421 13.1672 9.35859 13.5028 9.35859C13.7537 9.35859 14.604 9.09622 16.0455 8.57316C17.4087 8.08809 18.5593 7.88724 19.5018 7.96635C22.0558 8.17017 23.9746 9.16571 25.2507 10.9593C22.9665 12.3278 21.8366 14.2446 21.8591 16.7035C21.8797 18.6188 22.5824 20.2126 23.9634 21.4781C24.5892 22.0655 25.2882 22.5194 26.0658 22.8418C25.8972 23.3254 25.7192 23.7886 25.5299 24.2333ZM19.6723 1.44133C19.6723 2.94254 19.1177 4.3442 18.0121 5.64157C16.678 7.18389 15.0642 8.07512 13.3143 7.93448C13.292 7.75439 13.279 7.56484 13.279 7.36566C13.279 5.9245 13.9135 4.38219 15.0402 3.12113C15.6028 2.48264 16.3182 1.95174 17.1858 1.52823C18.0515 1.11104 18.8703 0.880329 19.6405 0.84082C19.663 1.04151 19.6723 1.24221 19.6723 1.44132V1.44133Z" fill="#323142"/>
                            </svg>
                        </div>
                    </div>
                    <div className='or'>OR</div>
                    <form className='email'>
                        <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.578857 4.91991C0.242036 7.90886 0.25705 11.3561 0.725741 14.3329C0.985078 15.9801 2.39259 17.2428 4.13002 17.387L5.9458 17.5378C9.73195 17.8521 13.5395 17.8521 17.3257 17.5378L19.1414 17.387C20.8789 17.2428 22.2864 15.9801 22.5457 14.3329C23.0144 11.3561 23.0295 7.90905 22.6926 4.92009C22.6491 4.57357 22.6001 4.22752 22.5457 3.88205C22.2864 2.23491 20.8789 0.972164 19.1414 0.827916L17.3257 0.677162C13.5395 0.362821 9.73195 0.362821 5.9458 0.677163L4.13002 0.827916C2.39259 0.972164 0.985078 2.23491 0.725741 3.88205C0.671357 4.22746 0.622395 4.57345 0.578857 4.91991ZM6.10198 2.39317C9.7842 2.08746 13.4873 2.08746 17.1695 2.39317L18.9853 2.54392C19.8922 2.61922 20.6269 3.27838 20.7623 4.13819C20.7764 4.22748 20.79 4.31681 20.8033 4.40618L14.1172 7.95385C12.574 8.77272 10.6974 8.77272 9.15413 7.95385L2.46812 4.40622C2.48142 4.31683 2.4951 4.22749 2.50916 4.13819C2.64454 3.27838 3.37926 2.61922 4.2862 2.54392L6.10198 2.39317ZM21.024 6.25953C21.2572 8.86363 21.17 11.4874 20.7623 14.0768C20.6269 14.9366 19.8922 15.5957 18.9853 15.671L17.1695 15.8218C13.4873 16.1275 9.7842 16.1275 6.10198 15.8218L4.28621 15.671C3.37926 15.5957 2.64454 14.9366 2.50916 14.0768C2.10147 11.4874 2.01423 8.86366 2.24744 6.25957L8.27828 9.45956C10.3663 10.5675 12.9051 10.5675 14.9931 9.45957L21.024 6.25953Z" fill="#C2C3CB"/>
                        </svg>
                        <input type='email' placeholder='Email'/>
                    </form>
                    <form className='password'>
                        <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.79717 16.8844C7.79717 15.8681 8.62103 15.0442 9.63731 15.0442C10.6536 15.0442 11.4774 15.8681 11.4774 16.8844C11.4774 17.9006 10.6536 18.7245 9.63731 18.7245C8.62103 18.7245 7.79717 17.9006 7.79717 16.8844Z" fill="#C2C3CB"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.26612 10.2563L3.87915 6.7736C3.82953 6.32709 3.82953 5.87645 3.87915 5.42994L3.90708 5.17858C4.20332 2.51235 6.29937 0.402737 8.96363 0.0892946C9.41119 0.0366414 9.86337 0.0366414 10.3109 0.0892947C12.9752 0.402737 15.0712 2.51235 15.3675 5.17858L15.3954 5.42994C15.445 5.87645 15.445 6.32709 15.3954 6.7736L15.0084 10.2563L15.8507 10.3236C17.179 10.4296 18.2636 11.4281 18.4789 12.743C18.928 15.4857 18.928 18.2831 18.4789 21.0257C18.2636 22.3406 17.179 23.3391 15.8507 23.4451L14.0153 23.5917C11.1013 23.8243 8.17337 23.8243 5.25934 23.5917L3.42395 23.4451C2.0957 23.3391 1.01111 22.3406 0.795796 21.0257C0.346714 18.2831 0.346714 15.4857 0.795796 12.743C1.01111 11.4281 2.0957 10.4296 3.42395 10.3236L4.26612 10.2563ZM9.17864 1.91683C9.48335 1.88098 9.79121 1.88098 10.0959 1.91683C11.9098 2.13024 13.3369 3.56653 13.5386 5.38179L13.5665 5.63315C13.6011 5.9446 13.6011 6.25894 13.5665 6.57039L13.1725 10.1163C10.8181 9.96468 8.45642 9.96468 6.10202 10.1163L5.70803 6.57039C5.67343 6.25894 5.67343 5.9446 5.70803 5.63315L5.73596 5.38179C5.93766 3.56653 7.36472 2.13024 9.17864 1.91683ZM13.8689 12.0114C11.0523 11.7865 8.22234 11.7865 5.40578 12.0114L3.57038 12.1579C3.0859 12.1966 2.69029 12.5608 2.61176 13.0404C2.19492 15.5861 2.19492 18.1826 2.61176 20.7283C2.69029 21.208 3.0859 21.5722 3.57038 21.6108L5.40578 21.7574C8.22234 21.9822 11.0523 21.9822 13.8689 21.7574L15.7043 21.6108C16.1888 21.5722 16.5844 21.208 16.6629 20.7283C17.0798 18.1826 17.0798 15.5861 16.6629 13.0404C16.5844 12.5608 16.1888 12.1966 15.7043 12.1579L13.8689 12.0114Z" fill="#C2C3CB"/>
                        </svg>
                        <input type='password' placeholder='Password'/>
                    </form>
                    <form className='enter'>
                        <button type='submit'>Sign In</button>
                    </form>
                </div>
                <div className='sure'>Create A New Account? <Link to='/eatly/signup'>Sign Up</Link></div>
                
                    <div className='privecy'>Privacy Policy</div>
                    <div className='copy'>Copyright 2024</div>
                
            </div>
            <div className="right-in">
                <img src={photoDish} alt=''/>
                <div className='txt'>
                    <h2>Find Foods With Love </h2>
                    <p>Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.</p>
                    <svg width="52" height="6" viewBox="0 0 52 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="6" rx="3" fill="white"/>
                        <circle opacity="0.5" cx="35" cy="3" r="3" fill="white"/>
                        <circle opacity="0.5" cx="49" cy="3" r="3" fill="white"/>
                    </svg>

                </div>

            </div>
        </div>
    )
}
export default SignIn;