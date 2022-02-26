import './App.css';
import {useEffect, useState} from 'react'
import Movie from './components/Movies'
import Filter  from './util/Filter';
import {motion, AnimatePresence} from 'framer-motion'


function App() {

  const [popular, setPopular] = useState([])
  const [filter, setFilter] = useState([])
  const [activeGenre, setActiveGenre] = useState(0) 

  const apiKey = `afe7c50c0f1440af1ea2a729361bd914`;
  const baseURL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`

  useEffect(()=>{
    fetchData()
  },[])


  async function fetchData(){
    const resp = await fetch(baseURL)
    const movies = await resp.json();
    console.log(movies.results)
    setPopular(movies.results)
    setFilter(movies.results)
  }


  return (

    <div className="App">
      <Filter className="btns-cont" popular={popular} setFilter={setFilter} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
       <motion.div layout className="popular-movies">

         <AnimatePresence>
              {
                filter.map(movie=>{
                  return <Movie key={movie.id} data={movie}/>
                })
              } 
          </AnimatePresence>
       </motion.div>
    </div>
  );
}

export default App;
