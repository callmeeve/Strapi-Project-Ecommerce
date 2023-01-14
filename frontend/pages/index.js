import React from "react"
import axios from "axios"
import Filter from "../components/Filter"
import Card from "../components/user/RestaurantCard"
import Cta from "../components/user/Cta"
import Featured from "../components/user/Featured"
import UserLayout from "../components/user/UserLayout"
import { ApolloClient, gql, InMemoryCache, } from '@apollo/client';
import RestaurantCard from "../components/user/RestaurantCard"

export default function Home({ restaurants }) {
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
        <Featured />
        <div className="container px-4 px-lg-5 mt-5">
          <div className="text-center mt-5 mb-5">
            <h1 className="fw-bolder" style={{ fontWeight: "700", color: "#fc687b" }}>Our Top Restaurant</h1>
            <p className="fw-display mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Praesent gravida leo non ornare suscipit. Integer ex urna, congue at aliquet.
            </p>
          </div>
          <Filter />
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <RestaurantCard data={restaurants.data} />
          </div>
        </div>
        <div className="container px-4 px-lg-5">
          <div className="row">
            <div lc-helper="background" className="col-lg-6 order-lg-2" style={{ minHeight: '80vh', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url("/salad.png")' }} />
            <div className="col-lg-6 order-lg-1 my-auto p-5">
              <div className="lc-block">
                <div editable="rich">
                  <h1 className="fw-bold" style={{ color: "#fc687b" }}>We're Gonna Serve You</h1>
                  <p className="fw-display">Lorem ipsum dolor sit amet Neque porro quisquam est qui dolorem Lorem int ipsum dolor sit amet when an unknown printer took a galley of type. Vivamus id tempor felis. Cras sagittis mi sit amet malesuada mollis. Mauris porroinit consectetur cursus tortor vel interdum.</p>
                  <button className="btn m-0 rounded-0" id="pricing">See More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Cta />
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
      query getAllRestaurant{
          restaurants(filters:{nama:{contains:"${nama}"}}){
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
//   const nama = query.nama
//   let url = `http://localhost:1337/api/products?populate=*`;

//   if (typeof nama === "string") {
//     url = `http://localhost:1337/api/products?filters[nama][$containsi]=${nama}&populate=*`
//   }
//   const res = await axios.get(url);
//   const products = await res.data;
//   return {props : {products}}
// }