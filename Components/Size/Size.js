import React from "react";
import{View,Text,StyleSheet} from "react-native"
import { useContext } from "react";
import { ContextElement } from "../../Context/Context";
import MockShoes from "../mock/mockShoes";

const Size=({handle,secondCategory})=>{
    const{GetSize,setSizeOka}=useContext(ContextElement)
    const sizeokafun=(id)=>{
        setSizeOka(id)
       
    }
//recibo el size del boton, y con eso y el scondCategory obtengo el id del prod
    const GetId=(size)=>{
        let id=0
        for(const item of MockShoes){
            if(item.secondCategory==secondCategory){
                if(item.size==size){
                    id=item.id
                }
            }
        }
        handle(id,size)
    }
    //console.log(cartList, "sizeokacart")
    return(
        <>
            <View style={Style.viewSize} >
                <Text onPress={()=>GetId("S")} style={Style.size}>S</Text>
                <Text onPress={()=>GetId("M")} style={Style.size}>M</Text>
                <Text onPress={()=>GetId("L")} style={Style.size}>L</Text>
                
            </View>
           
        </>
    )
}

export default Size

const Style=StyleSheet.create({
    size:{
        backgroundColor:"#10497c",
        width:30,
        marginRight:10,
        textAlign:"center",
        marginBottom:20,
        color:"white"
    },
    viewSize:{
        flexDirection:"row",
        
    }

})
