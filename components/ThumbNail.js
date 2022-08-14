import React, {useContext} from 'react'
import Image from "next/image";
import { useRouter } from 'next/router'
import Link from 'next/link';
import { Context } from './Context';



const ThumbNail = ({movie}) => {


  // const router = useRouter()

  // const {id} = router.query

  return (
    <Link href={`/${movie.id}`}>
    <div className='card'>
       
        { <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='/'/> }
 
    </div>
    </Link>
  )
}

export default ThumbNail