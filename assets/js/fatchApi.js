const API_URL_POSTS = "http://127.0.0.1:3000/posts";
const API_URL_UPLOAD = "http://127.0.0.1:3000/upload";

export const fetchPosts = async () => {
  try {
    const response = await fetch(API_URL_POSTS);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
};

export const fetchUpload = async (imagem) => {
  try {
    const formData = new FormData();
    formData.append("imagem", imagem);

    const response = await fetch(API_URL_UPLOAD, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Erro ao enviar imagem");
    }

    const data = await response.json();
    return data.insertedId;

  } catch (error) {
    console.error("Erro ao postar o post:", error);
    throw error;
  }
};

export const fetchUploadId = async (id, descricao) => {
  try {
    const novoPost = { descricao };

    const response = await fetch(`${API_URL_UPLOAD}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoPost),
    });

    if (!response.ok) {
      throw new Error("Erro ao atualizar post");
    }

    alert("Post criado com sucesso!");
    window.location.href = '/';
  } catch (error) {
    console.error("Erro ao atualizar post:", error);
    throw error;
  }
};