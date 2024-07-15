async function listarProduto() {
    const conexao = await fetch("https://667c8fc13c30891b865d037a.mockapi.io/my-commerce-jso-server/produtos");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criaProduto(nome, preco, imagem) {

    const conexao = await fetch("https://667c8fc13c30891b865d037a.mockapi.io/my-commerce-jso-server/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            preco: preco,
            imagem: imagem
        })
    });

    const conexaoConvertida = await conexao.json()
    return conexaoConvertida;
}

async function excluirProduto(productId) {
    try {
        const conection = await fetch(`https://667c8fc13c30891b865d037a.mockapi.io/my-commerce-jso-server/produtos/${productId}`, {
            method: "DELETE",
        });
        const data = await conection.json();
        console.log(data);
    } catch (error) {
        console.error("Erro ao deletar produto:", error);
        throw error;
    }
}


export const conection = {
    listarProduto,
    criaProduto,
    excluirProduto
}