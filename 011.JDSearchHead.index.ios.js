/**
 * 010.SinaOAuth
 * 新浪登录认证
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput
} from 'react-native';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      code: null,
    };
  }

  // 注意: 带参数回调函数的使用navChange
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./img/logo.png')}>
        </Image>
        <View style={styles.searchContainer}>
          <Image style={styles.search} source={require('./img/search.png')} />
          <TextInput style={styles.input} placeholder={'搜索京东商品/店铺'} />
          <Image style={styles.snd} source={require('./img/snd.png')} />
        </View>
        <Image style={styles.go} source={require('./img/go.png')}>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    height: 48,
    backgroundColor: '#d74047',
    alignItems: 'center',
  },
  logo: {
    marginLeft: 10,
    width: 64,
    height: 24,
    resizeMode: 'stretch',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginLeft: 8,
    marginRight: 8,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
  },
  go: {
    marginRight: 10,
    width: 27,
    height: 27,
    resizeMode: 'stretch',
  },
  search: {
    marginLeft: 6,
    marginRight: 6,
    width: 17,
    height: 17,
    resizeMode: 'stretch',
  },
  input: {
    marginTop: 5,
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    height: 20,
  },
  snd: {
    height:20,
    width: 15,
    marginLeft: 6,
    marginRight: 6,
    resizeMode: 'stretch',
  }

});

AppRegistry.registerComponent('AwesomeProject', () => App);
