import React , {useState} from 'react'
import { StyleSheet, Text, View , ImageBackground , TouchableOpacity , ScrollView} from 'react-native';
import { Entypo, MaterialIcons , Ionicons , AntDesign } from '@expo/vector-icons'; 


const CartSection = ({route}) => {

        const {singleItems} = route.params;
           
        console.log(singleItems);
    const [inp , setInp] = useState(1);

    return (
        <View  style={styles.container}>
            <ScrollView
            showsVerticalScrollIndicator={false}
            style={{width:"100%",height:200,backgroundColor:"#fff",flexDirection:"column"}}
            
            >

{
singleItems.map((itemss)=>{
     
  return (


    <View key={Math.random().toString()}   style={{width:"100%",height:180,backgroundColor:"#fff",flexDirection:"column",marginBottom:20}}>
    <View  style={{width:"100%",height:"70%",flexDirection:"row"}}>
        <View style={{width:"40%",height:"100%"}}>
           <ImageBackground style={{flex:1,width:null,height:null}} resizeMode={'cover'}  source={itemss.image}>

           </ImageBackground>

        </View>
        <View  style={{width:"60%",height:"60%",flexDirection:"column",alignItems:"center"}}>
            <Text style={{fontSize:15,fontWeight:"bold",height:"50%",marginBottom:10,marginTop:10}}>{itemss.title}</Text>
           <View style={{width:"100%",height:"50%",flexDirection:"row",justifyContent:"space-between"}}>

            <Text style={{fontSize:30,fontWeight:"500"}}>{`$ ${itemss.discountprice}`}</Text>

          <Text style={{fontSize:15,fontWeight:"500",textDecorationLine:"line-through",textDecorationColor:"silver",paddingRight:10}}>{`$ ${itemss.originalprice}`}</Text>
          
           </View>

        </View>
                              
    </View>
       <View  style={{width:"100%",height:"30%",borderTopWidth:0.5 , borderTopColor:"silver",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
       <View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:"center",paddingLeft:10}} >
                <TouchableOpacity style={{width:"15%",height:"100%",justifyContent:"center",alignItems:"center"}} >
                        <Entypo name="heart-outlined" size={34} color="#fb5607" />

                </TouchableOpacity>

                <TouchableOpacity  style={{marginTop:10,width:"40%",flexDirection:"row",height:"100%",justifyContent:"center",alignItems:"center",marginHorizontal:10}}>
                <MaterialIcons name="delete" size={34} color="#fb5607" />
                <Text  style={{marginLeft:10,textTransform:"capitalize",fontWeight:"bold" , fontSize:13}}>Delete</Text>

                </TouchableOpacity>

            </View>
           
           
           
           
            <View  style={{flexDirection:"row",width:"45%",height:"100%",justifyContent:"space-evenly",alignItems:"center"}}>

                <TouchableOpacity   
                  onPress={()=>{
                     setInp(()=>{
                           if(inp < 2){
                               return 1;

                           }
                         return inp - 1
                         
                       }
                       ) 
                     
                  }}
                
                
                
                >
                <Text><AntDesign name="minuscircle" size={20} color="#fb5607" /></Text>
                </TouchableOpacity>
                  <View>
                    <Text  style={{color:"gray",fontSize:20,fontWeight:"500"}}>{inp}</Text>

                  </View>

                <TouchableOpacity
                
                onPress={()=>{
                   setInp(()=> inp + 1)     
                }}
                >
                <Ionicons name="add-circle" size={30} color="#fb5607" />
                </TouchableOpacity>

            </View>
      </View>
</View>





























  )















})





}










{/* 
             <View   style={{width:"100%",height:200,backgroundColor:"#fff",flexDirection:"column"}}>
                 <View  style={{width:"100%",height:"70%",flexDirection:"row"}}>
                     <View style={{width:"40%",height:"100%"}}>
                        <ImageBackground style={{flex:1,width:null,height:null}} resizeMode={'cover'}  source={require('../assets/product_collection/tommy_pants.jpeg')}>

                        </ImageBackground>

                     </View>
                     <View  style={{width:"60%",height:"60%",flexDirection:"column",alignItems:"center"}}>
                         <Text style={{fontSize:15,fontWeight:"bold",height:"50%",marginBottom:10,marginTop:10}}>{'Beautiful designers Tommy Pants'}</Text>
                        <View style={{width:"100%",height:"50%",flexDirection:"row",justifyContent:"space-between"}}>

                         <Text style={{fontSize:30,fontWeight:"500"}}>{'$ 220.15'}</Text>

                       <Text style={{fontSize:15,fontWeight:"500",textDecorationLine:"line-through",textDecorationColor:"silver",paddingRight:10}}>{'$ 220.15'}</Text>
                       
                        </View>

                     </View>
                                           
                 </View>
                    <View  style={{width:"100%",height:"30%",borderTopWidth:0.5 , borderTopColor:"silver",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:"center",paddingLeft:10}} >
                             <TouchableOpacity style={{width:"15%",height:"100%",justifyContent:"center",alignItems:"center"}} >
                                     <Entypo name="heart-outlined" size={34} color="#fb5607" />

                             </TouchableOpacity>

                             <TouchableOpacity  style={{marginTop:10,width:"40%",flexDirection:"row",height:"100%",justifyContent:"center",alignItems:"center",marginHorizontal:10}}>
                             <MaterialIcons name="delete" size={34} color="#fb5607" />
                             <Text  style={{marginLeft:10,textTransform:"capitalize",fontWeight:"bold" , fontSize:13}}>Delete</Text>

                             </TouchableOpacity>

                         </View>
                        
                        
                        
                        
                         <View  style={{flexDirection:"row",width:"45%",height:"100%",justifyContent:"space-evenly",alignItems:"center"}}>

                             <TouchableOpacity   
                               onPress={()=>{
                                  setInp(()=>{
                                        if(inp < 2){
                                            return 1;

                                        }
                                      return inp - 1
                                      
                                    }
                                    ) 
                                  
                               }}
                             
                             
                             
                             >
                             <Text><AntDesign name="minuscircle" size={20} color="#fb5607" /></Text>
                             </TouchableOpacity>
                               <View>
                                 <Text  style={{color:"gray",fontSize:20,fontWeight:"500"}}>{inp}</Text>

                               </View>

                             <TouchableOpacity
                             
                             onPress={()=>{
                                setInp(()=> inp + 1)     
                             }}
                             >
                             <Ionicons name="add-circle" size={30} color="#fb5607" />
                             </TouchableOpacity>

                         </View>
                   </View>
             </View>



 */}




             </ScrollView>
        </View>
    )
}

export default CartSection

const styles = StyleSheet.create({
   container:{
         minHeight:800,
         width:"100%",
         alignItems:'center',
         paddingTop:1

   }



})
