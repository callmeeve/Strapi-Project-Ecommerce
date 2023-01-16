import React from 'react'
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { useEffect } from 'react';
import axios from 'axios';
import Produk from '../../components/admin/Restaurant';
import SignOut from '../../components/admin/SignOut';
import { ApolloClient, gql, InMemoryCache,  } from '@apollo/client';
import Restaurant from '../../components/admin/Restaurant';

export default function AdminHome({restaurants}) {
    const { data: session } = useSession();

    useEffect(() => {
        if (session == null) return;
        console.log('session.jwt', session.jwt);
    }, [session]);
    return (
        <>
            {/* <Produk data={restaurants.data}/> */}
            {session && (
                <Restaurant data={restaurants.data} />
            )}
            <SignOut />

        </>
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
        query getAllRestaurant{
            restaurants(filters:{nama:{containsi:"${nama}"}}){
                data{
                    id
                    attributes {
                      kdRst
                      nama
                      deskripsi
                    }
                }
            }
        }`
    })
    return { props: { restaurants: data.restaurants } }
}


// export async function getServerSideProps({query}) {
//     const nama = query.nama
//     let url = `http://localhost:1337/api/products?populate=*`;
  
//     if (typeof nama === "string") {
//       url = `http://localhost:1337/api/products?filters[nama][$containsi]=${nama}&populate=*`
//     }
//     const res = await axios.get(url);
//     const products = await res.data;
//     return {props : {products}}
// }
