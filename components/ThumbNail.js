import Link from 'next/link';




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