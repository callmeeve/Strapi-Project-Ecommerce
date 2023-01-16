import React from 'react'
import Link from 'next/link'

export default function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark p-md-3 fixed-top">
                <div className="container">
                    <a className="navbar-brand p-sm-0" href="#">Paras Bagiak</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">

                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                                <Link href="/" legacyBehavior>
                                    <a className="nav-link" href="#">Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/product " legacyBehavior>
                                    <a className="nav-link" href="#">Product</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/blog " legacyBehavior>
                                    <a className="nav-link" href="#">Blog</a>
                                </Link>
                            </li>
                            <a className="btn" href="#" id="demo">Contact Us</a>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
