import React, {Component} from 'react';
import { styles } from '../CardItem/style';
import { View } from 'react-native';
import { Text, Card, CardItem } from 'native-base';
import { withNavigation } from 'react-navigation';


class CardItems extends Component{
  render() {
    return (
     
           <Card >
              <CardItem style={styles.cardContainer}>
                <View style={styles.leftCardSection}>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </View>
                <View style={styles.rightCardSection}>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </View>
              </CardItem>
            </Card>
          
    );
  }
}

export default withNavigation(CardItems);