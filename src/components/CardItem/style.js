import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({ 

    cardContainer: {
      backgroundColor: 'yellow',
      height: height/7,
      flexDirection: 'row'

    },

    leftCardSection: {
      backgroundColor: 'green',
      height: 100,
      width: width/4,
      marginRight: 3,
      borderRadius: width*0.03
    },

    rightCardSection: {
      backgroundColor: 'red',
      height: 100,
      width: width/1.55,
      marginLeft: 3,
      borderRadius: width*0.03
    }

  })
   
  export { styles } 