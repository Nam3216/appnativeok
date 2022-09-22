import React,{useState,useEffect} from "react";
import { useParams } from "react-router-native";

import MockShoes from "../mock/mockShoes";
import {View,Text,FlatList,StyleSheet} from "react-native"
import Item from "../Item/Item";


const Category=()=>{
    const[list,setList]=useState([])
    const{category}=useParams()
   

    const GetList=()=>{
        return new Promise((resolve,reject)=>{
            return resolve(MockShoes)
        },[])
    }

    useEffect(()=>{
        GetList().then((lista)=>{
            let listok=lista
            let listokok=[]
            for (const item of listok){
                if(item.category==category){
                    listokok.push(item)
                }
            }
           
           setList(listokok)
        })
    },[])


   // console.log(list, "list")

    return(
        
       
            <FlatList data={list} style={Style.viewCont}
                ItemSeparatorComponent={()=><Text></Text>}
                ListHeaderComponent={<View style={StyleTitle.view}><Text style={StyleTitle.text}>Category {category} </Text></View>}
                renderItem={({item})=>(
                 item.size=="S" &&  
                <Item data={item} msg={"category"}  />
                
                )}
                />
       
    
    
           
        

    )




}

export  default Category

const Style=StyleSheet.create({
    viewCont:{
        paddingBottom:80,//para q sea vea bien abajo
        paddingTop:20
    }
})

const StyleTitle=StyleSheet.create({
    view:{
        backgroundColor:"#10497c",
        width:"100%",
        height:40,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:30,
        marginBottom:30
    },
    text:{
        color:"white",
        fontWeight:"bold",
        fontSize:24
    }
})

/* <FlatList data={list}
            ItemSeparatorComponent={()=><Text></Text>}
            renderItem={({item})=>(
                <Item data={item} msg={"category"}/>
            )}
            />*/