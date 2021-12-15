import * as SQLite from 'expo-sqlite'
import {BaseModel, types} from 'expo-sqlite-orm'

export default class ItemCarrinho extends BaseModel{

    constructor(obj){
        super(obj)
    }

    static get database(){
         return async () => SQLite.openDatabase("database.db");
    }

    static get tableName(){
        return 'itens_carrinho'
    }

    static get columnMapping(){
        return{

            id: {type: types.INTEGER, primary_key: true},
            nome: {type: types.TEXT, not_null:true},
            descricao: {type: types.TEXT, not_null:true},
            valor: {type: types.FLOAT, not_null:true},
            uri: {type: types.TEXT, not_null:true},
            quantidade: {type: types.NUMERIC, not_null:true},
        }
    }

}