import {useEffect} from "react"; 
import { StackActions } from '@react-navigation/native';

export default function Logout({navigation}){

    const logout = ()=>{
        navigation.dispatch(StackActions.popToTop())
    }
            
    useEffect(()=>{
        logout();
    })

    return null

}