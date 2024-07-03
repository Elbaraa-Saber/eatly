import Navbar from "./UI/Header/ui";
import DownloadApp from "../../Widgets/DownloadApp/ui";
import TopDishes from "../../Widgets/TopDishes/ui";
import Control from "../../Widgets/Control/ui";
import Subscribe from "../../Widgets/Subscribe/Subscribe";
import Footer from "./UI/Footer/ui";
import "./style.css";
import Home from "../../Widgets/HomePage/Home";
import React from "react";
import { OurSuccess } from "../../Widgets/OurSuccess/ui";
import TopResturants from "../../Widgets/TopResturants/ui";
import Customer from "../../Widgets/Comments/ui";
import useWindowDimensions from "../../Shared/Hooks/getWidthScreen";

function Page() {
  const { height, width } = useWindowDimensions();

  return (
    <>
      <Navbar width={width}/>
      <div className="mainPage">
        <Home />
        <OurSuccess />
        <DownloadApp />
        <TopResturants />
        <TopDishes />
        <Control />
        <Customer />
        <Subscribe />
      </div>
      <Footer width={width}/>
    </>
  );
}

export default Page;
