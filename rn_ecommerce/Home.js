import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet , View , ImageBackground , Text , Modal , TextInput , TouchableOpacity, Alert , KeyboardAvoidingView} from 'react-native';
import Buttonsingle from './components/Buttonsingle';
import { Colorwheel } from './components/Constantcolors';



export default Home = ({navigation}) => {
  const [model , setModel] = useState(false);


const connected = ()=>{
  setModel(true);

}
const pressing = ()=>{
  navigation.navigate('Generalproduct');
// Alert.alert(
//   "Info",
//   "This Section is still under construction",
//   [
//     {
//       text: "Cancel",
//       onPress: () => console.log("Cancel Pressed"),
//       style: "cancel"
//     },
//     { text: "OK", onPress: () => console.log("OK Pressed") }
//   ]
// );

}


  return (
    <View>
      <ImageBackground source={require('./assets/bg_shopping.jpg')} style={styles.bgstyles} resizeMode="cover" >
            <View style={styles.bgtitle}>

              <Text style={{fontSize:30,fontWeight:'bold',color:Colorwheel.primary,marginBottom:0}}>ShieldLife Shopping App</Text>
               <Text style={styles.subtitles}>your best shopping place</Text>
          
           </View>

<View style={styles.btnContainer}>

<View style={styles.btnsingle}>

   <Buttonsingle btntitle={'Login'} clicked={connected} bgcolors="#fff"  indcolor="#ffffff" bgcolors={Colorwheel.tertiary}/>
   <Buttonsingle btntitle={'View Products'} bgcolors={Colorwheel.secondary}   clicked={pressing} />
</View>


</View>

{/* start model */}
      <View style={styles.modelholder}>

   <Modal        
  visible={model} 
  animationType="slide" 
  style={{backgroundColor:'#fff',width:'100%',height:'100%'}}>
  
        <View>
             <View style={styles.modeltitle}>
                
              <Text style={{fontSize:30,fontWeight:'bold'}}>ShieldLife Login</Text>
             </View>
             <KeyboardAvoidingView padding="auto" style={{width:'100%',height:400,paddingHorizontal:20}}>
                 <TextInput style={{borderColor:'silver',borderWidth:0.8,height:60,paddingHorizontal:20,fontSize:15,borderRadius:5}} placeholderTextColor="silver" placeholder="Enter Email" keyboardType="email-address" />
                 <TextInput style={{borderColor:'silver',borderWidth:0.8,height:60,paddingHorizontal:20,fontSize:15,borderRadius:5,marginTop:15}} placeholderTextColor="silver" placeholder="Enter Phonenumber" keyboardType="phone-pad" />
                 <TextInput style={{borderColor:'silver',borderWidth:0.8,height:60,paddingHorizontal:20,fontSize:15,borderRadius:5,marginTop:15}} placeholderTextColor="silver" placeholder="Enter Password" keyboardType="default" />
                 <TextInput style={{borderColor:'silver',borderWidth:0.8,height:60,paddingHorizontal:20,fontSize:15,borderRadius:5,marginTop:15}} placeholderTextColor="silver" placeholder="Enter Confirm Password" keyboardType="default" />
                 <TextInput style={{borderColor:'silver',borderWidth:0.8,height:60,paddingHorizontal:20,fontSize:15,borderRadius:5,marginTop:15}} placeholderTextColor="silver" placeholder="Enter Secret Code eg (000-00-000-0000)" keyboardType="number-pad" />
                   <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',paddingTop:20}}>
                      
                               
                              <TouchableOpacity  style={{width:'45%',height:60,backgroundColor:'#90ccf4',justifyContent:'center',alignItems:'center'}}>
                                      <Text style={{color:'#fff',fontSize:19}}>Sign-in</Text>

                                </TouchableOpacity>
                         

                   
                               
                               <TouchableOpacity  style={{width:'45%',height:60,backgroundColor:'#f78888',justifyContent:'center',alignItems:'center'}} onPress={()=>setModel(false)}>
                                       <Text style={{color:'#fff',fontSize:19}}>Back</Text>
 
                                 </TouchableOpacity>
                        
                  </View>



               </KeyboardAvoidingView>


        </View>

   </Modal>

      </View>

      {/* end model  */}

      </ImageBackground>

   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
   
  },

modelholder:{
  width:'100%',
  height:'100%',
  backgroundColor:'white',



},

modeltitle:{
  width:'100%',
  height:100,
  marginBottom:30,
  justifyContent:'flex-end',
  alignItems:'center'
},



  btnsingle:{
    width:'100%',
    height:"19%",
    justifyContent:'center',
    alignItems:'flex-end',
    flexDirection:'column'
  
  },
  btnContainer :{
    height:'90%',
    width:'100%',
    justifyContent:'center',
    alignItems:'flex-end',
    paddingHorizontal:10



  },

  title:{
    color:'gold',
    fontSize:23,
    letterSpacing:1

  },
subtitles:{
    fontSize:19,
    color:'#f172a1',
    fontWeight:'600'
  
},
  titleholder:{
    width:'100%',
    height:100 ,
     justifyContent:'center' ,
      alignItems:'center',
      backgroundColor:'green',
      paddingTop:30,

  },
  seccontainer :{
     width:'100%',
     height:200,
     flexDirection:'column',

  },

  button: {
  
  },
  bgstyles:{
    width:'100%',
    height:'100%',

   },
bgtitle:{
  width:'100%',
  height:300,
  justifyContent:'center',
  alignItems:'center'

}

});
