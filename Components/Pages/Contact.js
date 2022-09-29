import React,{useState} from "react";
import {View,Text, TextInput,StyleSheet,ScrollView} from "react-native"
import { Button } from 'react-native-paper';
import Search from "./Search";


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
       <ScrollView style={{width:"100%"}} >
        <Search/>
        <View style={Style.view}>
        
            <Text style={Style.textTitle}>Contact </Text>
        </View>
        <View style={Style.viewTextSub} >
            <Text style={Style.textSub} >We are the leading sportswear company on the Internet. Please let us know your questions or comments. </Text>
        </View>
        <View style={Style.form} >
            <Text style={Style.text} >Name:</Text>
            <TextInput   style={Style.textInput}  onChangeText={(text)=>setUserInfo({...userInfo,name:text})} ></TextInput>
            <Text style={Style.text} >Email:</Text>
            <TextInput   style={Style.textInput}  onChangeText={(text)=>setUserInfo({...userInfo,email:text})}></TextInput>
            <Text style={Style.text} >Commment:</Text>
            <TextInput   multiline={true} numberOfLines={10} style={Style.textArea} onChangeText={(text)=>setUserInfo({...userInfo,comment:text})}></TextInput>
           
            <Button icon="star-outline" mode="contained" buttonColor="#10497c" onPress={send} >Send</Button>
           
        </View>
        </ScrollView>
        
        </>
    )


}



export default Contact

const Style=StyleSheet.create({
    form:{
        justifyContent:"center",
        alignItems:"center",
        
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
        marginTop:10
    },
    textTitle:{
        color:"white",
        fontWeight:"bold",
        fontSize:24
    },
    textSub:{
        fontSize:20
    },
    viewTextSub:{
        marginBottom:30,
        justifyContent:"center",
        alignItems:"center"
    }


})