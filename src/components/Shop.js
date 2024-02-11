
import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import yakata from "./img/yakata2.jpg";
import Footer from "./footer";
import KgNow from "./img/kongaNow.jpeg"
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Shop = () => {
    const [Shopitems, setShopItems] = useState([]);

    useEffect(() => {
        const getShopitems = async () => {
            try {
                const resp = await fetch("http://159.65.21.42:9000/products");
                const data = await resp.json();
                setShopItems(data);
                // console.log(data);
            } catch (error) {
                console.log(error);
            }
        };
        getShopitems();
    }, []);


    return (
        <div>
            <NavBar />
            <div className="shop-page py-4">
                <div className="top-shop-page">
                    <div className="top-page d-flex justify-content-between justify-content-content-between">
                        <p>Home <b>Computers And Accessories</b> </p>
                        <p className="results">1-40 of 1000 results</p>
                    </div>
                    <div className="computer-navi d-flex justify-content-between justify-content-content-between">
                        <h1>Computers and Accessories</h1>
                        <div className="sort ">
                            <p>Sort By:</p>
                            <div className="filter d-flex justify-content-between">
                                <div className="relevance">
                                    relevance
                                </div>
                                <div className="price-hl">
                                    Price - High to Low
                                </div>
                                <div className="price-lh">
                                    Price - Low to High
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="shop-category d-flex ">
                    <div className="shop-navigation">
                        <b>Browse Categories</b>
                        <ul>
                            <li>Computing Accessories</li>
                            <li>Printers, Scanners and Accessories...</li>
                            <li>WiFi & Networking</li>
                            <li>Laptops</li>
                            <li>Computer Software</li>
                            <li>Desktop and Monitors</li>
                            <li>PC Gaming</li>
                            <li>Projectors & Accessories</li>
                            <li>Computer Components</li>
                            <li>Computing Bundles</li>
                        </ul>
                        <hr />
                        <b>Price</b>
                        <ul>
                            <li>
                                <input type="checkbox" id="2000below" />
                                <label htmlFor="2000below"> &#8358;Under 2000</label>
                            </li>
                            <li>
                                <input type="checkbox" id="2k-5k" />
                                <label htmlFor="2k-5k">&#8358;2000 - 5000</label>
                            </li>
                            <li>
                                <input type="checkbox" id="5k-10k" />
                                <label htmlFor="5k-10k">&#8358;5000 - 10000</label>
                            </li>
                            <li>
                                <input type="checkbox" id="10k-15k" />
                                <label htmlFor="10k-15k">&#8358;10000 - 20000</label>
                            </li>
                            <li>
                                <input type="checkbox" id="" />
                                <label htmlFor="2000below">&#8358;20000 - 40000</label>
                            </li>
                            <li>
                                <input type="checkbox" id="2000below" />
                                <label htmlFor="2000below">&#8358; Above 40000</label>
                            </li>
                        </ul>
                        <div className="custom-price-range">
                            <header><b>Custom Price Range</b></header>
                            <div className="min-max" >
                                <input type="text" placeholder="&#8358;MIN" />
                                <input type="text" placeholder="&#8358;Max" />
                                <div className="GO">
                                    GO
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="brand">
                            <header><b>Brand</b></header>
                            <input type="search" placeholder="Search Brand..." />
                            <div className="brand-div">
                                <div className="product-brand d-flex justify-content-between ">
                                    <div>
                                        <input type="checkbox" id="HP" />
                                        <label htmlFor="HP">HP</label>
                                    </div>
                                    5044
                                </div>
                                <div className="product-brand d-flex justify-content-between">
                                    <div>
                                        <input type="checkbox" id="LogiTech" />
                                        <label htmlFor="HP">LogiTech</label>
                                    </div>
                                    5044
                                </div>
                                <div className="product-brand d-flex justify-content-between">
                                    <div>
                                        <input type="checkbox" id="Microsoft" />
                                        <label htmlFor="HP">Microsoft</label>
                                    </div>
                                    5044
                                </div>
                                <div className="product-brand d-flex justify-content-between">
                                    <div>
                                        <input type="checkbox" id="Lenovo" />
                                        <label htmlFor="HP">Lenovo</label>
                                    </div>
                                    5044
                                </div>
                                <div className="product-brand d-flex justify-content-between">
                                    <div>
                                        <input type="checkbox" id="SanDisk" />
                                        <label htmlFor="HP">SanDisk</label>
                                    </div>
                                    5044
                                </div>
                                <div className="product-brand d-flex justify-content-between">
                                    <div>
                                        <input type="checkbox" id="Tp-Link" />
                                        <label htmlFor="HP">Tp-Link</label>
                                    </div>
                                    5044
                                </div>
                                <div className="product-brand d-flex justify-content-between">
                                    <div>
                                        <input type="checkbox" id="Canon" />
                                        <label htmlFor="HP">Canon</label>
                                    </div>
                                    5044
                                </div>
                                <div className="product-brand d-flex justify-content-between">
                                    <div>
                                        <input type="checkbox" id="Dell" />
                                        <label htmlFor="HP">Dell</label>
                                    </div>
                                    5044
                                </div>
                                <div className="product-brand d-flex justify-content-between">
                                    <div>
                                        <input type="checkbox" id="Apple" />
                                        <label htmlFor="HP">Apple</label>
                                    </div>
                                    5044
                                </div>
                                <div className="product-brand d-flex justify-content-between">
                                    <div>
                                        <input type="checkbox" id="A&S" />
                                        <label htmlFor="HP">A&S</label>
                                    </div>
                                    5044
                                </div>
                                <div className="product-brand d-flex justify-content-between">
                                    <div>
                                        <input type="checkbox" id="SeaGate" />
                                        <label htmlFor="HP">SeaGate</label>
                                    </div>
                                    5044
                                </div>
                                <div className="product-brand d-flex justify-content-between">
                                    <div>
                                        <input type="checkbox" id="Havit" />
                                        <label htmlFor="HP">Havit</label>
                                    </div>
                                    5044
                                </div>
                                <div className="product-brand d-flex justify-content-between">
                                    <div>
                                        <input type="checkbox" id="Asus" />
                                        <label htmlFor="HP">Asus</label>
                                    </div>
                                    5044
                                </div>
                                <div className="product-brand d-flex justify-content-between">
                                    <div>
                                        <input type="checkbox" id="Western Digital" />
                                        <label htmlFor="HP">Western Digital</label>
                                    </div>
                                    5044
                                </div>
                                <div className="product-brand d-flex justify-content-between">
                                    <div>
                                        <input type="checkbox" id="Epson" />
                                        <label htmlFor="HP">Epson</label>
                                    </div>
                                    5044
                                </div>
                            </div>

                        </div>
                        <hr />
                        <div className="item-availability">
                            <header><b>Item Availability</b></header>
                            <div className="pt-3">
                                <div className="product-available d-flex justify-content-between">
                                    <div>
                                        <input type="checkbox" id="merchant" />
                                        <label htmlFor="merchant">In Merchant Store</label>
                                    </div>
                                    28304
                                </div>
                                <div className="product-available d-flex justify-content-between">
                                    <div>
                                        <input type="checkbox" id="Konga-store" />
                                        <label htmlFor="Konga-store">In Konga Warehouse</label>
                                    </div>
                                    113
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="shipping">
                            <header><b>Shipping</b></header>
                            <div className="product-available d-flex justify-content-between">
                                <div>
                                    <input type="checkbox" id="delivery-pay" />
                                    <label htmlFor="delivery-pay">Pay on Delivery</label>
                                </div>
                                21
                            </div>
                        </div>
                        <hr />
                        <div className="sold-by-konga">
                            <header><b>Sold By Konga</b></header>
                            <div className="sold-by-konga d-flex justify-content-between">
                                <div>
                                    <input type="checkbox" id="sold-by-konga" />
                                    <label htmlFor="sold-by-konga">Sold By Konga</label>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="rating">

                        </div>
                        <div className="shop-categories">

                        </div>
                    </div>
                    <div className="category-products">
                        {Shopitems.filter(item => item.category === "KongaProducts").map(item => (
                            <Link to={"/shop/details/" + item.id} className="shop-item" key={item.id}>
                                <div className="category-product" key={item.id}>
                                    <div className="category-product-top d-flex">
                                        <img src={yakata} alt="img" />
                                        <i className="indicate"><MdFavoriteBorder /></i>
                                    </div>
                                    <img src={item.image} alt="img" />
                                    <header>{item.name}</header>
                                    <hr />
                                    <div className="product-midsec">
                                        <div className="price-div">
                                            <h1> &#8358;{item.price}</h1>
                                            <img src={KgNow} alt="img" />
                                        </div>
                                        <s>&#8358;330,446</s>
                                        <hr />
                                    </div>
                                    <p className="product-midsec-p">Same Day Delivery Lagos | Abuja</p>
                                    <span className="d-flex">Sold by <a className="pan">Konga</a></span>
                                    <Link to="/cart">
                                        <div className="product-btn-div">
                                            <button className="product-btn">Add To Cart </button>
                                        </div>
                                    </Link>
                                </div>
                            </Link>
                        ))}
                        
                        {Shopitems.length === 0 && (
                            <div className="no-products">
                                <h1>No Products Found</h1>
                            </div>
                        )}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Shop;