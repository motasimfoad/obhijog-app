import React, {Component} from 'react';
import { Label, Form, Item, Input, Text, View } from 'native-base';
import { withNavigation } from 'react-navigation';
import { styles } from '../SplashText/style';

const obj = {
	arr: [ 'John', 'Judy', 'Will', 'Sam', 'Joffrei' ]
};

function getName() {
	const index = Math.floor(Math.random() * obj.arr.length);
	return obj.arr[index];
}


class SplashText extends Component{

  constructor(props) {
		super(props);
		this.state = {
			content: ''
		};
	}

	callback = () => {
		this.setState({
			content: getName()
		});
	};

  render() {
    setTimeout(this.callback, 500);
    return (
          
            <Text style={styles.splashText}>
             {this.state.content}
            </Text>
          
    );
  }
}

export default withNavigation(SplashText);

