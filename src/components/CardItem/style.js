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
      color: 'yellow',
      fontSize: 18
    },

    leftCardSectionNote: {
      color: 'red'
    },

    leftCardSectionHeader2: {
      color: 'yellow',
      fontSize: 25
    },

    leftCardSectionNote2: {
      color: 'red'
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