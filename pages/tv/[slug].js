import React,{useState} from "react";
import Image from "next/image"
import ReactPlayer from "react-player";

import { HiOutlineUserGroup } from "react-icons/hi";
import { BiRightArrow } from "react-icons/bi";

export const getStaticPaths = async () => {

  const res = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.NEXT_PUBLIC_APIKEY}&language=en-US&with_watch_monetization_types=flatrate&with_status=0&with_type=0`)

const data = await res.json()
const paths = data.results.map(show => {

  return{
    params:{slug : show.id.toString()}
  }

})


return{
paths: paths,
fallback: false,

}

}



export const getStaticProps = async (context) => {
  const id = context.params.slug
 
  const res = await fetch(`
  https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.NEXT_PUBLIC_APIKEY}&language=en-US`)
  const data = await res.json()
 
  return{

    props:{show: data}
  }

}









export default function ShowDetails({show}) {
  
  const [showPlayer, setShowPlayer] = useState(false);

//   const index = show.videos.results.findIndex(
//     (element) => element.type === "Trailer"
//   );
  return(
<section className='darkBg'>

<Image src={`https://image.tmdb.org/t/p/w500/${show.backdrop_path || show.poster_path}`} alt={show.original_name} layout='fill' objectFit="cover" objectPosition={'center'} className='bd-img'/>

    <div className="detailImg">

<h1 className="detailsTitle" key={show.id}>{show.original_name}</h1>
<div className="allBtn">
  <button className="playbtn"> <span> <BiRightArrow/></span>play</button>
  <button className="trailerBtn"><span> <BiRightArrow/></span>Trailer</button>
  <button className="plusBtn plus" >+</button>
  <button className="plusBtn"> <HiOutlineUserGroup/></button>
</div>
     <p className="detsInfo">{Math.round(show.vote_average)}% . {show.release_date} . {show.genres[0].name} </p>
     <p className="overView">{show.overview} </p>
  
    
    </div>
{/* 
    <div className="relative pt-[56.25%]">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${show.videos?.results[index]?.key}`}
                width="100%"
                height="100%"
                style={{ position: "absolute", top: "0", left: "0" }}
                controls={true}
                playing={showPlayer}
              />
            </div> */}
    </section>
  )
}






