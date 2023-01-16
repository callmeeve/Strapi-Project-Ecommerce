import React from 'react'

export default function ProductDetail({ data }) {
    return (
        <>
            {data.map((products, idx) => (
                <div className="row gx-4 gx-lg-5 align-items-center mb-5 px-5 py-3" key={idx}>
                    <div className="col-md-6">
                        {/* <img className="card-img-top mb-5 mb-md-0" src={`http://localhost:1337${products.attributes.gambar.data.attributes.url}`} alt="..." /> */}
                    </div>
                    <div className="col-md-6">
                        <h1 className="display-5 fw-bolder">{products.attributes.nama}</h1>
                        <div className="fs-5 mb-5">
                            <span className="fw-lead">${products.attributes.harga}</span>
                        </div>
                        <p className="lead">{products.attributes.deskripsi}</p>
                        <div className="d-flex">
                            <input className="form-control text-center me-3" id="inputQuantity" type="num" defaultValue={1} style={{ maxWidth: '3rem' }} />
                            <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                <i className="bx bx-cart-alt me-1" />
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
