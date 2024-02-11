import { useEffect } from "react";
import { useState } from "react";
import AdminSideNav from "./Admin-sideNav";
const Admin = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch("http://159.65.21.42:9000/products");
            const data = await response.json();
            setProducts(data);
        };
        getProducts();
    }, []);


    return (
        <div className="Admin-page-container">
            <div className="Admin-page">
                <AdminSideNav />
                <div className="MainBody">
                    <div className="Item-overview-container">

                        <h1>Item Overview</h1>
                        <div className="Item-Overview">
                            <div className="total-products dashboard-container">
                                <i></i>
                                <h1>32</h1>
                                <span>Total Products</span>
                            </div>
                            <div className="total-users dashboard-container">
                                <i></i>
                                <h1>45</h1>
                                <span>Total Users</span>
                            </div>
                            <div className="total-cart-products dashboard-container">
                                <i></i>
                                <h1>35</h1>
                                <span>Total Cart Products</span>
                            </div>
                        </div>
                        <div className="product-display-container">
                            <h1>Products</h1>
                            <div className="Products-display">
                                <div className="product-display-header">
                                    <ul>
                                        <li>S/N</li>
                                        <li>Name</li>
                                        <li>Description</li>
                                        <li>Price</li>
                                    </ul>
                                </div>
                                <div className="product-display-body">
                                    {products.filter( product => product.category === "KongaProducts").map((product, index) => (
                                        <div className="product-display-body-item" key={index}>
                                            <ul>
                                                <li className="s-n-class">{index + 1}</li>
                                                <li>{product.name}</li>
                                                <li>{product.description}</li>
                                                <li className="prodprice-class">  &#8358;{product.price}</li>
                                            </ul>
                                            <hr />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Admin;