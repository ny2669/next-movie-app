
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ThumbNail from "../components/ThumbNail";
import Text from "../components/Text";
import TVshows from '../components/Tv';


export default function Home({movies, shows}){





  return (
    <div className="main ">
      <Head>
        <title>Netflix clone</title>
        <meta name="description" content="simple movie app data base " />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
      <Hero/>


      <main className='main-container'>
      <Text text={'New Releases'}/>
        <div className="main-wrap">
         
{movies.map(movie => {

  return (<>
  
    <ThumbNail key={movie.id} movie={movie} />
    </>
  )
})}


        </div>
        <Text text={'TV Shows'}/>
        <div className="main-wrap">
       
        {shows.map(show => {

return (<>

  <TVshows key={show.id} show={show} />
  </>
)
})}
        </div>
      </main>

  
    </div>
  );
}



export async function getStaticProps() {
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_APIKEY}`);
  const data = await res.json();

  const tvlist = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.NEXT_PUBLIC_APIKEY}&language=en-US&with_watch_monetization_types=flatrate&with_status=0&with_type=0
  `);
  const tvData = await tvlist.json()


  return {
    props: {
      movies: data.results,
      shows: tvData.results,
  
    
    },
  };
}















