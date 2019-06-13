import React, {Component} from 'react';
import AuthForm from '../../components/AuthForm';
import {BackHandler, View} from 'react-native';
import { styles } from '../Auth/style';

export default class Auth extends Component{
      
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
        <View style={styles.container}>
            <AuthForm />
        </View>
     
    );
  }
}

