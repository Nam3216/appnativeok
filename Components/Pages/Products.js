import React,{useState,useEffect} from "react";
import {View,Text,Image,FlatList,StyleSheet} from "react-native"
import { Navigate, useNavigate } from "react-router-native";
import Mock from "../mock/mock";
//import MyComponent from "./BottomNav";
import Bottom from "./Bottom";
import Home from "./Home";
import Item from "../Item/Item";
import Search from "./Search";

const Products=()=>{
    const[list,setList]=useState([])    
    const Navigate=useNavigate()

    


    const GetList=()=>{
        return new Promise((resolve,reject)=>{
            return resolve(Mock)
        })
    }

    useEffect(()=>{
        GetList().then((list)=>{
            setList(list)
        })
    },[])
    return(
        < >
            <FlatList data={list}  style={StyleList.flat}
            ItemSeparatorComponent={()=><Text></Text>}
           ListHeaderComponent={<><Search/><View style={StyleList.view}><Text style={StyleList.textTitle}>Products </Text></View></>}
          
            renderItem={({item})=>(

                <Item data={item} msg={"home"} />
            )}/>
           
             
        </>
    )
}

export default Products

const StyleList=StyleSheet.create({
 
 
    flat:{
    /*  marginBottom:50,*/
        width:"100%",
       
            
    },
    textTitle:{
        color:"white",
        fontWeight:"bold",
        fontSize:24
    },
    view:{
        backgroundColor:"#10497c",
        width:"100%",
        height:40,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:30,
        marginBottom:30,
        marginTop:10
    }
})