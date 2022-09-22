import React from "react";
import {View,Text,StyleSheet} from "react-native"

const Footer=()=>{


    return(
        <View style={Style.view}>
            <Text style={Style.text}>©SportsWear </Text>
        </View>
    )

}

export default Footer

const Style=StyleSheet.create({
    text:{
        justifyContent:"center",
        alignItems:"center",
        color:"white"
    },
    view:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#10497c",
        width:"100%",
        height:50,
        
    }
})