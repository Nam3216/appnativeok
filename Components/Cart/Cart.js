import React, { useState,useEffect } from "react";
import {View,Text,Image,StyleSheet,SafeAreaView, ScrollView} from "react-native"
import { useContext } from "react";
import { ContextElement } from "../../Context/Context";
import { FlatList } from "react-native";
import {useNavigate} from "react-router-native"
import {Link} from "react-router-native"
import ItemCount from "../ItemCount/ItemCount";
import Size from "../Size/Size";
import { Button } from 'react-native-paper';
import Search from "../Pages/Search";


const Cart=()=>{
    const{cartList,EmptyList,DeleteItem,priceTotal,AddCartList,TotalPrice,modifyQuant,handleLink}=useContext(ContextElement)
    const Navigate=useNavigate()
    console.log(priceTotal, "pricetotal")
    const[quantOk,setQuantOk]=useState(0)
   // const [idOk,setIdOk]=useState(0)
    const[priceCart,setPriceCart]=useState(0)
    //si es cuando carga la pagina, checkModify va a ser false, jsx va a mostrar TotalPrice de context. si cambio itemcount, se pone true esto y va a mostrar el priceCart que se actualiza ok
    const[checkModify,setCheckModify]=useState(false)
    //console.log(cartList,"cartliilill")
    
    //viene itemcount cant y lo guarda en state
    const handleQuant=(quant)=>{
        console.log("handle",quant)
        setQuantOk(quant)
    }
//cuando modifica cantidad, lo modifica aca, en context no me actualizaba el priceTotal
let list=[]
    const handleAdd=(quantOk,idOk)=>{
        console.log(quantOk,"cuant")
        if(checkModify ==false){
            setCheckModify(true)
        }
        
       console.log(idOk, "id")
    
       let price=0
        for(const item of cartList){
           //lo pongo en otra lista no estado, sino me actualizaba mal el state de totalprice. asi con esta lista, llamo a funcion sum y prepara precio total 
            list.push(item)
            if(item.id==idOk){
                console.log("encontrado")
                item.quantity=quantOk
               
        }}

    console.log(list)
        
        sum()

       
    }

   

    const sum=()=>{
        console.log("sum")
        console.log(cartList,"sum")
        let priceOk=0
        for(const item of list){
            priceOk=priceOk+(item.quantity*item.price)
        }
        console.log(priceOk,"priceok")
        setPriceCart(priceOk)
    }
//para q actualice total cuando se borra
   const handleDelete=(id)=>{
    DeleteItem(id)
    handleAdd(0,id)
    sum()
   }
//funcion cuando apreta boton buy. cambia link a buy asi se ve ok el estilo de navbar, y activa el link navigate buy
const handleBuy=()=>{
    handleLink("buy")
    Navigate("/buy")
}
//con el primer view
    return(
        
   <>
   
         
              {cartList.length >0 ? (   
    <ScrollView style={Style.safe}>
        <Search/>
        <View >
                 <View style={Style.viewTitle} >
                    <Text style={Style.title}>Cart</Text>
                </View>
            
            <View>
                {cartList.map((item)=>{
    
                    return (
                <View style={Style.flat} key={item.id} >
                    <Image source={{uri:item.img}} style={{width:100,height:100, marginBottom:20}}/>
                    <Text >Product: {item.description} </Text>
                    <Text >Pairs: {item.description} </Text>
                    
                    <Text >Size: {item.size} </Text>
                        
                    <ItemCount handle={handleQuant} initial={item.quantity } price={item.price} />
                    <View style={Style.buttonEmpty}>
                    <Button icon="star-outline" mode="contained" style={{marginBottom:10}}  onPress={()=>handleAdd(quantOk,item.id)} >Modifiy Units</Button>
                    <Button icon="star-outline" mode="contained"  onPress={()=>handleDelete(item.id)} >Delete Item</Button>
                    </View>
                  
                </View>)

                })}
                    
                <View>
                    <View style={Style.viewBuy} >
                        {checkModify == false ? <Text style={Style.textPrice}>Total Price: {priceTotal} </Text> : <Text style={Style.textPrice}>Total Price: {priceCart} </Text> }
                    </View>   
                    

                
                    
                
                    <View style={Style.buttonEmpty}>
                        <Button icon="star-outline" mode="contained" buttonColor="#10497c" onPress={EmptyList} >Empty Cart</Button>
                       
                    </View>
                    <View style={ cartList.length > 1 ? Style.buttonEmptyBuyCart:Style.buttonEmptyBuy}>
                        
                        <Button icon="star-outline" mode="contained" buttonColor="#10497c" onPress={handleBuy} >Buy</Button>
                        
                    </View>
                </View> 
            </View>
        </View>
    </ScrollView>
            ):(
         
               
                <View  style={{ height:585, width:"100%"}}>
                     <Search/>
                     <View style={{marginTop:100}}>
                    <Link to={"/"} ><Text style={Style.textCart} >Your cart is empty. Please select some products  </Text></Link>
                    </View >
                </View>
           
            )}
            
        </>
      
   
       
    
    )
}
//()=>Navigate("/buy")
export default Cart
//<Text >Total Price: {item.quantity * item.price} </Text>
const Style=StyleSheet.create({
   viewTitle:{
        backgroundColor:"#10497c",
        borderRadius:30,
        marginTop:10,
        height:40,
        marginBottom:30,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        color:"white",
        fontWeight:"bold",
      
        fontSize:24
    },
    buttonEmpty:{
       padding:10,
      color:"white",
      
       
    },
    buttonEmptyBuy:{
        padding:10,
        color:"white",
        
    },
    buttonEmptyBuyCart:{
        padding:10,
        color:"white",
     
    },
    
    flat:{
      
       
        justifyContent:"center",
        alignItems:"center",
      
      
        
    },

    text:{
        padding:10
    },

    safe:{
     
        textAlign:"center",
        width:"100%",
     
     
       
       
    },

 
    textCart:{
        fontSize:18,
        fontWeight:"bold",
        textAlign:"center"
    },
    textPrice:{
          
        textAlign:"center",
        color:"white",
        fontWeight:"bold",
        fontSize:18
    },
    viewBuy:{
        backgroundColor:"#10497c",
        borderRadius:30,
        height:40,
        justifyContent:"center"
    }
})
//<Button  onPress={()=>handleAdd(quantOk,item.id)} title="Modifiy Units"/>
//  <Button  onPress={()=>handleDelete(item.id)} title="Delete Item"/>
// <Button onPress={EmptyList} title="Empty Cart" style={Style.flat} />
//<Button  title="Buy" style={Style.buttonEmpty} onPress={()=>Navigate("/buy")} />
/* <View>
                <Image source={{uri:item.img}} style={{width:100,height:100}}/>
                <Text>Product: {item.description} </Text>
                <Text>Pairs: {item.description} </Text>
                <Text>Size: {item.size} </Text>
                <Text>Total Price: {item.quantity * item.price} </Text>
                <Button onPress={()=>Navigate(-1)} title="Want to make any changes? Go Back to detail"/>
            </View>*/

            /*<FlatList data={cartList} style={Style.flat}  
            ItemSeparatorComponent={()=><Text></Text>}
            renderItem={({item})=>(
                <View style={Style.flat} >
                    <Image source={{uri:item.img}} style={{width:100,height:100}}/>
                    <Text>Product: {item.description} </Text>
                    <Text>Pairs: {item.description} </Text>
                    
                    <Text>Size: {item.size} </Text>
                    <Text>Units: {item.quantity} </Text>
                
                    <Text>Total Price: {item.quantity * item.price} </Text>
                    <Button  onPress={()=>DeleteItem(item.id)} title="Delete Item"/>
                </View>
            
            )}/>*/