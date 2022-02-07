import React from 'react'
import {StyleSheet, Text , TouchableOpacity} from 'react-native'


export default function Buttonsingle({btntitle,clicked,bgcolors,indcolor}) {
 
    return (
        <TouchableOpacity onPress={()=> clicked()} style={[styles.btnholders,{backgroundColor:bgcolors,color:indcolor}]} activeOpacity={0.9} >
           <Text style={{color:'#fff',fontSize:22,fontWeight:'bold'}}>{btntitle}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnholders:{
        flex:1,
        width:'100%',
        height:100,
        justifyContent:'center',
        alignItems:'center',
        color:'#ffffff',
        borderRadius:30,
        marginTop:10
    
    }
    
})
