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
      backgroundColor: '#2B2B2B',
      height: height/1.2
    },

    modalTopSearch: {
      flexDirection: 'row',
      flex: 0.5,
      justifyContent: 'center',
     },

    scrollableModalContent1: {
      flex: 3,
      backgroundColor: '#515151',
      borderRadius: width/10,
      marginRight: 10,
      marginLeft: 10,
      alignItems: 'center',
    },

    scrollableModalContent2: {
      flex: 0.8,
      flexDirection: 'row',
      backgroundColor: '#2B2B2B',
      alignItems: 'center',
      justifyContent: 'center'
    },

    modalCaseBtn: {
      backgroundColor: '#00ac65',
      width: 200,
      top: height/100,
    },

    scrollableModalText1: {
     color: 'white',
     fontSize: 30,
     fontWeight: '400',
    },

    scrollableModalText2: {
     color: 'white',
     fontSize: 20,
     fontWeight: '300',
     paddingTop: 4,
    },

    scrollableModalTextHolder: {
      top: height/60,
      width: width/1.3,
    },

    leftCardSectionHeader: {
      color: '#ebaf3c',
      fontSize: 25,
      fontWeight: '300',
    },

    leftCardSectionNote: {
      color: '#e9662c',
      fontSize: 25,
      fontWeight: '300',
    },

    leftCardSectionHeader2: {
      color: '#ebaf3c',
      fontSize: 25,
      fontWeight: '600',
    },

    leftCardSectionNote2: {
      color: '#e9662c',
      fontSize: 25,
      fontWeight: '600',
    },

    left: {
      // backgroundColor: 'red',
      marginRight: 20,
      alignItems: 'center',
    },

    right: {
      // backgroundColor: 'green',
      marginLeft: 20,
      alignItems: 'center',
    }
})
   
  export { styles } 