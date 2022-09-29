import React,{useState,useEffect}from "react"
import {View,Text,Image,StyleSheet,ScrollView} from "react-native"
import { ContextElement } from "../../Context/Context"
import { useContext } from "react"
import ItemCount from "../ItemCount/ItemCount"
import Size from "../Size/Size"
import { useParams } from "react-router-native"
import MockShoes from "../mock/mockShoes"
import { Button } from 'react-native-paper';

const Detail=()=>{
    const{AddCartList, cartList,setCartList}=useContext(ContextElement)
    const{id}=useParams()
    const[list,setList]=useState([])
    const[quantOk,setQuantOk]=useState(1)//arranco en 1, sino el  primer item q agrega va a ser 0 si no lo modifico
    const[idOk,setIdOk]=useState(0)
    const[sizeOk,setSizeOk]=useState("S")
   
    const GetList=()=>{
        return new Promise((resolve,reject)=>{
            return resolve(MockShoes)
        })
    }

    useEffect(()=>{
        GetList().then((list)=>{
            setList(list)
        })
    },[])
    
    
//estas funciones handle es para pasarle a itemcount y size. cuando se cambia alla cant o size, se manda ese dato aca y se actualiza en el objeto, asi cuando se pone add cart list ya esta ese dato en el objeto
    const handleQuant=(quant)=>{
        setQuantOk(quant)
    }
//recibe de comp size
    const handleSize=(id,size)=>{
       //alert("size",id)
      
       setIdOk(id)
    //guardo el size aca asi lo muestro mas abajo en detail
       setSizeOk(size)
     
        
    }
    //funcion de addCartList
    const handleAdd=(quantOk,idOk)=>{
       
        AddCartList(quantOk,idOk)

    }
    
    return(
        <>
       
       
            <ScrollView /*horizontal*/ style={StylesOk.scroll}>
               
            <View style={StylesOk.view}>
                {list.map((object)=>{
                  //  console.log(object,"obj")
                    if(object.id==id){
                    return(
                        <View key={object.id} style={{justifyContent:"center",alignItems:"center"}} >
                        
                        <View>
                            <Image style={StylesOk.img} source={{uri:object.img}}/>
                        </View>
                   <View style={StylesOk.viewText}>
                        <Text style={StylesOk.text}>Product: {object.description} </Text>
                        <Text style={StylesOk.text}>Detail: {object.descriptionDetail} </Text>
                        
                        <ItemCount handle={handleQuant} initial={object.quantity} price={object.price} />
                        <Text style={{fontWeight:"bold",fontSize:20,marginTop:10,marginBottom:20}} >Size: {sizeOk}</Text>
                        <Size handle={handleSize} secondCategory={object.secondCategory} />
                        
                        
                    </View>
                    {idOk==0 && setIdOk(object.id)/*si es primer prod desde q hago click, osea no cambie size q es donde toma id, digo q si es 0 id q sea object.id*/}
                    
                    <Button icon="star-outline" mode="contained" buttonColor="#10497c" onPress={()=>handleAdd(quantOk,idOk)} >Add to Cart</Button>
                   
                    </View>
                    )
                }
                })}
               
            </View>
           
            </ScrollView>
            
       



      
        
        </>
    )

}
//<Button style={StylesOk.button} onPress={()=>handleAdd(quantOk,idOk)} title="Add to Cart"/>
export default Detail
//()=>AddCartList(object)
const StylesOk=StyleSheet.create({
    img:{
        width:250,
        height:250,
      //margin:"auto",
       marginBottom:10,
       
      
       
    },
    text:{
        //color:"blue",
        marginBottom:20,
        
    },
    view:{
     
        padding:30,
        
        //flex:1,/*para q se vea ok, arriba navbar*/
       // backgroundColor:"green",
       // width:350,
        
        marginBottom:80,//para que quede vien abajo con flex 1 no iba
        justifyContent:"center",
        alignItems:"center",
        
        
        
    },
    viewCont:{
        //textAlign:"center",
        //margin:"auto",
        width:"100%", //pongo este 100 y el view de adentro mas chico. el de adentro 90 asi tiene margen, este 100 asi el scroll se ve bien al costado
       // flex:1
       justifyContent:"center",
       alignItems:"center"
       
    
       
        
    },
    viewText:{
        alignItems:"left"
    },
   /*scroll:{
        paddingRight:10
    },*/
    button:{
        justifyContent:"center",
        alignItems:"center"
    },
    
})