import React from 'react';
import AdminSideNav from './Admin-sideNav';
import { useState } from "react";
const CreateProduct = () => {
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productQuantity, setProductQuantity] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productImage, setProductImage] = useState("");
    const [checkValue, setCheckValue] = useState(false);

    const handleProductPost = async (e) => {
        e.preventDefault();
        if (!productName || !productDescription || !productPrice || !productQuantity || !productCategory || !productImage) {
            setCheckValue(true);
        }
        else {
            let productData = {
                name: productName,
                description: productDescription,
                price: productPrice,
                quantity: productQuantity,
                category: productCategory,
                image: productImage,
            }
            try {
                const response = await fetch("http://159.65.21.42:9000/create/product", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(productData),
                });
                if (response.ok) {
                    alert("Product Created Successfully");
                    setProductName("");
                    setProductDescription("");
                    setProductPrice("");
                    setProductQuantity("");
                    setProductCategory("");
                    setProductImage("");
                } else {
                    alert(`Failed to create product`);
                }
            } catch (error) {
                console.error("Error adding product", error);
                alert("Error adding product");
            }
        }
    }
    return (
        <div className="create-product-container">
            <AdminSideNav />
            <div className="create-product-form">
                <h1>Create Product</h1>
                <form>
                    <div className="form-group">
                        <label>Product Name:</label>
                        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Product Name" />
                        {checkValue === true && productName === "" ? <span style={{ color: "red" }}>Product name Required</span> : null}
                    </div>

                    <div className="form-group">
                        <label>Product Description:</label>
                        <input type="text" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} placeholder="Product Description" />
                        {checkValue === true && productDescription === "" ? <span style={{ color: "red" }}>Product description Required</span> : null}
                    </div>

                    <div className="form-group">
                        <label>Product Price:</label>
                        <input type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} placeholder="Product Price" />
                        {checkValue === true && productPrice === "" ? <span style={{ color: "red" }}>Product price Required</span> : null}
                    </div>

                    <div className="form-group">
                        <label>Product Quantity:</label>
                        <input type="number" value={productQuantity} onChange={(e) => setProductQuantity(e.target.value)} placeholder="Product Quantity" />
                        {checkValue === true && productQuantity === "" ? <span style={{ color: "red" }}>Product quantity Required</span> : null}
                    </div>

                    <div className="form-group">
                        <label>Product Category:</label>
                        <input type="text" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} placeholder="Product Category" />
                        {checkValue === true && productCategory === "" ? <span style={{ color: "red" }}>Product category Required</span> : null}
                    </div>

                    <div className="form-group">
                        <label>Product Image:</label>
                        <input type="url" value={productImage} onChange={(e) => setProductImage(e.target.value)} placeholder="Product Image" /> <br />
                        {checkValue === true && productImage === "" ? <span style={{ color: "red" }}>Product image Required</span> : null}
                    </div>

                    <button onClick={handleProductPost}>Create Product</button>
                </form>
            </div>
        </div>
    );
}

export default CreateProduct;