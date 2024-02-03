import { useState } from 'react'

import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState( ['One Punch'] )

  const handleAddCategory = ( newCategory ) => {
    if( categories.includes( newCategory ) ) return
    setCategories( cats => [newCategory, ...cats] )
  }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory={ handleAddCategory }
        />
        
        
        { 
          categories.map( category => (
            <GifGrid key={ category } category={ category }/>
          ))
        }     
              
    </>
  )
}
