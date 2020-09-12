import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { KeyItem } from '../KeyItem';

export const KeyList = ({ list, onPress }) => {
    return (
        <FlatList
            data={list}
            renderItem={({ item }) => (
                <KeyItem key={item} val={item} onPress={onPress} />
            )}
            numColumns={3}
            keyExtractor={(item) => item}
            contentContainerStyle={styles.keyList}
        />
    )
};

const styles = StyleSheet.create({
    keyList: {
        paddingLeft: 16,
        paddingRight: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
});