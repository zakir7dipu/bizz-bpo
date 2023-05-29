import { Fragment, useEffect } from "react";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import { animation, stickyNav } from "../utils";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import MobileMenu from "./header/MobileMenu";
import ScrollTop from "./ScrollTop";
const Layout = ({ children}) => {
  useEffect(() => {
    animation();
    stickyNav();
  }, []);

  return (
    <Fragment>
      <ImageView />
      <VideoPopup />
      <Header/>
      <MobileMenu />
      {children}
      <Footer/>
      <ScrollTop />
    </Fragment>
  );
};
export default Layout;
