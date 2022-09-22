import React,{useState,useEffect} from "react";
import {View,Text,StyleSheet} from "react-native"
import { useContext } from "react";
import { ContextElement } from "../../Context/Context";

const ItemCount=({handle,initial,price})=>{
    const[count,setCount]=useState(initial)
    const{object}=useContext(ContextElement)

    const handleSub=()=>{
        
        if(count>1){
            setCount(count-1)
           // let counter=count-1
        }
        let counter=count-1
        handle(counter)
        
    }

    const handleAdd=()=>{
        setCount(count+1)
        let counter=count+1
        console.log(counter,"counter")
        //console.log(count,"count")
        handle(counter)
        //alert(count)

    }

/*useEffect(()=>{
    console.log(count, "countttt")
    let counter=count
        handle(counter)
    },[handleAdd] )*/

  

    return(
        <>
        <View style={Style.viewCont} >
            <Text style={Style.text} >Units: {count} </Text>
            <Text style={Style.text2} onPress={handleSub} > - </Text>
            <Text style={Style.text2} onPress={handleAdd}> + </Text>
           
        </View>
      <View style={Style.viewPrice}>
            <Text style={Style.text}>Price: {price * count}  </Text>
        </View>
     </>
    )

}

export default ItemCount

const Style=StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:"bold",
        marginRight:10,
    },
    text2:{
        fontSize:20,
        fontWeight:"bold",
        backgroundColor:"#10497c",
        marginRight:10,
        width:20,
        color:"white"
      
        
    },
    viewCont:{
        flexDirection:"row",
        marginTop:10
    },
    viewPrice:{
       marginTop:10
    }
})