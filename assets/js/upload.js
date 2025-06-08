import { fetchUpload, fetchUploadId } from './fatchApi.js';

const addFormEvent = () => {
    const form = document.getElementById("form-post");
    if (form) {

        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const descricao = document.getElementById("descricao").value;
            const imagem = document.getElementById("imagem").files[0];

            if (!imagem || !descricao) {
                alert("Preencha todos os campos!");
                return;
            }

            try {
                // 1. Enviar imagem para o backend
                const id = await fetchUpload(imagem);

                // 2. Atualizar o post com a descrição
                await fetchUploadId(id, descricao);

            } catch (erro) {
                console.error("Erro ao enviar post:", erro);
                alert("Falha ao criar post.");
            }
        });

    }
}

document.addEventListener("DOMContentLoaded", addFormEvent);