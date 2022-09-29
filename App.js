import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/Pages/Home';
import {Redirect,Route,NativeRouter,Routes} from "react-router-native"
import Init from './Components/Init/Init';

import Category from './Components/Category/Category';
import Detail from './Components/Pages/Detail';
import Context from './Context/Context';
import Cart from './Components/Cart/Cart';
import Buy from './Components/Pages/Buy';
import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About';
//import Test from './Components/Pages/text';
//import Footer from './Components/Pages/Footer';
import Products from './Components/Pages/Products';
//import MyComponent from './Components/Pages/BottomNav';
import Bottom from './Components/Pages/Bottom';
import  Constants  from 'expo-constants';
import Search from './Components/Pages/Search';
import Result from './Components/Pages/Result';



//<Home/>
export default function App() {
  
  return (
    
    <View style={styles.container}>
      <Context>
    <StatusBar style="dark"  />
      <NativeRouter>
      
     
        
    
    
     
    
        <Routes>
         
               <Route path="/" element={<Home/>}/>
              
               <Route path="/contact" element={<Contact/>}/>
               <Route path="/about" element={<About/>}/>
               <Route path="/category/:category" element={<Category/>}/>
               <Route path="/detail/:id" element={<Detail/>}/>
               <Route path="/cart" element={<Cart/>}/>
               <Route path="/buy" element={<Buy/>}/>
               <Route path="/products" element={<Products/>}/>
               <Route path="/result" element={<Result/>}/>
                
          </Routes>
          
         <Bottom/>
        
          
        </NativeRouter>
        
        
        </Context>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   //flex:1, flex 1 en app desp tira para abajo el navegador si no tiene elementos la pag
    //se ve para abajo porq esta esto, si quiero qe se vea mas abajo flex:1
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',//se ve en medio y porque esta esto
    paddingTop:Constants.statusBarHeight+10,
    
   
  },
  status:{
    marginBottom:50
  }
});

//https://github.com/Nam3216/appnative/tree/master