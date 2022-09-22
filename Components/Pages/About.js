import React from "react";
import {View,Text,StyleSheet} from "react-native"

const About=()=>{




    return(
        <>
        <View style={Style.view}>
            <Text style={Style.textTitle}>Contact </Text>
        </View>
        <View style={{justifyContent:"center", alignItems:"center"}}>
            <Text style={Style.textTitle2} >Who we are</Text>
            <Text style={Style.text}>
We are the largest online sales platform in Latin America. You are just one click away from buying the best in sportswear. Our base is in Buenos Aires, Argentina, but we operate throughout the continent.</Text>
            <Text style={Style.textTitle2} >Our Vision</Text>
            <Text style={Style.text}>
            Our vision is to be able to form an online community capable of reaching the most remote places in Latin America. We have a business that was born with a lot of effort and today employs more than 1,000 people.
            </Text>
            <Text style={Style.textTitle2} >Our Mission</Text>
            <Text style={Style.text}>
            Our mission is that all people have access to top brand sportswear at an affordable price. For this we carefully select the garments, brands, suppliers and intermediaries. With SportsWear, the only surprises are the pleasant ones.
            </Text>
        </View>
        </>

    )
}

export default About

const Style=StyleSheet.create({
    
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
    },
    textTitle2:{
        fontSize:18,
        fontWeight:"bold",
        padding:20
    },
    text:{
        justifyContent:"center",
        alignItems:"center",
        width:300
    }


})