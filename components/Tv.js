import React, {useContext} from 'react'
import Image from "next/image";
import { useRouter } from 'next/router'
import Link from 'next/link';
import { Context } from './Context';



const TVshows = ({show}) => {


  // const router = useRouter()

  // const {id} = router.query

  return (
    <Link href={`/tv/${show.id}`}>
    <div className='card'>
       
        { <img src={`https://image.tmdb.org/t/p/w500${show.poster_path} `} alt='/'/> }
 
    </div>
    </Link>
  )
}

export default TVshows









export const getStaticProps = async () => {

    const res = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_APIKEY}`)
    const data = await res.json();
console.log(data)
    return{

        props:{
            series: data,
        }
    }
}







