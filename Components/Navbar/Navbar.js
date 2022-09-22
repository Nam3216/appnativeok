import React,{useState} from "react";
import {View,Text,StyleSheet} from "react-native"
import {Link} from "react-router-native"
import Constants from "expo-constants"
import { useContext } from "react";
import { ContextElement } from "../../Context/Context";
//importo Constants. en style le pongo margin o padding Constants.statusBarHeight. toma el alto de status bar .
//si no anda constants instalar npm i expo-constants
const Navbar=()=>{
    const[link,setLink]=useState("home")

    const{cartList}=useContext(ContextElement)
//para que quede en otro color cuando selecciono link
    const handleLink=(id)=>{
        setLink(id)

    }
    
//si es pagina cart y el cartList tiene mas de un elemento, que tenga otro estilo con mas paddong desp del statusbar. porque se ve mal sino
    return(
        <View style={ link=="cart" && cartList.length>1 ?styleNavbar.navCart : styleNavbar.nav} >
            
            <Link to={"/"} onPress={()=>handleLink("home") } ><Text style={ link == "home" ? styleNavbar.textSelected:styleNavbar.text}>Home</Text></Link>    
            <Link to={"/products"} onPress={()=>handleLink("products")}><Text style={link == "products" ? styleNavbar.textSelected:styleNavbar.text}>Products</Text></Link>  
            <Link to={"/cart"} onPress={()=>handleLink("cart")}><Text style={link == "cart" ? styleNavbar.textSelected:styleNavbar.text}>Cart</Text></Link>  
            <Link to={"/contact"} onPress={()=>handleLink("contact")}><Text style={link == "contact" ? styleNavbar.textSelected:styleNavbar.text}>Contact</Text></Link>  
            <Link to={"/about"} onPress={()=>handleLink("about")}><Text style={link == "about" ? styleNavbar.textSelected:styleNavbar.text}>About Us</Text></Link>  
            
        </View>
    )
}

export default Navbar

const styleNavbar=StyleSheet.create({
    nav:{
        backgroundColor:"black",//"#1e1d1d",
        flexDirection:"row",
        width:"100%",
        paddingTop:Constants.statusBarHeight+30,//pongo esto asi le deja padding espacio lo que mide la altura del status bar y un poco mas
        paddingBottom:10,
      //  height:"fit-content",
        justifyContent:"center",
        alignItems:"center"
      },
      navCart:{
        backgroundColor:"black",
        flexDirection:"row",
        width:"100%",
        paddingTop:Constants.statusBarHeight+105
        ,//pongo esto asi le deja padding espacio lo que mide la altura del status bar y un poco mas
        paddingBottom:10,
        //height:"fit-content",
        justifyContent:"center",
        alignItems:"center"
      },
    text:{
        color:"grey",
        fontWeight:"bold",
        paddingHorizontal:10, //con esto es como margin right
        
    },
    textSelected:{
        color:"white",
        fontWeight:"bold",
        paddingHorizontal:10, //con esto es como margin right
    }
    
})