/**
 * 模拟携程的九宫格布局
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  PixelRatio,
  Animated
} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.flex}>
        <View style={styles.container}>
          <View style={styles.item}>
            <View style={[styles.center, styles.flex]}>
              <Text style={styles.font}>酒店</Text>
            </View>
          </View>

          <View style={[styles.item, styles.lineLeftRight]}>
            <View style={[styles.center, styles.flex, styles.lineCenter]}>
              <Text style={styles.font}>海外酒店</Text>
            </View>
            <View style={[styles.center, styles.flex]}>
              <Text style={styles.font}>特惠酒店</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={[styles.center, styles.flex, styles.lineCenter]}>
              <Text style={styles.font}>团购</Text>
            </View>
            <View style={[styles.center, styles.flex]}>
              <Text style={styles.font}>客栈.公寓</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    height: 84,
    padding: 2,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#FF0067',
  },
  item: {
    flex: 1,
    height: 80,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex: {
    flex: 1,
  },
  font: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
  lineLeftRight: {
    borderColor: '#FFF',
    borderLeftWidth: 1 / PixelRatio.get(),
    borderRightWidth: 1 / PixelRatio.get(),
  },
  lineCenter: {
    borderColor: '#FFF',
    borderBottomWidth: 1 / PixelRatio.get(),
  }
});

AppRegistry.registerComponent('AwesomeProject', () => App);
