import React, { useState } from 'react'
import { AddCategory, GiftGrid } from './components'

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['One punch','Dragon ball'])

    const onAddCategory = (newCategory:string) => {
        if( categories.includes(newCategory))  return;
        setCategories([newCategory,...categories]) 
        /* setCategories(cat => [...cat,'Lol']) */
    }
  
    return (
    <>
          {/*Dk1x1RU0LpLJHIIXeZOOrlh4tVQw1mO4*/}
          {/* Titulo */}
          <h1>GiftExpertApp</h1>
          {/* Input */}
          <AddCategory 
         /*  setCategories={setCategories} */
                onNewCategory={(value:string) => onAddCategory(value)}
           />
          {/* Listado */}
    
          <ol>
              {categories.map( category => (
                    <GiftGrid key={ category } category={ category } />
                  )
              )}
              {/* <li>ABC</li> */}
          </ol>
      </>
  )
}

