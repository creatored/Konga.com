import React, { useState, useEffect } from 'react';
import img8 from "./img/LOGO.png"
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { TbShoppingCartFilled } from "react-icons/tb";
import Dropdown from "./Dropdown";
import Megamenu from "./Megamenu";
const ScrollNav = () => {
    const [scrollNav, setScrollNav] = useState(false);
    useEffect(() => {
        const HandleScroll = () => {
            const ScrollY = window.scrollY;
            setScrollNav(ScrollY > 150);
        };
        window.addEventListener('scroll', HandleScroll);
        return () => window.removeEventListener('scroll', HandleScroll);
    }, []);
    return (
        <div className={`move-nav ${ scrollNav ? 'visible' : ''}`}>
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
    )
}
export default ScrollNav;