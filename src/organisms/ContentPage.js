import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList
} from 'react-native';
import Page from './../components/page';

export default class header extends Component {
  constructor(props){
    super(props);
    this.ref = {};
    this.state = [];
    this.props = props;
  }

  componentWillMount() {
  this._fetch();
  }

  _fetch = () => {
  fetch('https://akgalaxy-rss-reader.herokuapp.com/GetArticle?title=' + decodeURI(this.props.tabLabel))
    .then((response) => response.json())
    .then((responseJson) => {
      let data = [];
      let topicListViews = [];
      for(let i = 0; i < responseJson[0].length; i++){
        data.push({
          key:responseJson[0][i].day,
          title:responseJson[0][i].title,
          url:responseJson[0][i].link,
          date:responseJson[0][i].day,
          image:responseJson[0][i].image ? responseJson[0][i].image[0]: "http://eventsnews.info/wp-content/uploads/2015/12/gazou03318.jpg",
          ondone:this.props.ondone
        });
      }
      this.setState({data: data});
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
    return (
      <FlatList
        style={styles.todoList}
        data={this.state.data}
        renderItem={({item}) => <Page {...item}/>}
      />
    );
  }
}

const styles = StyleSheet.create({
  //flexDirection... 配置の位置の設定。横か縦か
});
