import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export const KeyItem = ({ val, onPress }) => {
    return (
        <TouchableOpacity style={styles.wrapper} activeOpacity={0.7} onPress={() => onPress(val)}>
            <Text style={styles.text}>{val}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4,
        width: 110,
        height: 65,
        borderRadius: 10,
        backgroundColor: '#F7F8FC'
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#686A73',
    }
});