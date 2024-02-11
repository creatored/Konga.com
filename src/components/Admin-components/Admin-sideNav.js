import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaHome, FaShopware, FaUser, FaUserEdit } from "react-icons/fa";
const AdminSideNav = () => {
    return (
        <div className="AdminSideNav">
            <h1>Admin Dashboard</h1>
            <ul>
                <Link to="/Admins" className="Admin-sidenav-li">
                    <li> <i><FaHome /></i> Dashboard</li>
                </Link>
                <Link to="/Admins/products" className="Admin-sidenav-li">
                    <li> <i>< FaShopware /></i> Products</li>
                </Link>
                <li> <i>< FaUser /></i> Users</li>
                <Link to="/Admins/Create-products" className="Admin-sidenav-li">
                    <li> <i>< FaEdit /></i> Create Products</li>

                </Link>
                <Link className="Admin-sidenav-li">
                    <li> <i> < FaUserEdit /></i> Create Users</li>
                </Link>
            </ul>
        </div>
    )
}
export default AdminSideNav;