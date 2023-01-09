import React,{useState} from "react";
import Image from "next/image"
import ReactPlayer from "react-player";

import { HiOutlineUserGroup } from "react-icons/hi";
import { BiRightArrow } from "react-icons/bi";

export const getStaticPaths = async () => {

  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_APIKEY}`)

const data = await res.json()
const paths = data.results.map(movies => {

return{
  params:{slug : movie.id.toString()}
}

})


return{
paths: paths,
fallback: false,

}

}



export const getStaticProps = async (context) => {
 const id = parseInt(context.params.slug, 10)
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_APIKEY}&append_to_response=videos`)
  const data = await res.json()

  return{

    props:{movie: data}
  }

}









export default function Details({movie}) {
  
  const [showPlayer, setShowPlayer] = useState(false);

  const index = movie.videos.results.findIndex(
    (element) => element.type === "Trailer"
  );
  return(
<section className='darkBg'>

<img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path || movie.poster_path}`} alt={movie.title} className='bd-img' />
    <div className="detailImg">

<h1 className="detailsTitle" key={movie.id}>{movie.title}</h1>
<div className="allBtn">
  <button className="playbtn"> <span> <BiRightArrow/></span>play</button>
  <button className="trailerBtn"><span> <BiRightArrow/></span>Trailer</button>
  <button className="plusBtn plus" >+</button>
  <button className="plusBtn"> <HiOutlineUserGroup/></button>
</div>
     <p className="detsInfo">{Math.round(movie.vote_average)}% . {movie.release_date} . {movie.genres[0].name} </p>
     <p className="overView">{movie.overview} </p>
  
    
    </div>

    <div className="relative pt-[56.25%]">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${movie.videos?.results[index]?.key}`}
                width="100%"
                height="100%"
                style={{ position: "absolute", top: "0", left: "0" }}
                controls={true}
                playing={showPlayer}
              />
            </div>
    </section>
  )
}






