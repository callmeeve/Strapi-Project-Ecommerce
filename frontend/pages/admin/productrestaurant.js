import React from 'react'
import { useRouter } from 'next/router';
import RestaurantProduct from '../../components/admin/RestaurantProduct';
import Product from '../../components/admin/Product';
import { ApolloClient, gql, InMemoryCache, } from '@apollo/client';
import Link from 'next/link';

export default function productrestaurant({ products }) {
    const router = useRouter();
    return (
        <>
            <div className="container px-4 px-lg-5 my-5">
            <Link href="/admin">
                <i className="text-dark bx bx-chevrons-left me-1 my-3 fs-1"/>
            </Link>
            </div>
            <RestaurantProduct dataRst={router.query} />
            <Product data={products.data} />
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
                    }
                }
            }
        }`
    })
    return { props: { products: data.products } }
}