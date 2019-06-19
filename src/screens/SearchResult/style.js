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
    // backgroundColor: 'green',
     flex: 0.5,
    },

    caseBtn: {
      backgroundColor: '#058794',
      width: 200
    },

    searchResultContainer: {
    //  backgroundColor: 'red',
      flex: 4,
    },
})
   
  export { styles } 