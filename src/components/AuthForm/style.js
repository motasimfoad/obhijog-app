import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({ 

    demoBtn: {
      height: height/19,
      width : width/2,
      borderRadius: width/2
    },

    itemLabelContent: {
      color: 'white'
    },

    eyeCon: {
      fontSize: 15, 
      color: 'white'
    },

    formSize: {
     left: 20,
     width : '85%',
     
    },

    formContainer: {
   
     },

    btnGroup: {
      top: 50,
      backgroundColor: 'yellow'
    }

  })
   
  export { styles } 