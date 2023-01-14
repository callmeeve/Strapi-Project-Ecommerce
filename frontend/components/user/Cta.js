import React from 'react'

export default function Cta() {
    return (
        <>
            <div className="container text-center py-4 py-md-6">
                <div className="lc-block card border-0 text-center rounded p-4 p-lg-6" style={{ background: 'url(/cta.jpg)  center / cover no-repeat' }}>
                    <div className="row card-body mb-0 mb-lg-4 mt-3">
                        <div className="col-xl-11 col-xxl-9 mx-auto text-white">
                            <div className="lc-block">
                                <h3 editable="inline" className="fw-bold display-6">Join Our Member And Get<br/>Discount To 35%</h3>
                            </div>
                        </div>
                    </div>
                    <div className="lc-block"><a className="btn" href="#" id="demo" role="button">Register Now</a></div>
                </div>
            </div>

        </>
    )
}
