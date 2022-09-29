import React from "react";
import {View,Text,Image,StyleSheet,TextInput, ScrollView} from "react-native"
import { useContext } from "react";
import { ContextElement } from "../../Context/Context";
import { Button } from 'react-native-paper';


const Buy=()=>{
    const{cartList,priceTotal}=useContext(ContextElement)

    const handleBuy=()=>{
        alert("buy")
    }
    return(
     
         <ScrollView /*horizontal*/ style={Style.scroll} >
            <View style={Style.view}>
                <Text style={Style.textTitle} >Finish your transaction</Text>
                <Text style={Style.priceInfo} >Total Price: {priceTotal} </Text>
                <Text style={Style.priceInfo} >You can pay with: </Text>
                <Image style={Style.img} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ92dzXkjYdPdB6mHNhCl08KVEtbPfHwbSngsFrNLgcxFrN9Q4ibOKfhpjNM0f-rNSJcmA&usqp=CAU"}}/>
            </View>
            <View style={Style.form} onSubmit={handleBuy} >
                <Text style={Style.formText}>Insert your credit card number</Text>
                <TextInput style={Style.formInput} type="text" placeholder="Credit card number"></TextInput>
                <Text style={Style.formText}>Insert your credit card security code</Text>
                <TextInput style={Style.formInput} type="text" placeholder="Credit card security number"></TextInput>
                <Text style={Style.formText}>Insert your full name</Text>
                <TextInput style={Style.formInput} type="text" placeholder="Full name"></TextInput>
                <Text style={Style.formText}>Insert your email</Text>
                <TextInput style={Style.formInput} type="text" placeholder="Email address"></TextInput>
               
                <Button icon="star-outline" mode="contained" buttonColor="#10497c" onPress={handleBuy} >Confirm transaction</Button>
            </View>
            </ScrollView>

        
    )


}

export default Buy



const Style=StyleSheet.create({
    img:{
        width:200,
        height:150
    },
    form:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        marginTop:30
       

    },

    textTitle:{
        fontSize:26,
        fontWeight:"bold",
        marginBottom:30

    },

    priceInfo:{
        fontSize:18,
        fontWeight:"bold"
    },
    formInput:{
        width:250,
        borderColor:"black",
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center",
        marginBottom:20
    },
    formText:{
        fontSize:14,
        fontWeight:"bold",
        
    },
    view:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        
    },
    view2:{
        justifyContent:"center",
        alignItems:"center",
       /* backgroundColor:"grey"*/
    },
    scroll:{
        /*marginBottom:50,*/
        width:"100%"
    }

})