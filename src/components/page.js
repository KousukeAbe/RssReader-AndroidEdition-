import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import Dimensions from 'Dimensions';
let { width, height, scale } = Dimensions.get('window');

const Page = (props) => {
    let uhp = new Date(props.date);
    let pass = props.image.match(/(http(s)?:\/\/[a-zA-Z0-9-.!'()*;/?:@&=+$,%#_]+)/gi);
    let url = {url: props.url, title: props.title}
    return (
        <TouchableOpacity style={styles.panel} onPress={() => props.ondone(url)}>
          <Image
            style={styles.image}
            source={{uri: pass[0]}}
          />
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.date}>{uhp.getFullYear()}年{uhp.getMonth() + 1}月{uhp.getDate() + 1}日 {uhp.getHours()}:{uhp.getMinutes() < 10 ? "0" + uhp.getMinutes() : uhp.getMinutes()}</Text>
        </TouchableOpacity>
    );
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
    backgroundColor:'white'
  },
  title:{
    paddingTop: 10,
    textAlign:'left',
    width:width * 0.9,
    fontWeight: '600',
    fontSize: 24,
    color:'#000000'
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

export default Page;
