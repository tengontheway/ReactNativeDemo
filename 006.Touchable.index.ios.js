/**
 * 006.TouchableHighlight/TouchableOpacity
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  show(text) {
    alert(text);
  }

  touchableHighlight() {
    return (
      <View style={[styles.flex]}>
        <View>
          <TouchableHighlight
            onPress={this.show.bind(this, "ReactNative入门") }
            underlayColor="#E1F6EF"
            >
            <Text style={styles.item}>ReactNative入门</Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={this.show.bind(this, "图灵出版社") }
            underlayColor="#E1F6EF"
            >
            <Text style={styles.item}>图灵出版社</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  touchableOpacity() {
    return (
      <View style={[styles.flex]}>
        <View>
          <TouchableOpacity
            onPress={this.show.bind(this, "ReactNative入门") }
            >
            <Text style={styles.item}>ReactNative入门</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.show.bind(this, "图灵出版社") }
            >
            <Text style={styles.item}>图灵出版社</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.btn}>
              <Text style={styles.btn_text}>提交</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    return this.state.show ? this.touchableHighlight() : this.touchableOpacity();
  }
}


const styles = StyleSheet.create({
  flex: {
    flex: 1,
    marginTop: 25,
  },
  item: {
    fontSize: 16,
    color: 'red',
  },
  btn: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 50,
    marginLeft: 30,
    marginTop: 30,
  },
  btn_text: {
    fontSize: 16,
    color: 'red',
  }
});

AppRegistry.registerComponent('AwesomeProject', () => App);
