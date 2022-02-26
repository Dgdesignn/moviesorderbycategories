import {useEffect} from 'react'

function Filter({popular, setFilter,activeGenre,setActiveGenre}){
    
    useEffect(()=>{
        if(activeGenre === 0){
            setFilter(popular);
            return;
        }

        const filtered = popular.filter((movie)=>movie.genre_ids.includes(activeGenre));

        setFilter(filtered);

    }, [activeGenre])

    return(
        <div className='filter-container'>
            <button className={activeGenre==0?'active':''} onClick={()=>setActiveGenre(0)}>Todos</button>
            <button className={activeGenre==35?'active':''} onClick={()=>setActiveGenre(35)}>Comédia</button>
            <button className={activeGenre==28?'active':''} onClick={()=>setActiveGenre(28)}>Ação</button>
        </div>
    )
}

export default Filter;