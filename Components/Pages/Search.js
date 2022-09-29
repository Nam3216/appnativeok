import React, { useState,useEffect } from "react";
import { Text,View,StyleSheet,Image, TextInput } from "react-native";
//import Mock from "../mock/mock";
import { IconButton, MD3Colors } from 'react-native-paper';
import { useNavigate } from "react-router-native";
import { useContext } from "react";
import { ContextElement } from "../../Context/Context";

const Search=()=>{
    const[list,setList]=useState([])
   // const[search,setSearch]=useState(" ")
    const Navigate=useNavigate()
    const {search,setSearch}=useContext(ContextElement)

    /*const GetList=()=>{
        return new Promise((resolve,reject)=>{
            return resolve(Mock)
        })
    }

   

    const GetListOk=async()=>{
        try{
            const data=await GetList()
            setList(data)
        }catch(error){
            console.log(error)
        }
        
    }

    useEffect(()=>{
        GetListOk()
    },[])
*/
    


    return(
        <>  
        <View style={Style.view} >
        <IconButton icon="magnify"
                    iconColor={MD3Colors.error15}
                    size={30}
                    style={Style.icon}
                    onPress={()=>Navigate("/result")}
                />
            <TextInput style={Style.textInput} placeholder="  Search in Sports Wear" onChangeText={(text)=>setSearch(text) }></TextInput>
            
        </View>

        </>
    )
}

export default Search

const Style=StyleSheet.create({
    view:{
        backgroundColor:"#cceae8",
        width:"100%",
        height:70,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
      
     
    },
    textInput:{
        width:280,
        height:41,
        borderColor:"black",
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:30,
        backgroundColor:"white"

    },
    text:{
        color:"white",
        fontWeight:"bold",
        marginBottom:10
    }
})