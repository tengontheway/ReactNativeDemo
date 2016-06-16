/**
 * 009.WebView
 * 应用中嵌入webview
 * 参考链接:http://reactnative.cn/docs/0.27/webview.html#content
 */

import React, { Component } from 'react';
import Dimensions from 'Dimensions';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image,
  WebView,
} from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showPage: true,    //显示页面还是图片
    };
  }

 // 加载www页面
  baiduTemplate() {
    return (
      <View style={styles.flex}>
        <WebView
          bounces={true}
          source={{ uri: "http://www.baidu.com" }}
          style={styles.web}
          >
        </WebView>
      </View>
    );
  }

  // 嵌入html代码，去掉留白显示图片
  imageTemplate() {
    return (
      <View style={styles.flex}>
        <WebView
          contentInset={{ left: -10, top: -28 }}
          scrollEnabled={false}
          source={{ html: '<div><img src="http://vczero.github.io/ctrip/star_page.jpg".></div>' }}
          style={styles.web}
          >
        </WebView>
      </View>
    );
  }

  render() {
    return this.state.showPage ? this.baiduTemplate() : this.imageTemplate();
  }
}


const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  web: {
    width: width,
    height: height,
  }
});

AppRegistry.registerComponent('AwesomeProject', () => App);
