import React,{useState} from "react";
import {View,Text, TextInput,Button,StyleSheet,TouchableWithoutFeedback} from "react-native"

const Contact=()=>{
    const[userInfo, setUserInfo]=useState({name:"",email:"",comment:""})
    
   /* const getInfo=(e)=>{
      
        setUserInfo({...userInfo,name:e.target.value})
        
    }*/

    const send=()=>{
        alert("mensaje enviado")
        console.log(userInfo)
    }

    console.log(userInfo,"userinfo")
    return(
        <>
        <View style={Style.view}>
            <Text style={Style.textTitle}>Contact </Text>
        </View>
        <View style={Style.form} >
            <Text style={Style.text} >Name:</Text>
            <TextInput   style={Style.textInput}  onChangeText={(text)=>setUserInfo({...userInfo,name:text})} ></TextInput>
            <Text style={Style.text} >Email:</Text>
            <TextInput   style={Style.textInput}  onChangeText={(text)=>setUserInfo({...userInfo,email:text})}></TextInput>
            <Text style={Style.text} >Commment:</Text>
            <TextInput   multiline={true} numberOfLines={10} style={Style.textArea} onChangeText={(text)=>setUserInfo({...userInfo,comment:text})}></TextInput>
           
            <Button title="Send" onPress={send} ></Button>
           
        </View>
        </>
    )


}



export default Contact

const Style=StyleSheet.create({
    form:{
        justifyContent:"center",
        alignItems:"center"
    },
    textInput:{
        width:250,
        borderColor:"black",
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center",
        marginBottom:20
    },
    textArea:{
        width:250,
        borderColor:"black",
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center",
        marginBottom:20,
        height:200
    },
    text:{
        fontSize:18,
        fontWeight:"bold",
     
    },
    view:{
        backgroundColor:"#10497c",
        width:"100%",
        height:40,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:30,
        marginBottom:30,
        marginTop:30
    },
    textTitle:{
        color:"white",
        fontWeight:"bold",
        fontSize:24
    }


})