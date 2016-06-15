/**
 * 003.网易新闻
 * 重要新闻组件
 */
import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';


export default class ImportantNews extends React.Component {
    render() {
        // 遍历所有的news
        var news = [];
        for (var i in this.props.news) {
            var text = (
                <Text
                    key={i}
                    // onPress={this.show.bind(this, this.props.news(i)) }
                    numberOfLines= {2}
                    style={styles.news_item}>
                    {this.props.news[i]}
                </Text>
            );
            news.push(text);
        }

        return (
            <View style={styles.flex}>
                <Text style={styles.title}>{this.props.title}</Text>
                {news}
            </View>
        );
    }

    // show(new) {

    // }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    title: {
        fontSize: 25,
        color: '#CD1D1C',
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    news_item: {
        fontSize: 20,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
    }
});