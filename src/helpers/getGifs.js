// Definimos una función asíncrona getGifs que toma una categoría como argumento 
export const getGifs = async( category ) => {
    const url = 
    `https://api.giphy.com/v1/gifs/search?api_key=RslxY56ZrFgLVxJng86XVkC0ZKW4j3x3&q=${
    category }&limit=10`; 
    // Hacemos una petición a la API de Giphy 
    const resp = await fetch( url ); 
    // Extraemos los datos de la respuesta en formato JSON 
    const { data } = await resp.json(); 
    
     
    const gifs = data.map( img => ({ 
        id: img.id, 
        title: img.title, 
        url: img.images.downsized_medium.url 
    })); 
     
    // Devolvemos el arreglo de objetos 
    return gifs; 
    }