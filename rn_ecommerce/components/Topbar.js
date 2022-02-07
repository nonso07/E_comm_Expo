import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Topbar = ({title,subtitle}) => {
    return (
        <View>
           <View style={styles.top}>
                <View style={styles.top1}>
                    <Text style={{fontSize:15,fontWeight:"bold"}}>{title}</Text>
                </View>
                <View style={styles.top2}>
                <Text style={{fontSize:15,fontWeight:"bold"}}>{subtitle}</Text>
                </View>
            </View>
        </View>
    )
}

export default Topbar

const styles = StyleSheet.create({
    top1:{
        width:"60%",
        height:"100%",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"flex-start",
        marginLeft:15
        },
        top2:{
         width:"40%",
         height:"100%",
         justifyContent:"center",
         alignItems:"flex-end",
         marginRight:17,
         
      
        },
        top:{
            width:"100%",
            height:40,
            backgroundColor:"rgba(255,100,255,0.1)",
            justifyContent:"space-around",
            alignItems:"center",
            flexDirection:"row",
            // paddingTop:20
        },






})
