/**
 * 008.TabBarIOS
 * 切换Tab
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TabBarIOS,
} from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 'message',
    };
  }

  select(id) {
    this.setState({
      id: id,
    });
  }

  render() {
    return (
      <TabBarIOS style={styles.flex}>
        <TabBarIOS.Item
          title="消息"
          icon={require('./img/008/message.png') }
          onPress={() => this.select('message') }
          selected={this.state.id == 'message'}
          >
          <Text style={styles.text}>Tab1</Text>
        </TabBarIOS.Item>
         <TabBarIOS.Item
          title="联系人"
          icon={require('./img/008/phone.png') }
          onPress={() => this.select('phone') }
          selected={this.state.id == 'phone'}
          >
          <Text style={styles.text}>Tab2</Text>
        </TabBarIOS.Item>
         <TabBarIOS.Item
          title="动态"
          icon={require('./img/008/star.png') }
          onPress={() => this.select('star') }
          selected={this.state.id == 'star'}
          >
          <Text style={styles.text}>Tab3</Text>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}


const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    color: 'red',
    marginTop: 25,
  }
});

AppRegistry.registerComponent('AwesomeProject', () => App);
