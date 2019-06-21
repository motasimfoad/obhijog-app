import React, {Component} from 'react';
import { Label, Form, Item, Input, Text, Icon, Button } from 'native-base';
import { withNavigation } from 'react-navigation';
// import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from '../ModalBody/style';
import { View, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

class ModalBody extends Component{
  
  render() {
    return (
     <View style={styles.container}>
      <View style={styles.scrollableModalContent1}>
        <View style={styles.scrollableModalTextHolder}>
        <Text style={styles.scrollableModalText1}>Swipe down to close</Text>
        <Text style={styles.scrollableModalText2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </View>
      
      </View>
      <View style={styles.scrollableModalContent2}>
        <View style={styles.left}>
          <Text style={styles.leftCardSectionHeader}>Case No.</Text>
          <Text style={styles.leftCardSectionHeader2}>420</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.leftCardSectionNote} >Fine </Text>
          <Text style={styles.leftCardSectionNote2} > 350 </Text>
        </View>
      </View>
     </View>
            
     


     
    
    );
  }
}

export default withNavigation(ModalBody);

