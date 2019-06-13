import React, {Component} from 'react';
import { Label, Form, Item, Input, Text, Icon, Button } from 'native-base';
import { withNavigation } from 'react-navigation';
// import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from '../AuthForm/style';
import { View, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

class AuthForm extends Component{
  
      constructor(props) {
        super(props);

        this.state = {
          hidden: true
        };

        this.toggleShow = this.toggleShow.bind(this);
       
      }

      toggleShow() {
        this.setState({ hidden: !this.state.hidden });
      }

  render() {
    return (
          <Form style={styles.formContainer}>

            <View style={styles.preForm}>
              {/* Still not determined element */}
            </View>

            <View style={styles.formSize}>
            <Item floatingLabel >
              <Label style={styles.itemLabelContent}>Username</Label>
              <Input style={styles.itemLabelContent}/>
            </Item>
            <Item floatingLabel >
              <Label style={styles.itemLabelContent}>Password</Label>
              <Input secureTextEntry={this.state.hidden}  style={styles.itemLabelContent}/>
              {/* <Icon name="eye" style={styles.eyeCon}/> */}
            </Item>
            </View>

            <View style={styles.btnGroup}>
           
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Dashboard')}>
                <LinearGradient
                colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                style={styles.btnStructure} > 
                <Text style={{ color: '#ffffff'}}>Register</Text>
                </LinearGradient>
                </TouchableOpacity>
           
                <TouchableOpacity>
                <LinearGradient
                colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                style={styles.btnStructure} > 
                <Text style={{ color: '#ffffff'}}>Login</Text>
                </LinearGradient>
                </TouchableOpacity>
            
            </View>
          </Form>
    );
  }
}

export default withNavigation(AuthForm);

