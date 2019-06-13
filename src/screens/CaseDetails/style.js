import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({ 

    container: {                         
      flex: 1,
      backgroundColor: '#2B2B2B'
    },

    topSearch: {
     top: height/25,
     backgroundColor: 'green',
     flex: 0.5,
    },

    caseBtn: {
      backgroundColor: '#058794',
      width: 200
    },

    searchResultContainer: {
      backgroundColor: 'red',
      flex: 4,
    },

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