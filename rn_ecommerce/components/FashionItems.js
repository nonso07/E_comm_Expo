import React  from 'react'
import { StyleSheet , View, Text , TouchableOpacity , ImageBackground} from 'react-native'

export default function FashionItems({imagess,title}) {
    return (
     <TouchableOpacity style={{width:"25%",height:150,paddingHorizontal:5}}>
    <View  style={{width:"100%",height:"50%"}}>
      <ImageBackground resizeMode="cover" source={imagess} style={{width:"100%",height:"100%",marginTop:5}}>
     </ImageBackground>
        </View>
        <View style={{height:"50%" , width:"100%",fontSize:14,justifyContent:"flex-end",alignItems:"center",backgroundColor:"rgba(0,0,0,0.01)"}}>
          <Text style={{justifyContent:"center",alignItems:"center",fontWeight:"900",marginBottom:15}}>{title}</Text>
    </View>
</TouchableOpacity>


    )
}


const styles = StyleSheet.create({




})
