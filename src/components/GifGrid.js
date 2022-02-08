import React from 'react';

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

   
    const {data:images,loading} = useFetchGifs(category);
    

        // Digo que se ejecute esa accion solo cuando la app es renderizado por primera vez 
    // useEffect (()=>{
    //     getGifs(category)
    //     .then(setImages)
    // }, [])
    

  return (
        <>
        <h3>{category}</h3>

        {/* { loading ? <p>Loading...</p> : null } */}
        { loading && <p>Loading...</p>  }
        <div className="card-grid">
            {

                    images.map((img) => (
                        <GifGridItem 
                        key={img.id}
                        {...img}
                     />
                ))
            }
        </div>

        
            {/* <h3>{count}</h3>
            <button onClick={()=>setCount(count + 1)}></button> */}

            
                {/* <li>item</li> */}
        </>

  )
};
