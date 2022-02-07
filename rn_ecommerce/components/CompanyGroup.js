import React from 'react';
import { StyleSheet, Text, View , FlatList,ImageBackground , TouchableOpacity} from 'react-native';
import TotalProducts from './TotalProducts';

const CompanyGroup = ({navigation,route}) => {
  const {companyprod} = route.params;
  const fillter = TotalProducts.filter((items)=>items.companyname == companyprod);



const singleclick =(obj)=>{

    navigation.navigate('singleproduct',{allItems:obj});
}



    return (
        <View   style={{flex:1,alignItems:'center'}}>
            {/* <Text  style={{width:"100%",height:300,textAlign:"center",paddingVertical:100,fontSize:20,fontWeight:"bold"}}>{companyprod}</Text> */}
             {/* <FlatList
               numColumns={2}
               showsVerticalScrollIndicator={false}
               data={fillter}
               keyExtractor={(item)=>item.id}
               renderItem={({item})=>{
                 return(
                 <View  style={{width:"100%",height:300}}>
                 <Image source={item.image}  style={{width:"100%",height:'20%'}}/>   
                 </View>                     
                 )

               }}          


             /> */}
             <View style={{width:"100%",height:80,justifyContent:'center',alignItems:'center',paddingTop:"10%"}}>

                <Text style={{fontSize:17,textTransform:"capitalize",fontWeight:"bold"}}>{`You are now on ${companyprod} Brand Shop. `}</Text>



             </View>
           
                  
             <FlatList
               numColumns={2}
               showsVerticalScrollIndicator={false}
               data={fillter}
               keyExtractor={(item)=>item.id}
               renderItem={({item})=>{
                 return(
                <TouchableOpacity activeOpacity={0.5}  style={styles.companyholder}  onPress={()=>singleclick(item)} >
                    <View   style={{width:"100%",height:"60%",paddingHorizontal:10,paddingVertical:35}}>
                      <ImageBackground source={item.image}  resizeMode={'cover'}  style={{width:"100%",height:'100%'}}></ImageBackground>   
                    </View>
                    <View   style={{flexDirection:'column',height:"100%"}}>
                      <Text  style={{width:"100%",height:"10%",fontSize:14,fontWeight:'bold'}}>
                         {item.title.slice(0,17)}...
                      </Text>
                       <Text style={{width:"100%",height:"10%",fontSize:20,fontWeight:'bold'}}>
                          $ {item.discountprice}
                       </Text>
                       <Text  style={{width:"100%",height:"30%",fontSize:12,fontWeight:'bold',color:"#00bbf9"}}>
                            {item.companyname}
                       </Text>


                    </View>
                 </TouchableOpacity>                     
                 )

               }}          


             />
                 
     







              


        </View>
    )
}

export default CompanyGroup
const styles = StyleSheet.create({
    companyholder:{
        // flex:1,
        width:"50%",
         height:300,
         alignItems:'center',
         flexDirection:"column"

    }




})
