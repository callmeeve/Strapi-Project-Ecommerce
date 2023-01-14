import React from 'react'
import ProductCard from '../../components/user/ProductCard';
import UserLayout from '../../components/user/UserLayout'
import { ApolloClient, gql, InMemoryCache, } from '@apollo/client';
import FilterProduct from '../../components/FilterProduct';

export default function index({products}) {
    return (
        <>
            <UserLayout>
                <header className="masthead">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-12 text-center">
                                <h1 className="fw-bolder text-white">Delicious Recipes</h1>
                                <p className="fw-display text-white mt-3 mb-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Praesent gravida leo non ornare suscipit. Integer ex urna, congue at aliquet.
                                </p>
                                <button className="btn" id="pricing">ORDER NOW</button>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="text-center mt-5 mb-5">
                        <h1 className="fw-bolder" style={{ fontWeight: "700", color: "#fc687b" }}>Our Top Rated Dish</h1>
                        <p className="fw-display mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Praesent gravida leo non ornare suscipit. Integer ex urna, congue at aliquet.
                        </p>
                    </div>
                    <FilterProduct />
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <ProductCard data={products.data} />
                    </div>
                </div>
            </UserLayout>
        </>
    )
}

export async function getServerSideProps({ query }) {
    let nama = query.nama
    { typeof nama === 'string' ? nama = nama : nama = "" }
    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache()
    })

    const { data } = await client.query({
        query: gql`
        query getAllProduct{
            products(filters:{nama:{containsi:"${nama}"}}){
                data {
                    id
                    attributes {
                        kdRst
                        nama
                        deskripsi
                        harga
                    }
                }
            }
        }`
    })
    return { props: { products: data.products } }
}