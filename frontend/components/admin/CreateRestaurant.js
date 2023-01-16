import axios from "axios";
import { Router } from "next/router";
import React from "react";
import { useState } from "react";
import { ApolloClient, gql, InMemoryCache,  } from '@apollo/client';

const CreateRestaurant = () => {

    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache()
    })

    const [kdRst, setKdRst] = useState('');
    const [nama, setNama] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    // const [harga, setHarga] = useState('');

    const clearInput = () => {
        setKdRst('')
        setNama('')
        setDeskripsi('')
        // setHarga('')
    }

    async function submitHandler(e) {
        e.preventDefault()
        try {
            await client.mutate({
                mutation:gql `
                mutation{
                    createRestaurant(data:{
                        kdRst: "${kdRst}",
                        nama: "${nama}",
                        deskripsi: "${deskripsi}",
                    })
                    {
                        data {
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
            alert("Penambahan data sukses")
            clearInput()
        } catch (e) {
            throw Error(e.message)
        } 
    }
    return (
        <div>
            <div className="produk-form mt-5">
                <form onSubmit={submitHandler}>
                    <h2>Add Restaurant</h2>
                    <div className="form-group">
                        <div className="row">
                            <div className="col">
                                <input type="text" id="kdRst" className="form-control" placeholder="Kode Restaurant" required="required" value={kdRst} onChange={(e) => setKdRst(e.target.value)} />
                            </div>
                            <div className="col">
                                <input type="text" id="nama" className="form-control" placeholder="Nama" required="required" value={nama} onChange={(e) => setNama(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" id="deskripsi" className="form-control" placeholder="Deskripsi" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} />
                    </div>
                    {/* <div className="form-group">
                        <input type="text" id="harga" className="form-control" placeholder="Harga" value={harga} onChange={(e) => setHarga(e.target.value)} />
                    </div> */}
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-lg btn-block rounded-0" id='demo'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateRestaurant;