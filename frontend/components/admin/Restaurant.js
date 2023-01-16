import React from 'react'
import AdminLayout from './AdminLayout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { ApolloClient, gql, InMemoryCache, } from '@apollo/client';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export default function Restaurant({ data }) {
    const [message, setMessage] = useState(false)
    const router = useRouter()
    
    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache()
    })

    async function hapusRestaurant(id, kdRst) {
        // e.preventDefault()
        try {
            await client.mutate({
                mutation: gql`
                mutation{
                    deleteRestaurant(id:${id})
                    {
                        data {
                            id
                        }
                    }
                }`
            })

            alert(`Restaurant dengan kode ${kdRst} telah terhapus`)
        } catch (error) {
            console.log({ message: error.message });
        }
        router.push('/admin')
    }
    return (    
        <>
            <AdminLayout>
                <div className="container-lg mt-5">
                    <div className="table-responsive">
                        <div className="table-wrapper">
                            <div className="table-title">
                                <div className="row">
                                    <div className="col-sm-12"><h2>Restaurant<b>Details</b></h2></div>
                                </div>
                            </div>
                            <table className="table table-bordered table-light">
                                <thead>
                                    <tr>
                                        {/* <th>Gambar</th> */}
                                        <th>kdRst</th>
                                        <th>Nama</th>
                                        <th>Deskripsi</th>
                                        <th>Product</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((restaurants, idx) => (
                                        <tr key={idx}>
                                            {/* <td><img className="img-fluid" src={`http://localhost:1337${restaurants.attributes.gambar.data.attributes.url}`} /></td> */}
                                            <td>{restaurants.attributes.kdRst}</td>
                                            <td>{restaurants.attributes.nama}</td>
                                            <td>{restaurants.attributes.deskripsi}</td>
                                            <td>
                                                <Link legacyBehavior href={{
                                                    pathname: "/admin/productrestaurant",
                                                    query: {
                                                        kdRst: restaurants.attributes.kdRst,
                                                        nama: restaurants.attributes.nama,
                                                        deskripsi: restaurants.attributes.deskripsi
                                                    }
                                                }}>
                                                Products
                                                </Link>
                                            </td>
                                            {/* <td>{restaurants.attributes.harga}</td> */}
                                            <td>
                                                <div className="d-flex">
                                                    <Link legacyBehavior
                                                        href={`/admin/updaterestaurant/?id=${restaurants.id}&kdRst=${restaurants.attributes.kdRst}&nama=${restaurants.attributes.nama}&deskripsi=${restaurants.attributes.deskripsi}`}
                                                    ><button className="btn edit" title="Edit" data-toggle="tooltip"><i className="fa fa-pencil" /></button></Link>
                                                    <button className="btn delete" title="Delete" value={restaurants.attributes.kdRst} onClick={(e) => hapusRestaurant(restaurants.id, restaurants.attributes.kdRst)}><i className="fa fa-trash" /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        </>
    )
}
