import React, {Component} from 'react';
import { Label, Form, Item, Input, Text, Icon } from 'native-base';
import { withNavigation } from 'react-navigation';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from '../AuthForm/style';
import { View } from 'react-native';

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

            {/* <View style={styles.btnGroup}>
               <Button
                  buttonStyle={styles.demoBtn}
                  ViewComponent={LinearGradient} // Don't forget this!
                  buttons={'hello'}
                  linearGradientProps={{
                    colors: ['red', 'green'],
                    start: { x: 0, y: 0.5 },
                    end: { x: 1, y: 0.5 },
                  }}
                />
               <Button
                buttonStyle={styles.demoBtn}
                ViewComponent={LinearGradient} // Don't forget this!
                buttons={'hello'}
                linearGradientProps={{
                  colors: ['red', 'green'],
                  start: { x: 0, y: 0.5 },
                  end: { x: 1, y: 0.5 },
                }}
              />
            </View> */}


           

            {/* <Button onPress={() => this.props.navigation.navigate('Dashboard')}>
            <Text>Login </Text>
            </Button>
            <Button>
            <Text>Register</Text>
            </Button> */}
          
          </Form>
    );
  }
}

export default withNavigation(AuthForm);

