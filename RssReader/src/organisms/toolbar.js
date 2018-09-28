import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView
} from 'react-native';

import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

export default class toolbar extends Component {
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
    //親から関数を受け取る
    // const {
    //   onPress,
    // } = this.props;

    return (
      <ScrollableTabView
        initialPage={0}
        style={styles.toolbar}
        tabBarBackgroundColor={"#008d7d"}
        tabBarInactiveTextColor={"white"}
        tabBarActiveTextColor={"white"}
        renderTabBar={() => <DefaultTabBar />}
      >
        <Text tabLabel='Tab #1'>My</Text>
        <Text tabLabel='Tab #2'>favorite</Text>
        <Text tabLabel='Tab #3'>project</Text>
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  //flexDirection... 配置の位置の設定。横か縦か
  container: {
    flexDirection: 'row',
    padding: 2,
  },
  brawer: {
    flex: 1,
    marginLeft: 5,
    fontSize: 30,
  },
  title: {
    flex: 9,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    textAlign: 'center'
  },
  todobar:{
    backgroundColor: '#534264'
  },
});
