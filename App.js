import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button
} from 'react-native';
import Drawer from 'react-native-drawer';
import { createStackNavigator } from 'react-navigation';
import { StackActions } from 'react-navigation';


import Header from './src/organisms/header';
import Toolbar from './src/organisms/toolbar';
import Webview from './src/organisms/webview';
import Dock from './src/organisms/dock';
import Feedadd from './src/organisms/feedadd';
import Feedremove from './src/organisms/feedremove';

type Props = {};
class App extends Component<Props> {

  constructor(props){
    super(props);
    this.ref = {};
    this.state = {data:[]}
    this._fetch();

  }

  onremove = (index) => {
    const data = [].concat(this.state.data);
    data.splice(index, 1);

    this.setState({
      data
    });

    const popAction = StackActions.pop({
      n: 1,
    });

    this.props.navigation.dispatch(popAction);
    this.closeControlPanel();
  }

  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };

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
    }
    this.setState({data: data});
  })
  .catch((error) => {
    console.error(error);
  });
  }

  render() {
    return (
      <Drawer
        type="overlay"
        content={<Dock pro={this.state.data}
                ondone={(item)=>this.props.navigation.navigate('Detail', {url: item})}
                onadd={(item)=>this.props.navigation.navigate('Add', {data:item})}
                onremove={(item)=>this.props.navigation.navigate('Remove', {data:item})}
                remove={(item)=>this.onremove(item)}
                />}
        tapToClose={true}
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        ref={(ref) => this._drawer = ref}
        tweenHandler={ratio => ({
          mainOverlay: {
            opacity: ratio / 2,
          },
        })}
       >
      <View style={styles.container}>
        <Header openControlPanel={this.openControlPanel} />
        <Toolbar ondone={(item)=>this.props.navigation.navigate('Detail', {url: item})} pro={this.state.data}/>
      </View>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
  mainOverlay: {
       backgroundColor: 'black',
       opacity: 0,
     },
};

export default createStackNavigator({
  Home: {
    screen: App,
    navigationOptions: () => ({
           header: null
    }),
  },
  Detail:{
    screen: Webview,
    navigationOptions: () => ({
    headerTintColor: 'white',
headerStyle: { backgroundColor: '#008B7D' },
}),
  },
  Add:{
    screen: Feedadd
  },
  Remove:{
    screen: Feedremove
  }
},
  {
  initialRouteName: 'Home',
  }
);
