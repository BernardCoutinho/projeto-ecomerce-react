import  ItemCarrinho from "../model/item_carrinho";

export const createTable = async () => {

    await ItemCarrinho.createTable();
    console.log("tabela criada");
};

export const createItem = async (nome, descricao, valor, uri, quantidade) =>{
    const novoItem = new ItemCarrinho({
        nome: nome, 
        descricao: descricao, 
        valor: valor, 
        uri: uri, 
        quantidade: quantidade,
    })
    await novoItem.save();
}

export const destroyItemById = async (id) =>{
    ItemCarrinho.destroy(id)
}


export const getAllItens = async () =>{

  return await ItemCarrinho.query();
}

export const geraProdutos = () =>{
    const listProduto = []

    {listProduto.map((prod) =>{
        createProduto(prod.nome, prod.descricao, prod.valor, prod.uri)
    })

    }
}

export const itensCarrinho = () =>{



}