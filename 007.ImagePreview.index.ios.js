/**
 * 007.ImagePreview
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

var images = [
  'http://www.ituring.com.cn/bookcover/1442.796.jpg',
  'http://www.ituring.com.cn/bookcover/1668.553.jpg',
  'http://www.ituring.com.cn/bookcover/1521.260.jpg',
];

// 图片组件
class Images extends React.Component {
  constructor(props) {
    super(props);

    // 创建数据
    this.state = {
      imgs: props.imgs,
      index: 0,
    };
  }

  goPre() {
    var idx = this.state.index;
    if (idx > 0) {
      idx--;

      this.setState({
        index: idx,
      });
    }
  }

  goNext() {
    var idx = this.state.index;
    if (idx < this.state.imgs.length - 1) {
      idx++;
      this.setState({
        index: idx,
      });
    }
  }

  /** 在ES6下，你需要通过bind来绑定this引用，或者使用箭头函数（它会绑定当前scope的this引用）来调用
      有参数:
      onPress={this.handleOptionsButtonClick.bind(this)}
      onPress={e=>this.handleOptionsButtonClick(e)}
      无参数:
      onPress={() => this.handlePotionButtonClick()}
  */
  render() {
    return (
      <View style={styles.flex}>
        <View style={styles.preview}>
          <Image
            style={styles.img}
            source={{ uri: this.state.imgs[this.state.index] }}
            resizeMode="contain">
          </Image>
        </View>

        <View style={styles.btns}>
          <TouchableOpacity
            onPress={() => this.goPre() }
            >
            <View style={styles.btn}>
              <Text style={styles.btn_text}>上一张</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.goNext() }
            >
            <View style={styles.btn}>
              <Text style={styles.btn_text}>下一张</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <View style={[styles.flex, styles.marginTop]}>
        <Images imgs={images}></Images>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  marginTop: {
    marginTop: 40,
  },
  preview: {
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 5,
    height: 250,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 150,
    width: 200,
  },
  btns: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  btn: {
    width: 60,
    height: 30,
    borderColor: '#0089FF',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
  },
  btn_text: {
    fontSize: 16
  }
});

AppRegistry.registerComponent('AwesomeProject', () => App);
