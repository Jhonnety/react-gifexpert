import React from 'react'

export const GifItem = ({title, url, id}:any) => {

  return (


    <div className='card'>
        <img src={url} alt={title} />

    </div>


  )
}
