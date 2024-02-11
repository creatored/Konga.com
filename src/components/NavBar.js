import img1 from "./img/k_travels2.webp"
import img2 from "./img/konga_pay.webp"
import img3 from "./img/new_konga_drinks.webp"
import img4 from "./img/konga_health.webp"
import img5 from "./img/k_express2.webp"
import img6 from "./img/new_konga_groceries.webp"
import img7 from "./img/kongaTV.webp"
import img8 from "./img/LOGO.png"
import mobolelogo from "./img/mobile-logo.webp"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from "react-icons/fa";
import { IoStorefrontOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgMoreO } from "react-icons/cg";
import { IoMdShirt } from "react-icons/io";
import { HiDesktopComputer } from "react-icons/hi";
import { BsPhone } from "react-icons/bs";
import { IoPricetagSharp } from "react-icons/io5";
import { TbShoppingCartFilled } from "react-icons/tb";
import Dropdown from "./Dropdown"
import Megamenu from "./Megamenu"
const NavBar = () => {

    return (
        <div className="NavBar">
            <div className="logo-nav">
                <div className="mobile-nav d-flex d-sm-none ">
                    <div className="offcanvas-container">
                        <button class="btn btn-tertiary " type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                            <RxHamburgerMenu className="hamburger" />
                        </button>
                        <div class="offcanvas offcanvas-start" id="demo">
                            <div class="offcanvas-header">
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                            </div>
                            <div class="offcanvas-body" className="offcanvas-body">
                                <a class="btn btn-tertiary" href="#" role="button">Login</a>
                                <a class="btn btn-tertiary" href="#" role="button">Signup</a>
                            </div>
                        </div>
                    </div>
                    <img src={mobolelogo} alt="img" className="Logo" />
                    <div className="nav-icons align-items-center">
                        <IoStorefrontOutline className="nav-icon" />
                        <AiOutlineShoppingCart className="nav-icon" class="m-3" />
                    </div>
                </div>
                <div className="mobile-search container d-block d-sm-none">
                    <input type="search" placeholder="Search for products, brands and categories..." className="search-input " />
                    <IoSearchOutline className="search-icon" />
                </div>
            </  div>
            <div className="mobile-navigation d-block d-sm-none">
                <div className="container-fluid mobile-navigation pt-3">
                    <ul className="row row-cols-5 text-center">
                        <li> <CgMoreO className="mobile-navigation-icon" /> <p>Browse all</p></li>
                        <li> <IoMdShirt className="mobile-navigation-icon" /> <p>Fashion</p></li>
                        <li> <HiDesktopComputer className="mobile-navigation-icon" /> <p>Computers</p></li>
                        <li> <BsPhone className="mobile-navigation-icon" /> <p>Phones</p></li>
                        <li> <IoPricetagSharp className="mobile-navigation-icon" /> <p>All Deals</p></li>
                    </ul>
                </div>
            </div>
            <div className="large-nav ">
                <div className="NavIntroImg container-fluid d-none d-sm-block pt-2 text-center">
                    <div class="row row-cols-5 justify-content-center">
                        <img src={img1} alt="img" />
                        <img src={img2} alt="img" />
                        <img src={img3} alt="img" />
                        <img src={img4} alt="img" />
                        <img src={img5} alt="img" />
                        <img src={img6} alt="img" />
                        <img src={img7} alt="img" />
                    </div>
                </div>
            </div>
            <div className="Move-nav">
                <div class="SearchLogoCart d-none d-sm-block">
                    <ul className="">
                        <Link to="/">
                            <img src={img8} alt="" className="SearchLogoCart-a" />
                        </Link>
                        <li>Store locator</li>
                        <li>Sell on Konga</li>
                        <div className="search-container mb-3">
                            <input type="text" placeholder="Search for products, brands and categories..." />
                            <div className="search-icon-div">
                                <FaSearch className="search-icon" />
                            </div>
                        </div>
                        <Dropdown />
                        <Link to="/signup" className="Logsign">
                            <li>Login/Signup</li>
                        </Link>
                        <Link to="/cart" className="cart-icon-div">

                            <div className="shopping-cart-div">
                                <TbShoppingCartFilled className="cart-icon" />
                                <span className="Counter-text">My Cart</span>
                                <p className="Counter-value"> 0 </p>
                            </div>

                        </Link>

                    </ul>
                </div>
                <div className="Nav_Dropdown d-none d-sm-block">
                    <ul>
                        <Link to="/shop" className="all-cate">
                            <li className="Nav_Dropdown-li" ><b>All Categories</b></li>
                        </Link>
                        <li className="Nav_Dropdown-li">Computers and Accessories</li>
                        <li className="Nav_Dropdown-li">Phones and Tablets</li>
                        <li className="Nav_Dropdown-li">Electronics</li>
                        <Megamenu />
                        <li className="Nav_Dropdown-li">Home and Kitchen</li>
                        <li className="Nav_Dropdown-li">Baby, Kids and Toys</li>
                        <li className="Nav_Dropdown-li">Others Categories</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default NavBar;
