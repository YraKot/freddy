import React from 'react';
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const OrderShop = ({ icon, title, address, onPress }) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.shopInfo}>
                <ImageBackground 
                    source={{ uri: icon }} 
                    style={styles.iconShop}
                />
                <View>
                    <Text style={styles.titleShop}>{title}</Text>
                    <Text style={styles.addressShop}>{address}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={() => onPress()}>
                <Text style={styles.btnText}>Change</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        backgroundColor: '#fff'
    },
    shopInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconShop: {
        width: 50,
        height: 50,
        marginRight: 16
    },
    titleShop: {
        fontSize: 16,
        lineHeight: 22,
        fontWeight: 'bold',
        color: '#0F0F0F',
    },
    addressShop: {
        fontSize: 12,
        lineHeight: 16,
        color: '#9295A4',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 92,
        height: 50,
        borderRadius: 12,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'rgba(199, 202, 215, 0.3)'
    },
    btnText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#0F0F0F'
    }
})