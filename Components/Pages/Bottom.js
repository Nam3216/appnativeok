import React from "react";
import {View,Text,Image,StyleSheet} from  "react-native"
import {useNavigate} from "react-router-native"
import { IconButton, MD3Colors } from 'react-native-paper';
import { useContext } from "react";
import { ContextElement } from "../../Context/Context";

const Bottom=()=>{
    const Navigate=useNavigate()

    const{handleLink, link}=useContext(ContextElement)

    const handleLinkOk=(id)=>{
        Navigate(`${id}`)
        handleLink(id)
    }

    return(
   
            <View style={Style.view} >
                <IconButton icon="home"
                    iconColor="#404040"                    
                    size={30}
                    style={ link == "/" ? Style.iconBackground :Style.icon}
                    onPress={() => handleLinkOk('/')}
                />
                
                  
                
                 <IconButton icon="shopping"
                    iconColor="#404040"
                    size={30}
                    style={ link == "/products" ? Style.iconBackground :Style.icon}
                    onPress={() => handleLinkOk('/products')}
                />
                  
                     
                 <IconButton icon="cart"
                    iconColor="#404040"
                    size={30}
                    style={ link == "/cart" ? Style.iconBackground :Style.icon}
                    onPress={() => handleLinkOk('/cart')}
                />
                  
                  
                 <IconButton icon="email"
                    iconColor="#404040"
                    size={30}
                    style={ link == "/contact" ? Style.iconBackground :Style.icon}
                    onPress={() => handleLinkOk('/contact')}
                />  
                 
            </View>
            
         
    )
}

export default Bottom
//{MD3Colors.error15}
const Style=StyleSheet.create({
    view:{
        flexDirection:"row",
        backgroundColor:"#EDE4E3",
        width:"100%",
        position:"fixed",
        justifyContent:"center",
        alignItems:"center",
        height:50,
       //marginBottom:50 si cart.lenght es mayor a 1
        
    },
    icon:{
        marginRight:20,

    },
    iconBackground:{
        marginRight:20,
        backgroundColor:"white"
    }
   
})