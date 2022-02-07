import React from 'react'
import {StyleSheet ,View, Text ,Pressable, Image} from 'react-native'

export default function Singleproducts(props) {
                     const {title,price,originalprice,discount,image} = props.item;
                     const {clicked} = props.clicked;



    return (
        <Pressable style={styles.imgholder}  onPress={clicked}>
                <View style={styles.imgcontainer}>
                   <Image resizeMode="cover" source={image} style={{width:'100%',height:'100%',borderTopRightRadius:10}}/>
                </View>
                <View style={styles.textholder}>
                      <Text style={{fontSize:15,fontWeight:"700"}}>{title}</Text>
                      <View style={{flexDirection:"row",marginTop:10}}>
                      <Text style={{fontSize:18,fontWeight:"600",textDecorationStyle:"solid",textDecorationLine:"line-through",textDecorationColor:"silver",color:"silver"}}>${originalprice}</Text>
                      <Text style={{fontSize:22,fontWeight:"bold",textDecorationStyle:"solid",color:"black",marginLeft:20}}>${price}</Text>
                      </View>
                </View>
                <View style={{borderRadius:10,position:'absolute',width:70,height:40,backgroundColor:'gold',justifyContent:"center",alignItems:"center",top:0,right:0}}>
                     <Text style={{color:"#fff",fontSize:15,fontWeight:"500"}}>-{Math.floor(( price * 100) / originalprice)}%</Text>
                </View>
        </Pressable>
            
        
    )
}

const styles = StyleSheet.create({
    textholder:{
           width:'100%',
           height:'100%',
           alignItems:'center',
           flexDirection:'column',
           marginTop:10

    },
    imgholder:{
         width:"50%",
         height:300,
         marginRight:10,
    marginTop:20,
    elevation:1,
    borderTopRightRadius:10,
    backgroundColor:'#ffffff'

    },
    imgcontainer:{
          width:"100%",
          height:"60%",
          borderTopRightRadius:20
    }

})
