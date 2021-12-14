import * as SQLite from 'expo-sqlite'
import {BaseModel, types} from 'expo-sqlite-orm'

export default class Product extends BaseModel{

    constructor(obj){
        super(obj)
    }

    static get database(){
         return async () => SQLite.openDatabase("database.db");
    }

    static get tableName(){
        return 'produtos'
    }

    static get columnMapping(){
        return{

            id: {type: types.INTEGER, primary_key: true},
            nome: {type: types.TEXT, not_null:true},
            descricao: {type: types.TEXT, not_null:true},
            valor: {type: types.FLOAT, not_null:true},
            uri: {type: types.TEXT, not_null:true},
        }
    }

}