import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

  // const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];

  const [categorias, setCategorias] = useState(['One Punch']);

  // const handleAdd = () => {
  //   setCategorias(cats => ['HunterXHunter',...cats]);
  //   // setCategorias(['HunterXHunter',...categorias]);
  //   // setCategorias([...categorias, 'HunterXHunter']);
  // }

  return (
      <>
          <h2>GisExpertApp</h2>
          {/* Debe llevar si o si los argumentos porque en add Category tenemos un requerido */}
          <AddCategory setCategorias= {setCategorias} />
          <hr></hr>
           {/* <button onClick={handleAdd}>Agregar</button> */}

           {/* Este lo uso con el AddCategory */}
          {/* <ol>
            {
              categorias.map(category => {
                return <li key={category}>{category}</li>
              })
            }
          </ol>  */}

            <ol>
            {
              categorias.map(category => 
                 (
                   <GifGrid
                   key={category} 
                   category ={category} 
                   />
                 )
              )
            }
          </ol> 
      </>


  )
  
};
