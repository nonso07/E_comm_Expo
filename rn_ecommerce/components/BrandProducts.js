import React from 'react'
import {StyleSheet, View, Text, ImageBackground ,TouchableOpacity} from 'react-native'

export default function BrandProducts({totalproducts, singlevalue}) {
        //   var {id,image,title,previewimages,description,origninalprice,discountprice,discountpercentage,companyname,companybanner,producttype} =   props.in;
      
    return (
        <TouchableOpacity  activeOpacity={0.8}  style={styles.body}  onPress={singlevalue}>
           
            <View style={{flex:1,flexWrap:"wrap"}}>
                <View style={styles.container}>
                    <View style={{width:"100%",height:"60%",marginTop:20}}>
                        <View style={{width:"100%",height:"70%",paddingHorizontal:20}}>
                       <ImageBackground resizeMode="cover" style={{width:"100%",height:"100%",marginTop:20}} source={totalproducts.image}>
                     </ImageBackground>
                     </View>
                        <View  style={{width:"100%",height:"100%",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
                             <Text>{totalproducts.title.slice(0,17)}..</Text>
                             <Text style={{fontSize:20,fontWeight:"bold",letterSpacing:1}}>$ {totalproducts.discountprice}</Text>
                        </View>
                    </View>

                     {/* start discount */}
                     <View style={styles.discount}>
                         <Text style={styles.discounttext}>-30%</Text>

                      </View>
                      {/* end discount */}
                </View>


                </View>
             

            </TouchableOpacity>
       
       
    )
}


const styles = StyleSheet.create({
    discount:{
        width:50,
        height:30,
        position:"absolute",
        top:12,
        right:5,
        backgroundColor:"rgba(200,0,0,0.2)",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        zIndex:20


    },
    discounttext:{
        color:"rgba(255,0,0,0.3)",
        fontSize:13,
        fontWeight:"bold"
    },


    container:{
        width:"100%",
        height:"100%",
        elevation:6,
        backgroundColor:"#fff",
        flexDirection:"column"
    },


    
    body:{
       width:'50%',
       height:250,
       backgroundColor:"rgba(0,0,0,0.01)",
       
    }

})

