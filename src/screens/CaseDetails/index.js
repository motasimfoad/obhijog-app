import React, {Component} from 'react';
import { styles } from '../SearchResult/style';
import { View, ScrollView } from 'react-native';
import { Button, Text, Icon, Card, CardItem } from 'native-base';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import CardItems from '../../components/CardItem'


class CaseDetails extends Component{
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topSearch}>
              <Button style={styles.caseBtn} rounded>
                <Icon name='search' />
                <Text>Details case result</Text>
              </Button>
        </View>
        
      </View>
    );
  }
}

export default withNavigation(CaseDetails);