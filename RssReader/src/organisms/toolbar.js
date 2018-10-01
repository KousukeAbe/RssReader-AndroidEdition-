import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView
} from 'react-native';

import Content from './ContentPage';


import ScrollableTabView, {ScrollableTabBar, } from 'react-native-scrollable-tab-view';

export default class toolbar extends Component {
  constructor(props){
    super(props);
    this.ref = {};
    this.state = { showText: ["uho", "uhi", "uhu", "uho"], data:[], topicListViews:[<Text tabLabel={"fd"}>fs</Text>]}

  }

  componentWillMount() {
  this._fetch();
  }

  _fetch = () => {
  fetch('https://akgalaxy-rss-reader.herokuapp.com/GetRSSList')
    .then((response) => response.json())
    .then((responseJson) => {
      let data = [];
      let topicListViews = [];
      for(let i = 0; i < responseJson.length; i++){
        data.push({
          key:i,
          title:responseJson[i][0],
          url:responseJson[i][1]
        });
        topicListViews.push(
          <Content
               tabLabel={responseJson[i][0]}
            />
        );
      }
      console.log(topicListViews);
     this.setState({data: data});
               this.setState({topicListViews: topicListViews});
    })
    .catch((error) => {
      console.error(error);
    });
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

    console.log(this.state.topicListViews);
    return (
      <ScrollableTabView
        initialPage={0}
        style={styles.toolbar}
        tabBarBackgroundColor={"#008d7d"}
        tabBarInactiveTextColor={"white"}
        tabBarActiveTextColor={"white"}
        renderTabBar={() => <ScrollableTabBar />}
      >
      {this.state.topicListViews}
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
