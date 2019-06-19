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
                <Text style={styles.scrollableModalText1}>You can scroll me up! 👆</Text>
              </View>
              <View style={styles.scrollableModalContent2}>
                <Text style={styles.scrollableModalText2}>Same here as well! ☝</Text>
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