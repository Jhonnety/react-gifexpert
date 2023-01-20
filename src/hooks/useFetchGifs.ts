import { useEffect, useState } from "react";
import { getGifs } from "../helps/getGifs";

export const useFetchGifs = (category:any) => {
    

    const [images, setImages]=useState([]);
    const [isLoading, setIsLoading]=useState(true);

    const getImagenes=async()=>{
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
      }
    
        useEffect(()=>{
          getImagenes();
        }, [])


    return {
    images,
    isLoading
  }
}
