import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import Drawer from 'react-native-drawer'

import Header from './src/organisms/header';
import Toolbar from './src/organisms/toolbar';

type Props = {};
export default class App extends Component<Props> {

  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };

  render() {
    return (
      <Drawer
        type="overlay"
        content={<Header />}
        tapToClose={true}
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        ref={(ref) => this._drawer = ref}
        tweenHandler={(ratio) => ({
        main: { opacity:(2-ratio)/2 }
      })}
       >
      <View style={styles.container}>
        <StatusBar backgroundColor={"#006E60"} />
        <Header openControlPanel={this.openControlPanel}/>
        <Toolbar />
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
};
