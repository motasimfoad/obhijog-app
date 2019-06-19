import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({ 

    cardContainer: {
      backgroundColor: '#2B2B2B',
      height: height/7,
      flexDirection: 'row'

    },

    leftCardSection: {
      backgroundColor: '#2B2B2B',
      height: 100,
      width: width/4,
      marginRight: 3,
      borderRadius: width*0.03,
      alignItems: 'center',
      justifyContent: 'center'
    },

    leftCardSectionHeader: {
      color: '#ebaf3c',
      fontSize: 17,
      fontWeight: '300',
    },

    leftCardSectionNote: {
      color: '#e9662c',
      fontSize: 17,
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


    rightCardSection: {
      backgroundColor: '#515151',
      height: 100,
      width: width/1.55,
      marginLeft: 3,
      borderRadius: width*0.03,
      alignItems: 'center',
      justifyContent: 'center'
    },

    rightCardSectionHeader: {
      color: 'white',
      fontWeight: '600',
    }

  })
   
  export { styles } 