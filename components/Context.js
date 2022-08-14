import React, {createContext, useState, useEffect} from 'react'
const Context = createContext()


const ContextProvider = ({children, movies}) => {

  const [mList, setMList] = useState([])

// functions

useEffect(() =>{

  const movieList = (movies) =>{

    return setMList(movies.results)
  }

},[])


  return (
   <Context.Provider value={{mList, movies}}>
{children}
   </Context.Provider>
  )
}

export {ContextProvider, Context}


// export async function getServerSideProps(context) {
//   const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_APIKEY}`);
//   const data = await res.json();





//   return {
//     props: {
//       movies: data,
  
    
//     },
//   };
// }