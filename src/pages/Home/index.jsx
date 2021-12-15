import React, {useEffect} from "react";
import Produtos from '../../components/Produtos'
import {createTable} from '../../repository/productRepository'

export default function Home(){



    useEffect(()=>{
        createTable();
    })

    return(
        <Produtos />
    )
}