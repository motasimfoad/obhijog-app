import React, {Component} from 'react';
import {BackHandler} from 'react-native';
import { Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { styles } from '../Swiper/style';
import Auth from '../Auth';
import MainSearch from '../MainSearch';

export default class SwiperPage extends Component{
      
      componentDidMount() {
          BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
      }

      componentWillUnmount() {
          BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
      }

      handleBackButton() {
          return true;
      }

  render() {
    return (
        <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
        <MainSearch />
        </View>
        <View style={styles.slide2}>
        <Auth />
        </View>
        </Swiper>
    );
  }
}

