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
    this.state = { showText: ["uho", "uhi", "uhu", "uho"], data:[], topicListViews:[<View tabLabel={"Loading..."}></View>]}
    this.props = props;
  }

  componentWillReceiveProps(nextProps) {
    let topicListViews = [];
    for(let i = 0; i < nextProps.pro.length; i++){

      topicListViews.push(
        <Content
          tabLabel={nextProps.pro[i].title}
          url={nextProps.pro[i].url}
          ondone={nextProps.ondone}
        />
      );
    }
    this.setState({topicListViews: topicListViews});
  }

  render() {
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
