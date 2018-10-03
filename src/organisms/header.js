import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ToolbarAndroid,
} from 'react-native';

export default class header extends Component {
  constructor(props){
    super(props);
    this.ref = {};
  }

  _onPress = () => {
    //refはそこコンポーネントに関する情報を取得することが出来る.HTMLのIDに似ている
    //親にrefの中身を投げる
    this.props.onPress(this.ref._lastNativeText);
    //refの中身を初期化
    this.ref.setNativeProps({ text: ''});
  }

  render() {

    return (
      <ToolbarAndroid
        style={styles.toolbar}
        titleColor={"white"}
        navIcon={require('./menu.png')}
        title="   ふいいどりいだあ"
        onIconClicked={this.props.openControlPanel}
      />
    );
  }
}

const styles = StyleSheet.create({
  //flexDirection... 配置の位置の設定。横か縦か
  container: {
    flexDirection: 'row',
    padding: 2,
  },
  toolbar:{
    textAlign: 'center',
    backgroundColor: "#008B7D",
    height: 56
  },
});
