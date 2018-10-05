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
    return (
        <View style={styles.panel}>
          <Image
            style={styles.image}
            source={{uri: "https://www.google.com/s2/favicons?domain=" + props.url}}
          />
          <Text style={styles.title}>{props.title}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => props.remove(props.position)}
          >
            <Text style={styles.textStyle}>削除</Text>
          </TouchableOpacity>
        </View>
    );
  }

const styles = StyleSheet.create({
  //flexDirection... 配置の位置の設定。横か縦か
  container:{

  },
  image:{
    width: width * 0.1,
    height: 50,
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
  title:{
    textAlign:'left',
    width:width * 0.6,
    fontWeight: '400',
    fontSize: 16,
    color:'black'
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#E60000',
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    color: 'white',
  },
});

export default Page;
