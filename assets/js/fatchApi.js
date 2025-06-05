const API_URL_POSTS = "http://127.0.0.1:3000/posts"; 

 const fetchPosts = async () => {
  try {
    const response = await fetch(API_URL_POSTS); 
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}

export default fetchPosts;