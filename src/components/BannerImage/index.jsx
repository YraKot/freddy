import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

export const BannerImage = ({ image }) => {
    return (
        <View style={styles.wrapper}>
            <ImageBackground source={{ uri: image }} style={styles.image}/>
        </View>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: 220,
        backgroundColor: '#fff'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
});