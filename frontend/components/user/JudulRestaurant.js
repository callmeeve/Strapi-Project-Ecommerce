import React from 'react'

export default function JudulRestaurant({ dataRst }) {
    return (
        <>
            <div className="col md-12 mb-0 px-5 py-4">
                <h5 className="fw-bolder fs-1">{dataRst.nama}</h5>
                <p className="fw-display" style={{ fontSize: "1.2rem" }}>{dataRst.deskripsi}</p>
            </div>
        </>
    )
}
