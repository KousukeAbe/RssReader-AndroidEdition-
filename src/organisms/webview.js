import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  WebView,
  Dimensions,
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

export default class webview extends Component {
  constructor(props){
    super(props);
    this.props = props;
    webview.navigationOptions.title = this.props.navigation.state.params.url.title;
  }

  static navigationOptions = {
   title: 'webview',
  };
  render() {
    console.log(webview.navigationOptions);
    return (
      <View style={styles.container}>
        <WebView
          source={{uri: this.props.navigation.state.params.url.url}}
          style={styles.video}
          scalesPageToFit={true}
        />
      </View>
    );
  }
}
