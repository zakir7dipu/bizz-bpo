import Link from "next/link";

const Footer = () => {
    return (
        <div className="footer-middle new-style">
            <div className="container">
                <div className="footer-bg">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="widget widgets-company-info mb-4 mb-lg-0">
                                <div className="footer-new-logo">
                                    <img src="assets/images/bizz-logo.png" alt=""/>
                                </div>
                                <div className="company-info-desc">
                                    <p>
                                        Energistically repurpose standards services into whereas
                                        productivate Rapidiously morph best
                                    </p>
                                </div>
                                <div className="follow-company-icon">
                                    <a className="social-icon-color" href="#">
                                        {" "}
                                        <i className="bi bi-facebook"/>{" "}
                                    </a>
                                    <a className="social-icon-color2" href="#">
                                        {" "}
                                        <i className="bi bi-instagram"> </i>{" "}
                                    </a>
                                    <a className="social-icon-color1" href="#">
                                        {" "}
                                        <i className="bi bi-twitter"/>{" "}
                                    </a>
                                    <a className="social-icon-color3" href="#">
                                        {" "}
                                        <i className="bi bi-youtube"/>{" "}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="widget widget-nav-menu one">
                                <h4 className="widget-title">Explor</h4>
                                <div className="menu-quick-link-content">
                                    <ul className="footer-menu">
                                        <li>
                                            <Link legacyBehavior href="about"> About Us </Link>
                                        </li>
                                        <li>
                                            <Link legacyBehavior href="service"> Our Service</Link>
                                        </li>
                                        <li>
                                            <Link legacyBehavior href="portfolio"> Portfolio </Link>
                                        </li>
                                        <li>
                                            <Link legacyBehavior href="contact"> Contact Us </Link>
                                        </li>
                                        <li>
                                            <Link legacyBehavior href="#"> Career </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="widget widget-nav-menu">
                                <h4 className="widget-title"> Userful Links </h4>
                                <div className="menu-quick-link-content">
                                    <ul className="footer-menu">
                                        <li>
                                            <a href="#"> Partners </a>
                                        </li>
                                        <li>
                                            <a href="#"> Testimonials </a>
                                        </li>
                                        <li>
                                            <a href="#"> Word Process </a>
                                        </li>
                                        <li>
                                            <a href="#"> Insights </a>
                                        </li>
                                        <li>
                                            <a href="#"> FAQ </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div id="em-recent-post-widget" className="mt-5 mt-sm-0">
                                <div className="single-widget-item">
                                    <h4 className="widget-title">Get In Touch</h4>
                                </div>
                                <div className="widget-location">
                                    <h4>Contacts</h4>
                                    <span>+880 392 (4560) 290</span>
                                    <span>example@gmail.com</span>
                                </div>
                                <div className="widget-location">
                                    <h4>Locations</h4>
                                    <span>602/B, Uttara, Sandigo-USA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-area d-flex align-items-center">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-7">
                            <div className="footer-bottom-content">
                                <div className="footer-bottom-content-copy">
                                    <p>Copyright © Bizz Solutions PLC all rights reserved.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="footer-bottom-menu">
                                <ul>
                                    <li>
                                        <Link Link legacyBehavior href="about">About</Link>
                                    </li>
                                    <li>
                                        <Link Link legacyBehavior href="privacy-policy">Privacy Policy </Link>
                                    </li>
                                    <li>
                                        <Link Link legacyBehavior href="service">Services</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
