import { useState } from "react";
import fashion from "./img/fashion21.webp";
// import { Link } from "react-router-dom";
const Megamenu = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="phones-megamenu"
            onMouseEnter={() => { setShow(true) }}
            onMouseLeave={() => { setShow(false) }}
        >
            <button className="phones-btn">Konga Fashion</button>
            {show && (
                <div className="megamenu-content">
                    <div className="megamenu-content-left">
                        <ul>
                            <header><b>Women's Wear</b></header>
                            <li>Dresses</li>
                            <li>Tops</li>
                            <li>Trousers</li>
                            <li>Jumpsuits</li>
                            <li>Suits & Blazers</li>
                            <li>Skirts</li>
                            <li>Co-ordinates</li>
                            <li>Lingerie & Sleepwear</li>
                            <li>Ready to Wear</li>
                        </ul>
                        <ul>
                            <header><b>Women's Shoes</b></header>
                            <li>Ballerinas & Flats</li>
                            <li>Heels</li>
                            <li>Sandals & Slippers</li>
                            <li>Wedges</li>
                            <li>Sports Shoes</li>
                            <li>Shoes & Bags</li>
                        </ul>
                        <ul>
                            <header><b>Men's Wear</b></header>
                            <li>Shirts</li>
                            <li>Polos</li>
                            <li>T-shirts</li>
                            <li>Jeans</li>
                            <li>Trousers & Shorts</li>
                            <li>Suits, Blazers & Jackets</li>
                            <li>Pyjamas</li>
                            <li>Jerseys</li>
                            <li>Traditional Wear</li>
                        </ul>
                        <ul>
                            <header><b>Men's Shoes</b></header>
                            <li>Casual Shoes</li>
                            <li>Formal Shoes</li>
                            <li>Shoe Care & Accessories</li>
                        </ul>
                        <ul>
                            <header><b>Men's Accessories</b></header>
                            <li>Belts & Wallets</li>
                            <li>Socks & Underwear</li>
                            <li>Caps & Hats</li>
                            <li>Jewellery</li>
                            <li>Bags</li>
                            <li>Ties & Cufflinks</li>
                        </ul>
                        <ul>
                            <header><b>Watches</b></header>
                            <li>Men's Watches</li>
                            <li>Women's Watches</li>
                            <li>Unisex Watches</li>
                        </ul>
                        <ul>
                            <header><b>Fashion Bundles</b></header>
                            <li>Women's Fashion Bundles</li>
                            <li>Men's Fashion Bundles</li>
                        </ul>
                        <ul>
                            <li><b>Style Finder for Women</b></li>
                            <li>Monochrome</li>
                            <li>Floral</li>
                            <li>Bold in Black</li>
                            <li>9 to 5 Chic</li>
                            <li>Trending Now</li>
                            <li>Red Hot</li>
                        </ul>
                        <ul>
                            <li><b>Style Finder for Men</b></li>
                            <li>Monochrome</li>
                            <li>Prints</li>
                            <li>Wardrobe Basics</li>
                            <li>Men in Blue</li>
                            <li>Business Look</li>
                        </ul>
                        <ul>
                            <li><b>Plus Size</b></li>
                        </ul>
                        <ul>
                            <li><b>Under 5K Shop</b></li>
                            <li>Men's Fashion Under 5K</li>
                            <li>Women's Fashion Under 5K</li>
                        </ul>
                        <ul>
                            <li><b>Wedding Shop</b></li>
                            <li>Women's Wedding Shop</li>
                            <li>Men's Wedding Shop</li>
                        </ul>
                        <ul>
                            <li><b>Textiles</b></li>
                        </ul>
                    </div>
                        <img src={fashion} alt="img" />
                </div>
            )
            }

        </div >
    );
}

export default Megamenu;