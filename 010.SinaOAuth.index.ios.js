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
  WebView,
} from 'react-native';

var appKey = '4263807830';
var callback = 'http://127.0.0.1:3000';
var url = 'https://api.weibo.com/oauth2/authorize?client_id=' + appKey + '&redirect_uri=' + callback;

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
      !this.state.code ?
        <WebView
          style={styles.flex}
          source= {{ uri: url }}
          bounces={false}
          onNavigationStateChange={ ret => this.navChange(ret)}
          >
        </WebView >
        :
        <Text>{this.state.code}</Text>
    );
  }

  // 登录授权回调
  navChange(ret) {
    if (ret.url.indexOf(callback + "/?code=") > -1) {
      var code = ret.url.split('?code=')[1];

      alert(code);

      // TODO: 使用ret_code交换accessToken
      this.setState({
        code: code,
      });
    }
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => App);
