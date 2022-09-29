import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,Image } from 'react-native';
import Mock from '../mock/mock';
import Item from '../Item/Item';
import React,{useState,useEffect} from "react"

import Bottom from './Bottom';
import Search from './Search';

//  import LinearGradient from 'react-native-linear-gradient'


const Home=()=>{
    const[list,setList]=useState([])


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

//en los componentes mejor no encerrarlo con un view, sino tira abajo y hace mas grande el navbar
////    "react-native-linear-gradient": "^2.6.2",
    return(
    
           <>
            
            <FlatList data={list}  style={StyleList.flat}
            ItemSeparatorComponent={()=><Text></Text>}
            ListHeaderComponent={<><Search/><View style={StyleList.imgView} ><Image source={require("./sports.png")} style={StyleList.img} /><View style={StyleList.viewText}><Text style={StyleList.headerText}>Welcome to SportsWear. Choose your Sport!</Text></View></View></>}
          
            renderItem={({item})=>(

                <Item data={item} msg={"home"} />
            )}
            />
            
                
                
        </>
       
       
       
       


    )
}

export default Home

//tips no encerrar con view sino se va para abajo el navbar. al que si encierra, un flatlist o safearea ponerle width:100 asi el scroll va al costado
const StyleList=StyleSheet.create({
 
 
    flat:{
    /*  marginBottom:50,*/
        width:"100%",
       
        
       
        
    },
    img:{
        height:180,
        width:500,
        resizeMode:"contain",
       
        
    },
    imgView:{
        justifyContent:"center",
        alignItems:"center",
   
        backgroundColor:"white"
    },
    headerText:{
        color:"white",
      fontSize:14,
       fontWeight:"bold",
     
      
    },
   
    viewText:{
        backgroundColor:"#10497c",
        width:"100%",
        height:40,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:30,
        marginBottom:40,
        marginTop:40
    }
    

})

