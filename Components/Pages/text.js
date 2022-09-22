import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, Text, View } from "react-native";
import { Link } from "react-router-native";
import { useNavigate } from "react-router-native";


const Test = ({history}) => {
  const [count, setCount] = useState(0);
  const Navigate=useNavigate()


  const onPress = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>Count: {count}</Text>
      </View>
             
            <View>
      <TouchableWithoutFeedback onPress={()=>Navigate("/cart")} >
      
     
        <View style={styles.button} >
        
          <Text>Touch Here</Text>
         
        </View>
       
        </TouchableWithoutFeedback>
        </View>
      
      
    
    </View>
  );
}

export default Test;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  countText: {
    color: "#FF00FF"
  }
});

