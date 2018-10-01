import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import Dimensions from 'Dimensions';
let { width, height, scale } = Dimensions.get('window');

export default class header extends Component {
  constructor(props){
    super(props);
    this.ref = {};
    this.state = [];
  }

  componentWillMount() {
  this._fetch();
  }

  _fetch = () => {
  fetch('https://akgalaxy-rss-reader.herokuapp.com/GetArticle?title=%E3%83%A9%E3%83%96%E3%83%A9%E3%82%A4%E3%83%96%EF%BC%81%E9%80%9A%E4%BF%A1%E3%80%9C%E3%83%A9%E3%83%96%E3%83%A9%E3%82%A4%E3%83%96%EF%BC%81%E3%81%BE%E3%81%A8%E3%82%81%E3%82%B5%E3%82%A4%E3%83%88%E3%80%9C')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.length);
      let data = [];
      let topicListViews = [];
      for(let i = 0; i < responseJson[0].length; i++){
        console.log(responseJson[0][i]);
        data.push({
          key:responseJson[0][i].day,
          title:responseJson[0][i].title,
          url:responseJson[0][i].link,
          image:responseJson[0][i].image ? responseJson[0][i].image[0]: "http://eventsnews.info/wp-content/uploads/2015/12/gazou03318.jpg",
        });
      }
      console.log(data);
     // this.setState({data: data});
     //           this.setState({topicListViews: topicListViews});
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
        <View style={styles.panel}>
          <Image
            style={styles.image}
            source={{uri: 'http://eventsnews.info/wp-content/uploads/2015/12/gazou03318.jpg'}}
          />
          <Text style={styles.title}>【ラブライブ！】ラブライブ楽曲のタイトルを漢字だけで表現するスレ</Text>
          <Text style={styles.date}>2018年10月1日 19:00</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  //flexDirection... 配置の位置の設定。横か縦か
  container:{

  },
  image:{
    width: width * 0.8,
    height: 200,
  },
  panel:{
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#d6d7da',
  },
  title:{
    paddingTop: 10,
    textAlign:'left',
    width:width * 0.9,
    fontWeight: '600',
    fontSize: 24
  },
  date:{
    paddingTop: 10,
    paddingBottom: 10,
    textAlign:'right',
    width:width * 0.9,
    fontWeight: '400',
    fontSize: 18,
    color:'#ababad'
  }
});
