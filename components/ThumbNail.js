import Link from 'next/link';
import Image from 'next/image';




const ThumbNail = ({movie}) => {




  return (
    <Link href={`/${movie.id}`}>
    <div className='card'>
       
        { <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} withh={200} height={200} alt='/'/> }
 
    </div>
    </Link>
  )
}

export default ThumbNail