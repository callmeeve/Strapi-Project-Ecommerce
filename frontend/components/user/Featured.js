import React from 'react'

export default function Featured() {
    return (
        <>
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row text-center">
                    <div className="col-md-4">
                        <div className="p-lg-5 p-4 shadow">
                            <div className="lc-block mb-4"><img className="img-fluid" src="/food.svg" style={{ height: '10vh' }} />
                                <h4 className="fw-bold my-3">Easy To Order</h4>
                                <p className="fw-display">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lacus est.&nbsp;</p>
                            </div>{/* /lc-block */}
                        </div>
                    </div>{/* /col */}
                    <div className="col-md-4">
                        <div className="p-lg-5 p-4 shadow">
                            <div className="lc-block mb-4">
                                <img className="img-fluid" src="/drink.svg" style={{ height: '10vh' }} />
                                <h4 className="fw-bold my-3">Fastest Delivery</h4>
                                <p className="fw-display">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lacus est.&nbsp;</p>
                            </div>{/* /lc-block */}
                        </div>
                    </div>{/* /col */}
                    <div className="col-md-4">
                        <div className="p-lg-5 p-4 shadow">
                            <div className="lc-block mb-4">
                                <img className="img-fluid" src="/snack.svg" style={{ height: '10vh' }} />
                                <h4 className="fw-bold my-3">Best Quality</h4>
                                <p className="fw-display">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lacus est.&nbsp;</p>
                            </div>{/* /lc-block */}
                        </div>
                    </div>{/* /col */}
                </div>
            </div>
        </>
    )
}
