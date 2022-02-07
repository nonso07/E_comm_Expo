import React from 'react'
import { View,ImageBackground, Text } from 'react-native'


export default function Bgholder() {
    return (
        
        <ImageBackground source={require('../assets/bg_shopping.jpg')} style={styles.bgstyles} >
            <View>

              <Text>welcome back</Text>

          
          
           </View>
      </ImageBackground>

    );
}


const styles = StyleSheet.create({
    bgstyles:{
     width:'100%',
     height:'100%'

    }
  
})

