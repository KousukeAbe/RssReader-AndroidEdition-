import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  Text
} from 'react-native';

let { width, height, scale } = Dimensions.get('window');
import List from './../components/removelist';


export default class feedremove extends Component {
  constructor(props){
    super(props);
    this.props = props;
  }

  static navigationOptions = {
   title: 'ふいいど さくじょ',
  };
  render() {
    return (
      <View style={styles.container}>
      <FlatList
        style={styles.todoList}
        data={this.props.navigation.state.params.data}
        renderItem={({item}) => <List {...item}/>}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //flexDirection... 配置の位置の設定。横か縦か
  container:{
    backgroundColor:"white",
    flex:1
  },
});
