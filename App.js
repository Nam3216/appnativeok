import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/Pages/Home';
import {Redirect,Route,NativeRouter,Routes} from "react-router-native"
import Init from './Components/Init/Init';
import Navbar from './Components/Navbar/Navbar';
import URLSearchParams from '@ungap/url-search-params'
import Category from './Components/Category/Category';
import Detail from './Components/Pages/Detail';
import Context from './Context/Context';
import Cart from './Components/Cart/Cart';
import Buy from './Components/Pages/Buy';
import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About';
import Test from './Components/Pages/text';
import Footer from './Components/Pages/Footer';

//<Home/>
export default function App() {
  return (
    
    <View style={styles.container}>
      <Context>
    <StatusBar style="light"  />
      <NativeRouter>
        <Navbar/>
        
        <Routes>
          
               <Route path="/" element={<Home/>}/>
              
               <Route path="/contact" element={<Contact/>}/>
               <Route path="/about" element={<About/>}/>
               <Route path="/category/:category" element={<Category/>}/>
               <Route path="/detail/:id" element={<Detail/>}/>
               <Route path="/cart" element={<Cart/>}/>
               <Route path="/buy" element={<Buy/>}/>
               <Route path="products" element={<Test/>}/>
          </Routes>
          <Footer/>
        </NativeRouter>
        
       
        </Context>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   //flex:1, flex 1 en app desp tira para abajo el navegador si no tiene elementos la pag
    //se ve para abajo porq esta esto, si quiero qe se vea mas abajo flex:1
    
    alignItems: 'center',
    justifyContent: 'center',//se ve en medio y porque esta esto
   // marginTop:40,//para que app se vea mas abajo
    //margin:10//para que se aleje de los border de los costados
  },
  status:{
    marginBottom:50
  }
});
