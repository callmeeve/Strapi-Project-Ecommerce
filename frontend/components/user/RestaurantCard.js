import React from 'react'
import Link from 'next/link'

export default function RestaurantCard({ data }) {
    return (
        <>
            {data.map((restaurants, idx) => (
                <div className="col mb-5" key={idx}>
                    <div className="card h-100">
                        {/* Product image*/}
                        {/* <img className="card-img-top img-fluid" src={`http://localhost:1337${restaurants.attributes.gambar.data.attributes.url}`} alt="..." /> */}
                        {/* Product details*/}
                        <div className="card-body p-4">
                            <div className="text-start">
                                {/* Product name*/}
                                <h5 className="fw-bolder">{restaurants.attributes.nama}</h5>
                                <p className="fw-display" style={{ fontSize: "15px" }}>{restaurants.attributes.deskripsi}</p>
                                {/* Product price*/}
                                {/* $ {restaurants.attributes.harga} */}
                            </div>
                        </div>
                        {/* Product actions*/}
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-start">
                                <Link legacyBehavior  href={
                                    {pathname:'/product/productbykdrst',
                                        query: {
                                            kdRst: restaurants.attributes.kdRst,
                                            nama: restaurants.attributes.nama,
                                            deskripsi: restaurants.attributes.deskripsi
                                        }
                                    }
                                 }>
                                    <a className="btn btn-outline-dark mt-auto mb-3 rounded-0" href="#">Check Product</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
