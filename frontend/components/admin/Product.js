

const Product = ({ data }) => {
    return (
        <>
            <div className="table-responsive">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-12"><h2>Product<b>Details</b></h2></div>
                        </div>
                    </div>
                    <table className="table table-bordered table-light">
                        <thead>
                            <tr>
                                {/* <th>Gambar</th> */}
                                <th>kdRst</th>
                                <th>Nama</th>
                                <th>Deskripsi</th>
                                <th>Harga</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((products, idx) => (
                                <tr key={idx}>
                                    {/* <td><img className="img-fluid" src={`http://localhost:1337${products.attributes.gambar.data.attributes.url}`} /></td> */}
                                    <td>{products.attributes.kdRst}</td>
                                    <td>{products.attributes.nama}</td>
                                    <td>{products.attributes.deskripsi}</td>
                                    <td>
                                        ${products.attributes.harga}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Product;