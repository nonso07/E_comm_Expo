import React , {useState} from 'react';
import {StyleSheet, View, Text,Image ,Dimensions,ScrollView,TouchableOpacity,Linking, TextInput, KeyboardAvoidingView} from 'react-native';
import { AntDesign,Foundation , EvilIcons} from '@expo/vector-icons'; 

export default function IndividualProd({navigation,route}) {
    
    const {allItems} =  route.params;
    
    const [single , setSingle ] = useState([]);
    const openphone = ()=>{
        Linking.openURL('tel:08065843870')
    }
    
    
    const addcart =(items)=>{
        single.push(items)
    setSingle(single)
   navigation.navigate('Cart',{singleItems:single})
}


    return (
        <View style={{width:Dimensions.get('window').width,height:'100%',paddingTop:20,flex:1}}>

            <ScrollView
            showsVerticalScrollIndicator={false}
            
            
            >


                
        <Image source={allItems.image} resizeMode={'cover'} style={{height:400,width:'100%'}}/>
        <View style={{width:"100%",minHeight:800,backgroundColor:"#ffffff",flexDirection:"column"}}>

            <View style={{width:"100%",minHeight:400,flexDirection:"column",paddingHorizontal:10,paddingTop:15}}>
                <View style={{width:"100%",height:"5%",alignItems:"flex-start",justifyContent:"center"}}>
                      <Text style={{fontWeight:"bold",fontSize:18,letterSpacing:1}}>{allItems.title}</Text>

                </View>
                <View style={{width:"100%",height:"5%",alignItems:"flex-start" ,justifyContent:"center"}}>
                      <Text style={{fontSize:12,textTransform:"capitalize"}}>Brand: {allItems.companyname} </Text>

                </View>
                <View style={{width:"100%",height:"9%",alignItems:"flex-start" ,justifyContent:"center"}}>
                      <Text style={{fontWeight:"bold",fontSize:29,letterSpacing:2}}>$ {allItems.discountprice}</Text>

                </View>
                <View style={{width:"100%",height:"10%",alignItems:"flex-start" ,flexDirection:"row",alignItems:"center"}}>
                    <Text style={{fontWeight:"bold",fontSize:19,letterSpacing:2,textDecorationLine:"line-through",textDecorationColor:"silver",color:"silver"}}>${allItems.originalprice}</Text>
                    <Text style={{fontWeight:"bold",fontSize:12,color:"silver",height:"52%",minWidth:"12%",justifyContent:"center",alignItems:"center",backgroundColor:"#fed9b7",textAlignVertical:"center",textAlign:"center",color:"#ef233c",marginLeft:10,borderRadius:10}}>-{allItems.discountpercentage}</Text>
                </View>
          
                <View style={{width:"100%",height:"10%",alignItems:"flex-start" }}>
                    <Text style={{fontWeight:"600",fontSize:13,height:"100%"}}>{`+ shipping is $${allItems.shippingwithin? allItems.shippingwithin : 150} around the country to $${allItems.shippingoutside? allItems.shippingoutside : 600} off the of Nigeria.Please Ensure to call Shieldlife customer hotline to get your precise shipping cost`}</Text>
                    
                </View>

                <View  style={{paddingTop:5,width:"100%",height:"15%",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <View   style={{flexDirection:"column",width:"40%",height:"100%",justifyContent:"center",flexDirection:"column"}}>
                         <Text style={{width:"100%",flexDirection:"row",height:"45%"}}><AntDesign name="star" size={12} color="#ffbe0b" /><AntDesign name="star" size={12} color="#ffbe0b" /><AntDesign name="star" size={12} color="#ffbe0b" /><AntDesign name="star" size={12} color="#ffbe0b" /><AntDesign name="star" size={12} color="#ffbe0b" /></Text>
                         <Text style={{width:"100%",flexDirection:"row",height:"30%",marginTop:-20}}>({`${allItems.rating? allItems.rating+' rating avaliable' : 'No rating avaliable'}`})</Text>
  
                    </View>

                    <View style={{flexDirection:"row"}}>

                        <TouchableOpacity style={{padding:8}}><AntDesign name="sharealt" size={27} color="#ffbe0b" /></TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:10,padding:8}}><EvilIcons name="heart" size={29} color="#ffbe0b"/></TouchableOpacity>
                    </View>


                </View>

                <View  style={{width:"100%"}}>
                  <View>
                      <Text style={{fontSize:13,textTransform:"uppercase",fontWeight:"bold",color:"#6b705c"}}>delivery and return info</Text>
                  </View>
                   <KeyboardAvoidingView padding="auto" style={{flexDirection:"column",width:"100%",paddingTop:20}}>
                       <Text style={{marginBottom:5,fontWeight:"500",fontSize:15,letterSpacing:1}}>Enter Location</Text>
                       <TextInput style={{width:"100%",borderWidth:0.5,borderColor:"silver",borderRadius:5,height:50,paddingLeft:10}}  placeholder="Enter Delivery State"  keyboardType="default" autoFocus={true} autoCorrect={true} autoComplete={true} />
                       <TextInput style={{width:"100%",borderWidth:0.5,borderColor:"silver",borderRadius:5,height:50,paddingLeft:10,marginTop:10}}  placeholder="Enter Delivery Address"  keyboardType="default" />
                          
                 </KeyboardAvoidingView>




                </View>

            </View>




        </View>


</ScrollView>

      <View style={styles.bottomholder}>
          <TouchableOpacity style={{width:"18%",height:"80%",justifyContent:"center",alignItems:"center",borderWidth:0.5,borderColor:"silver"}}   onPress={()=>openphone()}>
              <Text  style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center",elevation:2,textAlign:"center",textAlignVertical:"center"}}><Foundation name="telephone" size={24} color="#fb5607" /></Text>

          </TouchableOpacity>
          <TouchableOpacity   style={{width:"75%",height:"80%",flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:"#fb5607"}}  onPress={()=>addcart(allItems)}>
              <AntDesign style={{width:"15%",height:"100%",justifyContent:"center",textAlign:"center",alignItems:"center",textAlignVertical:"center"}} name="shoppingcart" size={25} color={'#ffffff'} />
              <Text  style={{width:"85%",height:"100%",textAlign:"center",fontSize:14,fontWeight:"bold",color:"#ffffff",textAlignVertical:"center"}}>ADD TO CART</Text>

          </TouchableOpacity>


      </View>


        </View>
    )
}


const styles = StyleSheet.create({
    bottomholder:{
        width:"100%",
        height:70,
        flexDirection:"row",
        position:"absolute",
        bottom:0,
        left:0,
        borderTopWidth:0.5,
        borderTopColor:"silver",
        paddingTop:9,
        justifyContent:"space-around",
        
    }
})
