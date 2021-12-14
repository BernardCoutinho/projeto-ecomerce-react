import Product from "../model/product";

export const createTable = async () => {

    await Product.createTable();
    console.log("tabela criada");
};

export const createProduto = async (nome, descricao, valor, uri) =>{
    const novoProduto = new Product(nome, descricao, valor, uri)

}

export const geraProdutos = () =>{
    const listProduto = [
        {nome: "lasanha",
        descricao: "salgado",
        valor: 10.00,
        uri: "https://www.sabornamesa.com.br/media/k2/items/cache/13b5e0deaf19b06816d21e67ad4e211c_XL.jpg" 
       }
    ]

    {listProduto.map((prod) =>{
        createProduto(prod.nome, prod.descricao, prod.valor, prod.uri)
    })
    
    }
}

export const itensCarrinho = () =>{

    

}