import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  WebView,
  Dimensions,
  Text
} from 'react-native';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  video: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight,
  }
});

export default class feedadd extends Component {
  constructor(props){
    super(props);
    this.props = props;
  }

  static navigationOptions = {
   title: 'ふいいどあど',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>add</Text>
      </View>
    );
  }
}
