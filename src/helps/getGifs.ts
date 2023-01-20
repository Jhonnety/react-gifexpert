export const getGifs = async (category:any) =>{
    const url= `https://api.giphy.com/v1/gifs/search?api_key=Dk1x1RU0LpLJHIIXeZOOrlh4tVQw1mO4&q=${ category }&limit=20`;
    const resp = await fetch( url);
    const {data } = await resp.json();
    
    const gifs = data.map((img: { id: any; title: any; images: { downsized_medium: { url: any; }; }; }) => ({
        id:img.id,
        title:img.title,
        url: img.images.downsized_medium.url
    }))


    return gifs;
}