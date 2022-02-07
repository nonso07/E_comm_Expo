import React, {useState , useRef} from 'react'
import {StyleSheet ,SafeAreaView, View, Text ,TextInput , Pressable , ScrollView,Image,ImageBackground,Dimensions, TouchableOpacity,FlatList,ActivityIndicator} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Colorwheel } from './Constantcolors';
import Banner  from './Banner';
import fashions from './fashions';
import FashionItems from './FashionItems';
import BrandProducts from './BrandProducts';
import MainSingleProduct from './MainSingleProduct';
import Topbar from './Topbar';
import CompanyBanner from './CompanyBanner';
import TotalProducts from './TotalProducts';




export default function GeneralProducd({navigation}) {
    const singleclick =(obj)=>{

        navigation.navigate('singleproduct',{allItems:obj});
  }


   const singlevalue =(obj)=>{

         navigation.navigate('Company',{"companyprod":obj});
   }

let numb = 1;

const nike = TotalProducts.filter((items,id)=>{
  if(items.companyname == 'nike' && numb <= 4){
      numb++;
      return items;
  }


})


let num = 1;
const gucci = TotalProducts.filter((item,id)=>{
    if(item.companyname == 'gucci' && num <= 4){
        num++;
        return item;
    }
  
  
  })

  let iph = 1;
  const iphone = TotalProducts.filter((ite,id)=>{
    if(ite.companyname == 'iphone' && iph <= 4){
        iph++;
        return ite;
    }
  
  
  })

let sam = 1;

const samsung = TotalProducts.filter((sams,id)=>{
    if(sams.companyname == 'samsung' && sam <= 4){
        sam++;
        return sams;
    }
  
  
  })






   return (
       <View style={{marginTop:25}}>
            <SafeAreaView  style={styles.topbar}>
                 <TextInput placeholder="Search Products" keyboardType="default"  style={styles.input}/>  
                 <View style={styles.icon} ><AntDesign name="shoppingcart" size={35} color="gold" />
                  <Pressable style={{position:"absolute",right:5,top:4}}><Text style={{color:"red",fontSize:18,fontWeight:"bold"}}>1</Text></Pressable>
                 </View>          
        </SafeAreaView>
 {/* start first point */}
 <ScrollView
 showsVerticalScrollIndicator={false}
 showsHorizontalScrollIndicator={false}

>
 <View>
<View style={{width:"100%",height:100, alignItems:"center",justifyContent:'center',marginBottom:5}}>
<Text style={{fontSize:22,fontWeight:'bold',letterSpacing:1}}>ShieldLife Products Categories Banner Section </Text>
</View>
<ScrollView

// showsVerticalScrollIndicator={false}
// showsHorizontalScrollIndicator={false}
horizontal={true}
decelerationRate={0}
snapToInterval={Dimensions.get('window').width}
snapToAlignment={"center"}
>

{Banner.map((banners)=>{
return (
<TouchableOpacity  key={Math.random().toString()} activeOpacity={0.7}>
<ImageBackground  resizeMode="cover"  source={banners.image} style={{width:Dimensions.get('window').width,height:300}}>

</ImageBackground>
</TouchableOpacity>
);


})}

</ScrollView >
 </View>
{/* end first point */}

<View style={{height:400,width:"100%"}}>
   <View  style={{backgroundColor:Colorwheel.tertiary,width:"100%",height:50,marginTop:5}}>
       <View style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"flex-start",marginLeft:10}}>
           <Text style={{textTransform:'uppercase',fontSize:14,fontWeight:'900',color:'#fff'}}>Fashion Deal</Text>    
       </View>
   </View>
   <View style={{flex:1,flexWrap:'wrap'}}>
      <FashionItems imagess={require('../assets/female_clothingred.jpg')} title={'Women\'s Clothing'}/>
      <FashionItems imagess={require('../assets/men_shirt.jpg')} title={'Men\'s Clothing'} />
      <FashionItems imagess={require('../assets/female_shoeheels.jpg')} title={'Women\'s Shoes'} />
      <FashionItems imagess={require('../assets/banner_shoe.jpg')} title={'Men\'s Shoe'} />
      <FashionItems  imagess={require('../assets/female_accessories.jpg')} title={'Women\'s Accessories'}/>
      <FashionItems  imagess={require('../assets/male_accessories.jpg')} title={'Men\'s Accessories'}/>
      <FashionItems imagess={require('../assets/female_bag2.jpg')} title={'Women\'s Bags'}/>
      <FashionItems imagess={require('../assets/male_bag.jpg')} title={'Men\'s Bags'}/>
 </View>
</View>

{/* 
<View style={{flex:1,marginBottom:10}}>
    <View style={{height:40}}>
    <Topbar title="Top Fashion Deals"  subtitle="View All"/>
    </View>
    <View style={{width:"100%",flexDirection:"row",flexWrap:"wrap"}}>
    <BrandProducts  title="Gucci Brand" img={require('../assets/product_collection/gucci_shoe1.jpeg')}  price="2000" />
    <BrandProducts  title="Tommy Brand" img={require('../assets/product_collection/tommy_shoe.jpg')}  price="4320" />
    <BrandProducts  title="Iphone Brand" img={require('../assets/product_collection/iphone2.png')}  price="6020.12" />
    <BrandProducts  title="Levi Brand" img={require('../assets/main_shoe2.jpg')}  price="1241.10" />
     </View>
</View> */}



<View  style={{flex:1}}>
    <CompanyBanner imgs={require('../assets/product_collection/animated_shoe.gif')} />
</View>






<View style={{flex:1,marginBottom:20}}>
    <View style={{height:40}}>
    <Topbar title="Gucci Shoe Shop"   subtitle="View All"/>
    </View>
    <View style={{width:"100%",flexDirection:"row",flexWrap:"wrap"}}>
        

    {
            
            gucci.map((products)=>{
    
    
             
            return (
                <BrandProducts  key={Math.random().toString()} totalproducts={products}   singlevalue={()=>singlevalue(products.companyname)}/>
          
                )
                
         
            
        })
        
        
        
        }






     
     </View>
</View>




<View style={{flex:1,marginBottom:20}}>
    <View style={{height:40}}>
    <Topbar title="Samsung Brand Shop"   subtitle="View All"/>
    </View>
    <View style={{width:"100%",flexDirection:"row",flexWrap:"wrap"}}>
 
    {
            
            samsung.map((products)=>{
    
    
             
            return (
                <BrandProducts  key={Math.random().toString()} totalproducts={products}   singlevalue={()=>singlevalue(products.companyname)}/>
          
                )
                
         
            
        })
        
        
        
        }





     </View>
</View>





<View style={{flex:1,marginBottom:20}}>
    <View style={{height:40}}>
    <Topbar title="Iphone Brand Shop"   subtitle="View All"/>
    </View>
    <View style={{width:"100%",flexDirection:"row",flexWrap:"wrap"}}>
 
    {
            
            iphone.map((products)=>{
    
    
             
            return (
                <BrandProducts  key={Math.random().toString()} totalproducts={products}   singlevalue={()=>singlevalue(products.companyname)}/>
          
                )
                
         
            
        })
        
        
        
        }



     </View>
</View>

 



{/* start testing tommy */}

<View  style={{flex:1}}>
    <CompanyBanner imgs={require('../assets/product_collection/animated_tommy_shirt.webp')} />
</View>
<View style={{flex:1,marginBottom:20}}>
    <View style={{height:40}}>
    <Topbar title="Tommy Brand Shop"   subtitle="View All"/>
    </View>
    <View style={{width:"100%",flexDirection:"row",flexWrap:"wrap"}}>
        
         {
            
            nike.map((products)=>{
    
    
             
            return (
                <BrandProducts  key={Math.random().toString()} totalproducts={products}   singlevalue={()=>singlevalue(products.companyname)}/>
          
                )
                
         
            
        })
        
        
        
        }


 
        
        
        
         </View>
</View>



{/* end testing nike */}







{/* start featured products */}
<View style={{width:"100%",marginTop:-15,height:100,justifyContent:"center",alignItems:"flex-start",backgroundColor:"#ffbe0b",justifyContent:"flex-start",paddingTop:10,letterSpacing:2}}>
    <Text style={{color:"#fff",width:'100%',paddingLeft:20,fontSize:19,fontWeight:"bold"}}>Feature Products</Text>
</View>
<View style={styles.catholder}>
 {/* <MainSingleProduct name="Beautiful Designers Cap"  price="10.11" discount="26.17"  image={require('../assets/product_collection/cap2.jpg')} companys="Nike Production"  /> */}
<FlatList 
// showsVerticalScrollIndicator={false}
 numColumns={2}
 keyExtractor={(item)=>item.id}
 data={TotalProducts}
 renderItem={({item})=>{
   return (
<MainSingleProduct name={item.title}  price={item.discountprice} discount={item.originalprice}  image={item.image} companys={`${item.companyname} products` }  singleclick={()=>singleclick(item)}  />
   )

 }}









/>




</View>
</ScrollView>

{/* end featured products */}

        </View>
    )
}





const styles = StyleSheet.create({
     catholder:{
               flex:1,
               flexDirection:"row",
               flexWrap:"wrap",
               marginLeft:15,
               marginTop:-55,
               marginBottom:100

     },
      container:{
            flex:1,
            height:"100%",
            width:"100%",
      },

topbar:{
    height:60,
    width:"100%",
    justifyContent:'space-between',
    alignItems:'center',
    borderWidth:0.5,
    borderColor:'silver',
    flexDirection:'row',
    backgroundColor:Colorwheel.primary


},

input:{
 width:"83%",
 height:"75%",
 backgroundColor:'#fff',
 borderRadius:5,
 paddingLeft:10,
 fontSize:17,
 marginLeft:5

},

icon:{
 width:"15%",
 height:"100%",
 justifyContent:"space-evenly",
 alignItems:'center'
}



})

