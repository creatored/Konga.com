import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import { TiVendorAndroid } from "react-icons/ti";
function Footer() {
    return (
        <div className="Footer">
            <div className="footer-top ">
                <div className="footer-top-left">
                    <div className="footer-left-div ">
                        <i><MdEmail /></i>
                        <div className="footer-div-text">
                            <h3 className="h-5">Email Support</h3 >
                            <p>help@Konga.com</p>
                        </div>
                    </div>
                    <div className="footer-left-div">
                        <i><BsFillTelephoneFill /></i>
                        <div className="footer-div-text">
                            <h3 className="h-5">PHONE SUPPORT</h3 >
                            <p>0708 063 5700, 01 888 3435</p>
                        </div>
                    </div>
                    <div className="footer-left-div">
                        <i><IoLogoWhatsapp /></i>
                        <div className="footer-div-text">
                            <h3 className="h-5">WHATSAPP</h3 >
                            <p>0907 0038 400, 0809 460 5555</p>
                        </div>
                    </div>
                </div>
                <div className="footer-top-mid">
                    <h3 className="h-5">GET LATEST DEALS</h3>
                    <p>Our best promotions sent to your inbox.</p>
                </div>
                <div className="footer-top-end">
                    <input type="Email" placeholder="Email Address"/><button >Subscribe</button>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-body">
                    <div className="footer-body-ul">
                        <ul>
                            <header>ABOUT KONGA</header>
                            <li> Contact Us </li>
                            <li>About Us</li>
                            <li> Careers</li>
                            <li> Our Blog</li>
                            <li>Forum</li>
                            <li>Terms & Conditions</li>
                        </ul >
                        <ul>
                            <header>PAYMENT</header>
                            <li>Konga Pay</li>
                            <li>Wallet</li>
                            <li>Verve</li>
                            <li>Mastercard</li>
                            <li>Visa</li>
                        </ul >
                        <ul>
                            <header>BUYING ON KONGA</header>
                            <li>Buyers Safety Centre</li>
                            <li>FAQs</li>
                            <li>Delivery</li>
                            <li>Konga Return Policy</li>
                            <li>Digital Services</li>
                            <li>Bulk Purchase</li>
                        </ul >
                        <ul>
                            <header>MORE INFO</header>
                            <li>Site Map</li>
                            <li>Track My Order</li>
                            <li>Privacy Policy</li>
                            <li>Authentic Items Policy</li>
                        </ul >
                        <ul>
                            <header>MAKE MONEY ON KONGA</header>
                            <li>Contact Us</li>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Our Blog</li>
                            <li>Forum</li>
                            <li>Terms & Conditions</li>
                        </ul >
                    </div >
                    <div className="footer-body-side">
                        <header>DOWNLOAD & CONNECT WITH US </header>
                        <div className="app-store">
                            <div className="apple-store d-flex">
                                <i><FaApple /></i>
                                <p>Download on <br /> <b>APP STORE</b></p>
                            </div>
                            <div className="play-store d-flex">
                                <i><TiVendorAndroid /></i>
                                <p>Download on <br /> <b>APP STORE</b></p>
                            </div>
                        </div>
                        <div className="socials">
                            <i><FaFacebook /></i>
                            <i><FaTwitter /></i>
                            <i><FaInstagram /></i>
                            <i><FaYoutube /></i>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    )
}
export default Footer;