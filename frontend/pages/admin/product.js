import React from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import Product from '../../components/admin/Product'
import { ApolloClient, gql, InMemoryCache,  } from '@apollo/client';

export default function product({products}) {
    return (
        <AdminLayout>
            <Product data={products.data}/>
        </AdminLayout>
    )
}


export async function getServerSideProps({ query }) {
    let nama = query.nama
    { typeof nama === 'string' ? nama = nama : nama = ""}
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