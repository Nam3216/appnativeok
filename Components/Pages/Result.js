import React, { useEffect, useState } from "react";
import {Text,Image,View,StyleSheet,ScrollView} from "react-native"
import MockShoes from "../mock/mockShoes";
import { useContext } from "react";
import { ContextElement } from "../../Context/Context";
import Item from "../Item/Item";
import Search from "./Search";

const Result=()=>{
    const[list,setList]=useState([])
    const{search,setSearch}=useContext(ContextElement)

    const GetList=()=>{
        return new Promise((resolve,reject)=>{
            return resolve(MockShoes)
        })
    }

    const GetListOk=async()=>{
        try{
            const items=await GetList()
            setList(items)

        }catch(err){
            console.log(err)
        }
        
    }

    useEffect(()=>{
        GetListOk()
    },[])
    console.log(list, "list")
    console.log(search, "sea")

    return(
        <ScrollView>
            <Search/>
            <View style={Style.viewTitle}>
               <Text style={Style.title} >Results for {search} </Text>
            </View>
        {list.map((item)=>{
            if(item.category == search.toLowerCase()){
                if(item.size=="S"){
                    return <Item data={item} msg={"result"} />
                                      
                }
                
            }
        })}
       
        </ScrollView>
    )


}

export default Result

const Style=StyleSheet.create({
    viewTitle:{
        backgroundColor:"#10497c",
        width:"100%",
        height:40,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:30,
        marginBottom:30,
        marginTop:10
    },
    title:{
        color:"white",
        fontWeight:"bold",
        fontSize:24
    }
})