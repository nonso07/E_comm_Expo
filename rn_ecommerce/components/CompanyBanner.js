import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const CompanyBanner = ({imgs}) => {
    return (
        <View  style={styles.container}>
            <Image source={imgs} style={styles.images} />
        </View>
    )
}

export default CompanyBanner

const styles = StyleSheet.create({
    images:{
          width:'100%',
          height:400


    },
container:{
     flex:1,
     justifyContent:"center",
     alignItems:'center'
}



})
