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
                  <Text style={styles.leftCardSectionHeader}>Case No.</Text>
                  <Text style={styles.leftCardSectionHeader2}>{this.props.caseNo}</Text>
                  <Text style={styles.leftCardSectionNote} >Fine </Text>
                  <Text style={styles.leftCardSectionNote2} > {this.props.fine} </Text>
                </View>
                <View style={styles.rightCardSection}>
                  <Text style={styles.rightCardSectionHeader}>{this.props.heading}</Text>
                </View>
              </CardItem>
            </Card>
          
    );
  }
}

export default withNavigation(CardItems);