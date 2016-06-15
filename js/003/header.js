/**
 * 网易新闻的标题组件
 */

import React, {component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    PixelRatio,
} from 'react-native';

// ES6导出单个类方法 export default
export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.flex}>
                <Text style={styles.font}>
                    <Text style={styles.font1}>網易</Text>
                    <Text style={styles.font2}>新闻</Text>
                    <Text>有态度</Text>
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex: {
        marginTop: 25,
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderBottomWidth: 3/PixelRatio.get(),
        borderBottomColor: '#EF2D36',
        alignItems: 'center',
        justifyContent: 'center',
    },
    font: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    font1: {
        color: '#CD1D1C',
    },
    font2: {
        color: '#FFF',
        backgroundColor: '#CD1D1C',
    }
});


