import React, {Component} from 'react';
import {View, Image} from 'react-native';
import { styles } from '../Splash/style';
import Icon from '../../assets/images/icon.png';
import SplashText from '../../components/SplashText'

export default class Splash extends Component{

componentDidMount(){
    setTimeout(() => this.props.navigation.navigate('SwiperPage'),3000) 
}
 
render() {
    return (
      <View style={styles.container}>

        <View style={styles.firstHalf}>
        <Image style={styles.icon} source={Icon} />
        </View>

        <View style={styles.secondHalf}>
        <SplashText />
        </View>
       
        
      </View>
    );
  }
}

