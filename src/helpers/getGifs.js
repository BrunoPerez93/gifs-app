export const getGifs = async( category ) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=frRTsXiSXUvRxZ7vYGFOS1Dw1U8J4b7K&q=${category}&limit=10`;
  const resp = await fetch( url );
  const { data } = await resp.json();

  const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.original.url
  }));
  
  return gifs;
}