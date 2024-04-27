import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Features from '../components/Features';
import DownloadApp from '../components/DownloadApp';
import TopResturants from '../components/TopResturants';
import TopDishes from '../components/TopDishes';
import Control from '../components/Control';
import Customer from '../components/Customer';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';

function Page(){
    return(
        <>
            <Navbar/>
            <Home/>
            <Features/>
            <DownloadApp />
            <TopResturants />
            <TopDishes/>
            <Control/>
            <Customer/>
            <Subscribe/>
            <Footer/>
        </>
    )
}

export default Page;