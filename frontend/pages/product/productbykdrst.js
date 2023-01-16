import React from 'react'
import { ApolloClient, gql, InMemoryCache, } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ProductDetail from '../../components/user/ProductDetail';
import JudulRestaurant from '../../components/user/JudulRestaurant';

export default function productbykdrst({ products }) {
    const router = useRouter();
    return (
        <>
            <section className="py-5 bg-dark">
                <div className="container px-4 px-lg-5 my-5">
                    <Link href="/">
                        <i className="text-white bx bx-left-arrow-circle me-1 my-3 fs-1" />
                    </Link>
                    <div className="card">
                        <div className="card-header">
                            <JudulRestaurant dataRst={router.query} />
                        </div>
                        <div className="card-body"><ProductDetail data={products.data} /></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export async function getServerSideProps({ query }) {
    let kdRst = query.kdRst
    // {typeof nama === 'string' ? nama = nama : nama = ""}
    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache()
    })

    const { data } = await client.query({
        query: gql`
            query getProductByKdRst{
                products(filters:{kdRst:{containsi:"${kdRst}"}}){
                data {
                    id
                    attributes {
                        kdRst
                        nama
                        deskripsi
                        harga
                        restaurant {
                            data {
                                attributes {
                                    kdRst
                                    nama
                                    deskripsi
                                }
                            }
                        }
                    }
                }
            }
        }`
    })
    return { props: { products: data.products } }
}