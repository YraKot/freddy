import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { OrderNumber } from '../OrderNumber';
import DeleteArrow from '../../../assets/deleteArrow.svg';

export const OrderInput = ({number, onPress}) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.wrapperNumber}>
                <OrderNumber number={number} />
            </View>
            <TouchableOpacity style={styles.deleteBtn} activeOpacity={0.7} onPress={() => onPress()}>
                <DeleteArrow />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapperNumber: {
        width: '100%',
        height: 112,
        alignItems: 'center'
    },
    deleteBtn: {
        position: 'absolute',
        right: 32
    }
});