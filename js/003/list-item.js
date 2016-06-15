/**
 * 网易新闻的信息列表项
 */

import React, {component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class ListItem extends React.Component {
    render() {
        return (
            <View style={styles.list}>
                <Text style={styles.list_item_font}>{this.props.title}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        justifyContent: 'center',
    },  
    list_item_font: {
        fontSize: 16,
    }
});


