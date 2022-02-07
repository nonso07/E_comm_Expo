import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import { StyleSheet , View , Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import MainPage from './components/MainPage';
import IndividualProd from './components/IndividualProd';
import { Header } from 'react-native/Libraries/NewAppScreen';
import GeneralProducd from './components/GeneralProducd';
import CompanyGroup from './components/CompanyGroup';
import CartSection from './components/CartSection';



export default function App() {
 
  const {Navigator , Screen}  = createStackNavigator();



  return (
    <NavigationContainer>
        <Navigator initialRouteName="Home" >
        <Screen name="Home" component={Home}  options={{headerShown: false}} />
        <Screen name="Generalproduct" component={GeneralProducd}
         options={{headerShown: false}}
        
        />
           <Screen name="Company" component={CompanyGroup} 
           options={{headerShown: false}}
           />     
              <Screen name="MainPage" component={MainPage} />
              <Screen name="singleproduct" component={IndividualProd}
              options={{headerShown: false}}
              />     
            <Screen name="Cart" component={CartSection} />        
        </Navigator>

      {/* <Home /> */}
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({


});
