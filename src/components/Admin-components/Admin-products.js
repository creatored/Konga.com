import AdminSideNav from "./Admin-sideNav";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const AdminProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch("http://159.65.21.42:9000/products");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        getProducts();
    }, []);


    return (
        <div className="admin-products-container">
            <AdminSideNav />
            <div className="admin-products">
                <div className="admin-products-header">
                    <h3>Admin Products</h3>
                    <Link to="/Admins/Create-products">
                        <button>+ Add New Product</button>
                    </Link>
                </div>
                <hr />
                <div className="admin-products-table-header">
                    <ul>
                        <li>Name</li>
                        <li className = "admin-products-table-header-desc">Description</li>
                        <li  className="admin-products-table-header-li">Price</li>
                        <li>Actions</li>
                    </ul>   
                </div>
                <div className="Admin-product-list">
                    {products.filter(product => product.category === "KongaProducts").map(product => (
                        <div>
                            <div className="Admin-product-list-item" key={product.id}>
                                <div className="productImgName">
                                    <img src={product.image} alt="img" />
                                    <h3>{product.name}</h3>
                                </div>
                                <p>{product.description}</p>
                                <span> &#8358;{product.price}</span>
                                <div className="Product-modify">
                                    <button className="EditBtn">Edit </button>
                                    <button className="DeleteBtn">Delete </button>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    );
};

export default AdminProducts;
