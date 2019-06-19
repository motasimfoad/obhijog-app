import React, {Component} from 'react';
import { styles } from '../SearchResult/style';
import { View, ScrollView } from 'react-native';
import { Button, Text, Icon, Card, CardItem } from 'native-base';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import CardItems from '../../components/CardItem/';
import Modal from "react-native-modal";


class SearchResult extends Component{

  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topSearch}>
              <Button style={styles.caseBtn} onPress={this.toggleModal} rounded>
                <Icon name='search' />
                <Text>Search </Text>
              </Button>
        </View>
        <View style={styles.searchResultContainer}>
           <ScrollView>
            <CardItems onPress={() => this.props.navigation.navigate('CaseDetails')} />
            <CardItems onPress={() => this.props.navigation.navigate('CaseDetails')} />
            <CardItems onPress={() => this.props.navigation.navigate('CaseDetails')} />
            <CardItems onPress={() => this.props.navigation.navigate('CaseDetails')} />
            <CardItems onPress={() => this.props.navigation.navigate('CaseDetails')} />
            <CardItems onPress={() => this.props.navigation.navigate('CaseDetails')} />
            <CardItems onPress={() => this.props.navigation.navigate('CaseDetails')} />
            <CardItems onPress={() => this.props.navigation.navigate('CaseDetails')} />
            <CardItems onPress={() => this.props.navigation.navigate('CaseDetails')} />

            
            <Modal
                isVisible={this.state.isModalVisible}
                onSwipeComplete={() => this.setState({ isModalVisible: false })}
                swipeDirection="down"
                scrollTo={this.handleScrollTo}
                scrollOffset={this.state.scrollOffset}
                scrollOffsetMax={400 - 300} // content height - ScrollView height
                style={styles.bottomModal}
              >
               <View style={styles.scrollableModal}>
            
                  <View style={styles.modalTopSearch}>
                    <Button style={styles.modalCaseBtn} onPress={this.toggleModal} rounded>
                      <Icon name='search' />
                      <Text>Search</Text>
                    </Button>
                  </View>


              <View style={styles.scrollableModalContent1}>
                <View style={styles.scrollableModalTextHolder}>
                <Text style={styles.scrollableModalText1}>Swipe down to close</Text>
                <Text style={styles.scrollableModalText2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                </View>
               
              </View>
              <View style={styles.scrollableModalContent2}>
                <View style={styles.left}>
                  <Text style={styles.leftCardSectionHeader}>Case No.</Text>
                  <Text style={styles.leftCardSectionHeader2}>420</Text>
                </View>
                <View style={styles.right}>
                  <Text style={styles.leftCardSectionNote} >Fine </Text>
                  <Text style={styles.leftCardSectionNote2} > 350 </Text>
                </View>
                 
              </View>
             
           
          </View>
          </Modal>
           
          </ScrollView>
           </View>
      </View>
    );
  }
}

export default withNavigation(SearchResult);