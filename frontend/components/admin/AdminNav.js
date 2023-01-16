import React, { useEffect } from 'react'
import Link from 'next/link'
import SignOut from './SignOut'

export default function AdminNav() {
    // useEffect(() => {
    //     let arrow = document.querySelectorAll(".arrow");
    //     for (var i = 0; i < arrow.length; i++) {
    //         arrow[i].addEventListener("click", (e) => {
    //             let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
    //             arrowParent.classList.toggle("showMenu");
    //         });
    //     }
    //     let sidebar = document.querySelector(".sidebar");
    //     let sidebarBtn = document.querySelector(".bx-menu");
    //     console.log(sidebarBtn);
    //     sidebarBtn.addEventListener("click", () => {
    //         sidebar.classList.toggle("close");
    //     });
    // })
    return (
        <>
            {/* <nav className="navbar px-3 navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand mx-3 my-0" href="#">Admin</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="offcanvas offcanvas-start text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Admin</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 admin">
                                <li className="nav-item">
                                    <Link href="/admin" legacyBehavior>
                                        <a className="nav-link active" aria-current="page">Dashboard</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/admin/inputproduk" legacyBehavior>
                                        <a className="nav-link" >Input Produk</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/admin/updateproduk" legacyBehavior>
                                        <a className="nav-link" >Update Produk</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav> */}
            <div className="sidebar close">
                <div className="logo-details">
                    <i className="bx bxl-creative-commons bx-tada" />
                    <span className="logo_name">CodingLab</span>
                    
                </div>
                <ul className="nav-links">
                    <li>
                        <Link href="/admin" legacyBehavior>
                        <a>
                            <i className="bx bx-grid-alt" />
                            <span className="link_name">Dashboard</span>
                        </a>
                        </Link>
                        
                    </li>
                    <li>
                        <Link href="/admin/product" legacyBehavior>
                        <a>
                            <i className="bx bx-food-menu" />
                            <span className="link_name">Product</span>
                        </a>
                        </Link>
                        
                    </li>
                    <li>
                        <Link href="/admin/inputrestaurant" legacyBehavior>
                        <a href="#">
                            <i className="bx bx-add-to-queue" />
                            <span className="link_name">Add</span>
                        </a>
                        </Link>
                        
                    </li>
                    <li>
                        <Link href="/admin/updaterestaurant" legacyBehavior>
                        <a href="#">
                            <i className="bx bx-edit" />
                            <span className="link_name">Edit</span>
                        </a>
                        </Link>
                    </li>
                    <li>
                        {/* <a href="#">
                            <i className="bx bx-log-out" />
                            <span className="link_name">Log Out</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Log Out</a></li>
                        </ul> */}
                        <SignOut/>
                    </li>
                </ul>
            </div>
        </>
    )
}
