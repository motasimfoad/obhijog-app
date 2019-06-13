import React, {Component} from 'react';
import { styles } from '../Dashboard/style';
import { View } from 'react-native';
import { Button, Text, Icon } from 'native-base';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';


class Dashboard extends Component{
  render() {
    return (
      <View style={styles.container}>
      <View>
            <Button style={styles.caseBtn} rounded>
              <Icon name='warning' />
              <Text>Complain</Text>
            </Button>
            <Button style={styles.complainBtn} onPress={() => this.props.navigation.navigate('Search')} rounded>
              <Icon name='cog' />
              <Text>Case</Text>
            </Button>
      </View>
      </View>
    );
  }
}

export default withNavigation(Dashboard);