/**
 * 003.网易新闻
 */

import React, { Component } from 'react';

// ES6 导入单个类
import Header from './js/003/header';
import ListItem from './js/003/list-item';
import ImportantNews from './js/003/important-news';

import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.flex}>
        <Header></Header>

        <ListItem title='日方:中国军舰进入"日本领海"2小时'></ListItem>
        <ListItem title='A股纳入MSCI新兴市场指数第三次被延迟'></ListItem>
        <ListItem title='外媒揭海南"光棍村":没有女孩愿嫁到这里'></ListItem>

        <ImportantNews title="今日要闻" news={[
          '越南一架苏-30战机南海失踪 军方:原因尚不清楚',
          '湖北副省长担心房价下跌：泡沫若破裂后果很严重',
          '中国式高调捉奸:丈夫率众掀被拍妻子裸体(图)',
          '"盲井案"背后村庄村干部被指开虚假死亡证明',
          '媒体:不能包管一切的三峡大坝能防多大洪水',
          '李云峰因写作受赏识 屡出入赵少麟儿子私人会所',
        ]}></ImportantNews>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  }
});

AppRegistry.registerComponent('AwesomeProject', () => App);
