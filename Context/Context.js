import React,{useState,useEffect} from "react";
import {View,Text} from "react-native"
import { createContext } from "react";
import MockShoes from "../Components/mock/mockShoes";

const ContextElement=createContext()

const Context =({children})=>{
    const[list,setList]=useState([])
    const[object,setObject]=useState({})
    const[cartList,setCartList]=useState([])
    const[sizeOka,setSizeOka]=useState(0)
    const[priceTotal,setPriceTotal]=useState(0)

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

    const GetObject=(item)=>{
        console.log(object, "before")
        setObject(item)
        console.log(item, "itemmmm")
    }

    const GetSize=(object,size)=>{
        //object.size=size
        alert(size)
    }
    let priceOk=0
//para agregar producto a cartList, ya tiene correcto el size y cant, lo trae de detail
const AddCartList=(quant,id)=>{
   //1 obtengo lista prod desde backend 
    //let listApi=[]
    //alert("add")
    GetList().then((list)=>{
        setList(list)
        let listApi=list
        

    

 //2 for en lista para obtener prod segun id 
    let product={}
   for (const item of listApi){
    if(item.id==id){
        product=item
        product.quantity=quant
    }
   } 

//3 chequeo si ese prod ya esta en cartList
    let checkProduct=false
   for(const item of cartList){
        if(item.id==product.id ){
            checkProduct=true
            
            item.quantity=product.quantity
               
            }
            
            
            
        }

    
    if(checkProduct==false){
        setCartList([...cartList,product])
    }


    })//cierro aca el .then de cdo obtuve promesa

}
    useEffect(()=>{
        TotalPrice()
    },[AddCartList])

 

  
   

    const TotalPrice=()=>{
       
        let price=0
       
        for(const item of cartList){
            price=price+ (item.quantity*item.price)
        }
        console.log(price, "price")
       setPriceTotal(price)
      

    }

    const DeleteItem=(id)=>{
        let listOk=cartList.filter(x=>x.id!=id)
        setCartList(listOk)
    }

    const EmptyList=()=>{
        setCartList([])
    }

    const dataContext={GetObject,object,GetSize,cartList,setSizeOka,sizeOka,AddCartList,EmptyList,DeleteItem,priceTotal,TotalPrice,}

    return(
        <ContextElement.Provider value={dataContext}>
            {children}
        </ContextElement.Provider>
    )

}

export default Context
export {ContextElement}

/*const AddCartList=(product)=>{
        console.log(cartList,"cartlist")
      
        console.log(product,"prod")
      
        let checkProduct=false
       for(const item of cartList){
            if(item.id==product.id ){
                checkProduct=true
                if(item.size==product.size){
                    alert("same")
                    checkProduct=true
                    item.quantity=product.quantity

                }
               
               
                    
                }
                
                
                
            }

        
        if(checkProduct==false){
            setCartList([...cartList,product])
        }

    }
    console.log(cartList,"cart")*/