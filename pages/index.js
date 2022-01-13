import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'

export default function Home(results) {
  console.log(results)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header/>
      
      {/* Nav */}

      <Nav />

      {/* <Results results = {results.result}/> */}

    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  var link = requests.fetchActionMovies.url;
  if (genre != null) {
    link = requests[genre].url
  }
  link = 'https://api.themoviedb.org/3' + link
  // const request = await fetch(link).then( (res) => res.json() );

  const fetchRes = await fetch(link);

  const resulting = await fetchRes.json();
  let x = resulting.results
  return{
    props:{
      result: x,
    }
  }
}
