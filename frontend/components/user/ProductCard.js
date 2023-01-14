import React from 'react'

export default function ProductCard({data}) {
    return (
        <>
            {data.map((products, idx)=>(
                <div className="col mb-5" key={idx}>
                <div className="card h-100">
                    {/* Product image*/}
                    {/* <img className="card-img-top img-fluid" src={`http://localhost:1337${products.attributes.gambar.data.attributes.url}`} alt="..." /> */}
                    {/* Product details*/}
                    <div className="card-body p-4">
                        <div className="text-start">
                            {/* Product name*/}
                            <h5 className="fw-bolder">{products.attributes.nama}</h5>
                            <p className="fw-display" style={{fontSize: "15px"}}>{products.attributes.deskripsi}</p>
                            {/* Product price*/}
                            $ {products.attributes.harga}
                        </div>
                    </div>
                    {/* Product actions*/}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-start">
                            <a className="btn btn-outline-dark mt-auto mb-3 rounded-0" href="#">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </>
    )
}
