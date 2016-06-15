/**
 * 005.Search/TextInput
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TextInput,
  PixelRatio,
} from 'react-native';


var onePT = 1 / PixelRatio.get();

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      value: 0,
    };
  }

  getValue(text) {
    var val = text;
    this.setState({
      show: true,
      value: val,
    });
  }

  hide(val) {
    this.setState({
      show: false,
      value: val,
    });
  }

  render() {
    return (
      <View style={[styles.flex]}>
        <View style={[styles.flex_direction_row, styles.input_height]}>
          <View style={styles.flex}>
            <TextInput style={styles.input}
              returnKeyType="search"
              placeholder="请输入欲关键字"
              onEndEditing={this.hide.bind(this, this.state.value) }
              value={this.state.value}
              onChangeText={(text) => this.getValue(text)}
              ></TextInput>
          </View>

          <View style={styles.btn}>
            <Text style={styles.search} onPress={this.hide.bind(this, this.state.value) }>搜索</Text>
          </View>
        </View >

        {
          this.state.show ?
            <View style={styles.result}>
              <Text onPress={this.hide.bind(this, this.state.value + '庄') }
                style={styles.item} numberOfLines={1}>{this.state.value}庄</Text>
              <Text onPress={this.hide.bind(this, this.state.value + '园街') }
                style={styles.item} numberOfLines={1}>{this.state.value}园街</Text>
              <Text onPress={this.hide.bind(this, 80 + this.state.value + '综合商店') }
                style={styles.item} numberOfLines={1}>80{this.state.value}庄</Text>
              <Text onPress={this.hide.bind(this, this.state.value + '桃') }
                style={styles.item} numberOfLines={1}>{this.state.value}桃</Text>
              <Text onPress={this.hide.bind(this, '杨林' + this.state.value + '园') }
                style={styles.item} numberOfLines={1}>杨林{this.state.value}园</Text>
            </View>
            :
            null
        }
      </View >
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <View style={[styles.flex, styles.topStatus]}>
        <Search></Search>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flex_direction_row: {
    flexDirection: 'row',
  },
  list_item: {
    fontSize: 16,
    color: 'red',
  },
  input_height: {
    height: 45,
  },
  detail_text: {
    fontSize: 18,
    color: 'blue',
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginLeft: 5,
    paddingLeft: 5,
  },
  btn: {
    backgroundColor: '#23BEFF',
    marginLeft: -5,
    marginRight: 5,
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
  },
  search: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  topStatus: {
    marginTop: 25,
  },
  result: {
    marginTop: onePT,
    marginLeft: 5,
    marginRight: 5,
    height: 200,
    borderColor: '#ddd',
    borderTopWidth: 0,
  },
  item: {
    fontSize: 16,
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#ddd',
    borderTopWidth: 0,
  }
});

AppRegistry.registerComponent('AwesomeProject', () => App);
