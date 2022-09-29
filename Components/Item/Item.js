import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,Image, TouchableHighlightComponent } from 'react-native';
import { Link } from "react-router-native";
import { useContext } from "react"
import { ContextElement } from "../../Context/Context"
import { TouchableWithoutFeedback } from "react-native";
//import { TouchableHighlight } from "react-native";
import { useNavigate } from "react-router-native";


const Item=({data,msg,key})=>{
    const{img,title,description,price,quantity,id,size}=data
    const Navigate=useNavigate()
   
/* home <Link to={`/category/${title.toLowerCase()}`}>*/
//otro   <Link to={`/detail/${id}`} >
    const{GetObject}=useContext(ContextElement)
    console.log(data, "data")
    // <Link to={`/category/${title.toLowerCase()}`}  >
    return(
        
        <View key={id}>
            {msg=="home" ? (
                <>
      <TouchableWithoutFeedback onPress={()=>Navigate(`/category/${title.toLowerCase()}`)}>
           
                
                    <View style={StylesOk.viewCont}>
                   
                        <Image style={StylesOk.image}source={{uri:img}}/>
                        <Text style={StylesOk.textTitleHome}>{title}</Text>
                        
                        <Text style={StylesOk.textDescription} >{description} </Text>
                       
                       
                    </View>
                
         
        </TouchableWithoutFeedback>
                
                
               
                
                </>
            ) : (
                <TouchableWithoutFeedback onPress={()=>Navigate(`/detail/${id}`)}>
                    <View style={StylesOk.contCategory} >
                        <Image style={StylesOk.imageCategory}source={{uri:img}}/>
                        <View style={StylesOk.ContCategoryText}>
                        
                            <Text style={StylesOk.textCat}>Product: {description}</Text>
                           
                            <Text style={StylesOk.textCat} >Unit Price: ${price} </Text>
                            <Text style={StylesOk.textCat}>Units: {quantity} </Text>

                        </View>
                    </View>
                </TouchableWithoutFeedback>
             
            )}
         
        </View>
 
    )


}

export default Item

const StylesOk=StyleSheet.create({
    image:{
        width:300,
        height:200,
        marginRight:0,
        resizeMode:"fit",
        alignItems:"center",
        justifyContent:"center",
       
        
        },
        imageCategory:{
            width:100,
            height:100,
            marginRight:10
        },
    textTitleHome:{
        color:"black",
        fontSize:18,
        marginBottom:15,
        fontWeight:"bold"
    },
    textCat:{
        justifyContent:"center",
        alignItems:"center",
        maxWidth:250
    },
    contCategory:{
        flexDirection:"row",
       /* paddingBottom:80,//para que ultimo elemento se vea bien
        paddingTop:80*/
    },
    ContCategoryText:{
        padding:10
    },
    viewCont:{
        marginTop:10,
       // width:"100%",
       
        justifyContent:"center",
        alignItems:"center",
       
    },
    textDescription:{
        justifyContent:"center",
        alignItems:"center",
        maxWidth:300,
        textAlign:"center"
    }
})