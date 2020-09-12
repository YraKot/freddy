import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import ProfileSvg from '../../../assets/profile.svg';
import LocationSvg from '../../../assets/location.svg';
import RightArrow from '../../../assets/arrowRight.svg';

export const Footer = ({ locationHandler, profileHandler, nextStep }) => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity activeOpacity={0.7} onPress={() => locationHandler()}>
                <LocationSvg />
            </TouchableOpacity>
            <TouchableOpacity style={styles.arrowWrapper} activeOpacity={0.7} onPress={() => nextStep()}>
                <RightArrow />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} onPress={() => profileHandler()}>
                <ProfileSvg />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 56,
    },
    arrowWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        backgroundColor: '#FFAE34',
        borderRadius: 80 / 2
    }
});