/**
 * 003.网易新闻
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  NavigatorIOS,
  ScrollView,
  Text,
} from 'react-native';

// 游轮列表
class List extends React.Component {
  render() {
    return (
      <ScrollView style={styles.flex}>
        <Text style={styles.list_item} onPress={this.goTo.bind(this)}>✨ 豪华游轮济州岛</Text>
        <Text style={styles.list_item} onPress={this.goTo.bind(this)}>✨ 豪华游轮太平岛</Text>
        <Text style={styles.list_item} onPress={this.goTo.bind(this)}>✨ 豪华游轮钓鱼岛</Text>
      </ScrollView>
    );
  }

  goTo() {
    this.props.navigator.push({
      component: Detail,
      title: '游轮详情',
      rightButtonTitle: '购物车',
      onRightButtonPress: function() {
        alert('进入购物车!');
      }
    });
  }
}

// 游轮详细信息
class Detail extends React.Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.detail_text}>详情页面</Text>
        <Text style={styles.detail_text}>详情信息介绍</Text>
      </ScrollView>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.flex}
        initialRoute={{
          component: List,
          title: '游轮',
          passProps: {},
        }}
        >

      </NavigatorIOS>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  list_item: {
    fontSize: 16,
    color: 'red',
  },
  detail_text: {
    fontSize: 18,
    color: 'blue',
  }
});

AppRegistry.registerComponent('AwesomeProject', () => App);
