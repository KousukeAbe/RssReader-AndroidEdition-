import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Dimensions from 'Dimensions';
let { width, height, scale } = Dimensions.get('window');

import Page from './../components/page';
import Content from './ContentPage';
import List from './../components/list';

export default class header extends Component {
  constructor(props){
    super(props);
    this.ref = {};
    this.state = {data:[]}
    this.props = props;
  }

  componentWillReceiveProps(nextProps) {
    let data = [];
    for(let i = 0; i < nextProps.pro.length; i++){
      data.push({
        key: i,
        title:nextProps.pro[i].title,
        url:nextProps.pro[i].url,
        ondone:this.props.ondone,
        position:i,
        remove:this.props.remove
      });
    }
    this.setState({data: data});
  }

  render() {    
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>ふいいどたち</Text>
        </View>
        <FlatList
          style={styles.todoList}
          data={this.state.data}
          renderItem={({item}) => <List {...item}/>}
        />
        <View>
          <Text style={styles.title}>セッティング</Text>
        </View>
        <TouchableOpacity style={styles.panel} onPress={() => this.props.onadd("f")}>
          <Image
            style={styles.image}
            source={require('./add.png')}
          />
          <Text style={styles.tit}>ふいいど ついか</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.panel} onPress={() => this.props.onremove(this.state.data)}>
          <Image
            style={styles.image}
            source={require('./dust.png')}
          />
          <Text style={styles.tit}>ふいいど さくじょ</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //flexDirection... 配置の位置の設定。横か縦か
  container:{
    backgroundColor:"#393939",
    flex:1
  },
  title:{
    color:'white',
    fontSize:24,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 5,
  },
  image:{
    width: 30,
    height: 30,
    marginRight: 10,

  },
  panel:{
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#d6d7da',
  },
  tit:{
    textAlign:'left',
    width:width * 0.8,
    fontWeight: '400',
    fontSize: 16,
    color:'white'
  },
});
