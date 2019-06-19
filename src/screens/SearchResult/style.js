import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({ 

    container: {                         
      flex: 1,
      backgroundColor: '#2B2B2B'
    },

    topSearch: {
      flexDirection: 'row',
      flex: 0.5,
     justifyContent: 'center',
    },

    caseBtn: {
      backgroundColor: '#00ac65',
      width: 200,
      top: height/22,
    },

    searchResultContainer: {
      flex: 4,
    },

    scrollableModal: {
      backgroundColor: 'red',
      height: height/1.2
    },

    modalTopSearch: {
      flexDirection: 'row',
      flex: 0.5,
      backgroundColor:'green',
      justifyContent: 'center',
     
    },

    scrollableModalContent1: {
     flex: 4,
     backgroundColor: 'blue',
    },

    scrollableModalContent2: {
      flex: 1,
      backgroundColor: 'yellow',
    },

    modalCaseBtn: {
      backgroundColor: '#00ac65',
      width: 200,
      top: height/100,
    },
})
   
  export { styles } 