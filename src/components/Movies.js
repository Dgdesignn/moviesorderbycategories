import {motion} from 'framer-motion'

function Movie({data}){
    return(
        <motion.div layout 
            animate={{opacity:1, scale:1}}
            initial={{opacity:0, scale:0}}
            exit={{opacity:0, scale:0}}
        >
            <img src={'https://image.tmdb.org/t/p/w500/'+data.backdrop_path} alt=""/>
            <h2>{data.title}</h2>
        </motion.div >
    )
}

export default Movie;