import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({ 

    container: {                         
      flex: 1,
     
      backgroundColor: '#2B2B2B'
    },

    firstHalf: {
     flex: 4,
     alignItems: 'center',
     justifyContent: 'center',
    },

    secondHalf: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    icon: {
        height: 200,
        width: 200
    }
  })
   
  export { styles } 