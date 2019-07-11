import React, {Component} from 'react';
import { styles } from '../MainSearch/style';
import { View } from 'react-native';
import { Button, Text, Icon } from 'native-base';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';


class MainSearch extends Component{
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.heading}>
            <Button style={styles.caseBtn} onPress={() => this.props.navigation.navigate('SearchResult')} rounded>
              <Icon name='search' />
              <Text>Search</Text>
            </Button>
      </View>
      <View style={styles.body}>
            <Button style={styles.caseBtn} onPress={() => this.props.navigation.navigate('SearchResult')} rounded>
              <Icon name='search' />
              <Text>Search</Text>
            </Button>
      </View>
      </View>
    );
  }
}

export default withNavigation(MainSearch);