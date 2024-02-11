import { MdArrowBack, MdArrowForwardIos } from "react-icons/md";
import React from "react";
import NavBar from "./NavBar";
import itemImg from "./img/Lenovo v15.webp"
import mastercard from "./img/mastercard.webp";
import visacard from "./img/visacard1.webp";
import verve from "./img/vervecard1.webp";
import KongaPay from "./img/KongaPay.webp";
import { useState } from "react";
import { Link } from "react-router-dom";
const Cart = () => {
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(238000);

    const handleQuantityDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setTotal(total - 238000);
        }
        else {
            setQuantity(quantity);
            setTotal(total);
        }
    }
    const handleQuantityIncrease = () => {
        setQuantity(quantity + 1);
        setTotal(total + 238000);
    }
    
    return (
        <div>
            <NavBar />
            <div className="cart-page">
                <div className="product-nav">
                    <div className="product-navi d-flex">
                        <span>Home <MdArrowForwardIos /></span>
                        <p>Shopping Cart</p>
                    </div>
                    <header>Shopping Cart</header>
                </div>
                <div className="Cart-container">
                    <Link to = "/shop">
                    <button className="Cart-container-btn"> <MdArrowBack /> Continue Shopping</button>
                    </Link>
                    <div className="d-flex justify-content-between">
                        <div className="ordered-products">
                            <div className="ordered-products-header">
                                <span className="item-details-header">
                                    Item Details
                                </span>
                                <span className="Item-Quantity-header">
                                    Quantity
                                </span>
                                <span className="Item-price-header">
                                    Item Price
                                </span>
                                <div className="Action-header">
                                    Action
                                </div>
                            </div>
                            <div className="cart-items">
                                <div className="item-details">
                                    <img src={itemImg} alt="img" />
                                    <div className="item-description">
                                        <p>
                                            V15-igl N4020 4g 256g Dos Win 10 <br /> 82c3001nu...
                                        </p>
                                        <div className="konga-ad">
                                            sold by <span>Konga</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-item-quantity d-flex">
                                    <button className="btnchange" onClick={handleQuantityDecrease}> - </button>
                                    <p>{quantity}</p>
                                    <button className="btnchange" onClick={handleQuantityIncrease}> + </button>
                                </div>
                                <div className="cart-item-price">
                                    <p> &#8358;{total} </p>
                                    <span>&#8358;238,000 x {quantity} item</span>
                                </div>
                                <div className="Cart-Action">
                                    <p>Remove item</p>
                                    <p>Save for Later</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-summary">
                            <div className="order-summary-header">
                                <p className="m-0 p-2"> Order Summary</p>
                                <p className="m-0 p-2">{quantity} item</p>
                            </div>
                            <hr />
                            <div className="deliverycharge">
                                <p>Delivery charge:</p>
                                <span>
                                    Add your Delivery address at checkout to see delivery charges
                                </span>
                            </div>
                            <hr />
                            <div className="subtotal d-flex justify-content-between">
                                <p>Subtotal:</p>
                                <span className="subtotal-price">
                                    &#8358;238,000
                                </span>
                            </div>
                            <hr />
                            <div className="total">
                                <p><b>Total:</b></p>
                                <span className="total-price">
                                    &#8358;{total}
                                </span>
                            </div>
                            <hr />
                            <p className="exclude">Excluding delivery charges</p>
                            <button className="checkout">
                                Continue to Checkout
                            </button>
                            <div className="acceptPay">
                                <span>
                                    We accept <img src={mastercard} alt="img" />
                                    <img src={visacard} alt="img" />
                                    <img src={verve} alt="img" />
                                    <img src={KongaPay} alt="img" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;