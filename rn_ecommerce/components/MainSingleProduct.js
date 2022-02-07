import React from 'react'
import { StyleSheet, Text, View , ImageBackground, TouchableOpacity} from 'react-native'

const MainSingleProduct = ({name,price,discount,percent,image,companys,singleclick}) => {
    
    return (
        <TouchableOpacity style={styles.container} onPress={singleclick} >

            

            <View  style={styles.holder}>
                <View style={styles.imgholder}>
                   <ImageBackground resizeMode={"cover"} source={image} style={styles.img}>
                  </ImageBackground>

          </View>
          <View  style={styles.bottomholder}>
            <Text  style={styles.titleholder}>
               {name.slice(0,12)}...
               
                </Text>
            <Text  style={styles.priceholder}>${price}</Text>
            <View  style={styles.discountholder}>

            <Text   style={styles.dis}>${discount}</Text>
            <Text style={styles.perc}>{percent}%</Text>

            </View>
            <Text style={styles.company}>{companys}</Text>
          </View>
            </View> 
        </TouchableOpacity>
    )
}

export default MainSingleProduct

const styles = StyleSheet.create({

    company:{
       height:"25%",
       fontSize:13,
       fontWeight:"bold",
       color:"rgba(95,120,205,0.7)",
       alignItems:"center",
       justifyContent:"center",
       marginLeft:10
    },
    perc:{
        width:"30%",
        height:"70%",
        backgroundColor:"gold",
        color:"#fff",
        alignItems:"center",
        textAlign:"center"


    },
    dis:{
        fontWeight:"bold",
        color:"silver",
        textDecorationLine:"line-through",
        textDecorationColor:"silver",
        fontSize:20

    },
    discountholder:{
        flexDirection:"row",
        height:"25%",
        width:"80%",
        justifyContent:"space-evenly"

    },
    priceholder:{
        height:"25%",
        fontSize:22,
        fontWeight:"bold",
        marginLeft:10,
        paddingTop:10


    },
     titleholder:{
         width:"100%",
         height:"30%",
         fontSize:16,
         fontWeight:"bold",
         textAlign:"center",
         paddingTop:10


     },
    bottomholder:{
           width:"100%",
           height:"50%",
           flexDirection:"column",
           alignItems:"flex-start",
           justifyContent:"center",

    },

    img:{
       width:"100%",
       height:"100%"

    },
     imgholder:{
           width:"100%",
           height:"50%",
           paddingHorizontal:20,
           paddingTop:5


     },
    holder:{
        width:"100%",
        height:"100%",
        backgroundColor:"#fff",
        flexWrap:"wrap"
     

    },
  container:{
       width:"48%",
       height:380,
       marginBottom:3,
       marginRight:2
       
  }




})
