import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({ 

    formContainer: {
      flex: 1,
    },

    preForm: {
      flex: 3.3
    },

    formSize: {
      left: 20,
      width : '85%',
      flex : 2.1,
     },

     btnGroup: {
      flex: 3,
      flexDirection: 'row',
      justifyContent: 'center'
     
    },

    btnStructure: {
      width: width/2.1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      height: height/15
    },

   
    itemLabelContent: {
      color: 'white'
    },

    eyeCon: {
      fontSize: 15, 
      color: 'white'
    },

  })
   
  export { styles } 