import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const OrderNumber = ({ number }) => {
    return (
        <Text style={styles.text}>{number}</Text>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 82,
        fontWeight: 'bold',
        color: '#0F0F0F',
        lineHeight: 118
    }
});