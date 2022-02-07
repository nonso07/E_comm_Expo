import React, {useState} from 'react';
import {StyleSheet,View,FlatList,TouchableOpacity, Image , Text} from 'react-native';
// import Singleproducts from './Singleproducts';
import items from './items';


export default function MainPage({navigation}) {
// const [arr,setArr] = useState([]);


    const clicked = (id,allItems)=>{
        // const singlearr = arr.filter((ite)=>ite.id === id);
        navigation.navigate('Single Product',{allItems:allItems});

    };

    return (
        <View style={{width:"100%", paddingHorizontal:10}}>

           <FlatList
           numColumns={2}
           showsHorizontalScrollIndicator={false}
           showsVerticalScrollIndicator={false}
           keyExtractor={(item,index)=>item.id}
           data = {items}
           renderItem={({item})=>{
            const {id,title,price,originalprice,discount,image,description} = item;
            return (
                <TouchableOpacity style={styles.imgholder}  onPress={()=>clicked(id,item)}>
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
        </TouchableOpacity>
                    // <Singleproducts item={item}  clicked={clicked}/>
             )

           }
           
        
         }    
           />


            {/* <Singleproducts /> */}
        </View>
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
