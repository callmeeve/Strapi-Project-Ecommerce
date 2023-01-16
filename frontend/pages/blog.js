import React from 'react'
import BlogCard from '../components/user/BlogCard'
import UserLayout from '../components/user/UserLayout'
import { ApolloClient, gql, InMemoryCache, } from '@apollo/client';

export default function Blog({blogs}) {
    return (
        <>
            <UserLayout>
                <header className="masthead">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-12 text-center">
                                <h1 className="fw-bolder text-white">Paras Bagiak Blog</h1>
                                <p className="fw-display text-white mt-3 mb-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Praesent gravida leo non ornare suscipit. Integer ex urna, congue at aliquet.
                                </p>
                                <button className="btn" id="pricing">SEE OUR BLOG</button>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <BlogCard data={blogs.data}/>
                            <hr className="my-4" />
                            <div className="d-flex justify-content-end mb-4"><a className="btn" id="demo">Older Posts →</a></div>
                        </div>
                    </div>
                </div>

            </UserLayout>
        </>
    )
}

export async function getServerSideProps({ query }) {
    // let nama = query.nama
    // { typeof nama === 'string' ? nama = nama : nama = "" }
    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache()
    })

    const { data } = await client.query({
        query: gql`
        query {
            blogs {
                data {
                    id
                    attributes {
                        nama
                        deskripsi
                        author
                    }
                }
            }
        }`
    })
    return { props: { blogs: data.blogs } }
}
