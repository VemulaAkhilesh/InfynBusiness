import { Button, StyleSheet, Text, View } from "react-native";

const CustomText=(props:any)=>{
    return(
        <View style={styles.btn}>

   {props.children}

        </View>
    )
}
export default CustomText;

const styles = StyleSheet.create({
btn:{
    borderRadius: 44,
    backgroundColor: '#222834',
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5, 
    shadowRadius: 41, 
    elevation: 20
}
    
})