import Footer from "./footer";
import { MdArrowForwardIos } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import redmi from "./img/redmi note 12.webp";
// import productImage from "./img/Lenovo v15.webp";
import NavBar from "./NavBar";
import { FaTwitter } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Product = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const getItem = async () => {
            try {
                const resp = await fetch("http://159.65.21.42:9000/products/" + item.id);
                const data = await resp.json();
                setItem(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };
        getItem();
    }, [id]);

    return (
        <div>
            <NavBar />
            <div className="product-page">
                <div className="product-nav">
                    <p>Home <MdArrowForwardIos /> Computers and Accessories <MdArrowForwardIos /> Laptops</p>
                    <header>Notebooks</header>
                </div>
                {item.id ? (
                    <div>
                        <div className="Product-body">
                            <div className="product-body-container">
                                <div className="product-image">
                                    <img src={item.image} alt="img" />
                                </div>
                                <div className="product-description">
                                    <div className="product-title">
                                        <h2>{item.title}</h2>
                                        <div className="product-code">
                                            <p>Product Code:</p><b>6151961</b>
                                        </div>
                                        <div className="product-brand">
                                            <p>Brand:</p><b>{item.category}</b>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="product-price-div">
                                        <div className="product-price">
                                            <h1>&#8358;{item.price}</h1>
                                            <s>&#8358;{item.price + 324}</s>
                                            <div className="price-save">
                                                <p>You save &#8358;{324}</p>
                                            </div>
                                        </div>

                                        <hr />
                                        <div className="product-quantity d-flex">
                                            <button className="btn-change"> - </button>
                                            <p> 1 </p>
                                            <button className="btn-change"> + </button>
                                        </div>
                                        <div className="bulkpurchase">
                                            <span>Call us for Bulk Purchases:</span>
                                            <p>07080635700</p>
                                        </div>
                                        <hr />
                                        <div className="add2cart-fave">
                                            <button className="add-to-cart-btn">Buy Now</button>
                                            <i><MdFavorite /></i>
                                            <span>Save for later</span>
                                        </div>
                                        <hr />
                                        <div className="transport-feature">
                                            <div className="transport-text">
                                                <i></i>
                                                Pickup & pay on Collection Available
                                            </div>
                                            <div className="transport-text">
                                                <i></i>
                                                Pickup & pay on Collection Available
                                            </div>
                                            <div className="transport-text">
                                                <i></i>
                                                Pickup & pay on Collection Available
                                            </div>
                                            <div className="transport-text">
                                                <i></i>
                                                Pickup & pay on Collection Available
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="Delivery-location-div">
                                            <p>Same day Delivery Available at:</p>
                                            <div className="Delivery-location">
                                                <span>Port Harcourt</span>
                                                <span>Lagos</span>
                                                <span>Abuja</span>
                                            </div>
                                        </div>
                                        <div className="shareWfriends">
                                            <p>Share With Friends</p>
                                            <div className="product-socials">
                                                <i>< FaFacebook className="face product-socials" /></i>
                                                <i>< FaWhatsapp className="what product-socials" /></i>
                                                <i>< FaTwitter className="twit product-socials" /></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="validate-text">
                                <h1>K</h1>
                                <p>Sold by <a href="#">Konga</a></p>
                            </div>
                        </div>
                        <div className="product-properties">
                            <div className="product-properties-header">
                                <header><p>Overview</p></header>
                                <header>Description</header>
                                <header>Shipping</header>
                                <header>Warranty</header>
                                <header>Return Policy</header>
                                <header>Reviews</header>
                            </div>
                            <div className="product-properties-content">
                                <p>{item.title}</p>
                                <p>{ item.description}</p>
                                <p>{item.category}</p>
                                {/* <p>{item.rating}</p> */}
                            </div>
                        </div>
                    </div>
                ) :
                    <div className="Loading-container px-5">
                        Loading...
                    </div>
                }
                <div className="product-properties">
                    <div className="similar-items-container">
                        <h1>Similar Items You May Like</h1>
                        <div className="similar-items-div">
                            <div className="similar-item">
                                <img src={redmi} alt="img" />
                                <h2>Xiami Redmi Note 12 - 6.67 ...</h2>
                                <h1>&#8358;190,000</h1>
                            </div>
                            <div className="similar-item">
                                <img src={redmi} alt="img" />
                                <h2>Xiami Redmi Note 12 - 6.67 ...</h2>
                                <h1>&#8358;190,000</h1>
                            </div><div className="similar-item">
                                <img src={redmi} alt="img" />
                                <h2>Xiami Redmi Note 12 - 6.67 ...</h2>
                                <h1>&#8358;190,000</h1>
                            </div><div className="similar-item">
                                <img src={redmi} alt="img" />
                                <h2>Xiami Redmi Note 12 - 6.67 ...</h2>
                                <h1>&#8358;190,000</h1>
                            </div><div className="similar-item">
                                <img src={redmi} alt="img" />
                                <h2>Xiami Redmi Note 12 - 6.67 ...</h2>
                                <h1>&#8358;190,000</h1>
                            </div><div className="similar-item">
                                <img src={redmi} alt="img" />
                                <h2>Xiami Redmi Note 12 - 6.67 ...</h2>
                                <h1>&#8358;190,000</h1>
                            </div><div className="similar-item">
                                <img src={redmi} alt="img" />
                                <h2>Xiami Redmi Note 12 - 6.67 ...</h2>
                                <h1>&#8358;190,000</h1>
                            </div><div className="similar-item">
                                <img src={redmi} alt="img" />
                                <h2>Xiami Redmi Note 12 - 6.67 ...</h2>
                                <h1>&#8358;190,000</h1>
                            </div><div className="similar-item">
                                <img src={redmi} alt="img" />
                                <h2>Xiami Redmi Note 12 - 6.67 ...</h2>
                                <h1>&#8358;190,000</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Product;