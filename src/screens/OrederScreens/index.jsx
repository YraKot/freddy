import React, { useState } from 'react';
import { View, Image, StyleSheet, Alert } from 'react-native';
import { Footer } from '../../components/Footer';
import { KeyList } from '../../components/KeyList';
import { OrderShop } from '../../components/OrderShop';
import { OrderInput } from '../../components/OrderInput';
import { BannerImage } from '../../components/BannerImage';
import image from '../../../assets/bg.png';
import icon from '../../../assets/restaurant_icon.png';

const bgImg = Image.resolveAssetSource(image).uri;

const shop = {
    title: 'McDonald\'s',
    address: '186 Fenwick Road, Glasgow',
    icon: Image.resolveAssetSource(icon).uri
}

export const OrederScreens = ({ props }) => {
    const [number, setNumber] = useState([]);
    const getValue = (val) => {
        if (number.length >= 7) {
            Alert.alert('to mach values')
        } else {
            setNumber([...number, val.toString()]);
        }
    }

    const clearHandler = () => {
        number.splice(-1, 1);
        setNumber([...number]);
    }

    const changeShopHandler = () => {
        Alert.alert('change shop');
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.bgImageWrp}>
                <BannerImage image={bgImg} />
            </View>

            <View styele={styles.inner}>
                <OrderShop icon={shop.icon} title={shop.title} address={shop.address} onPress={changeShopHandler} />
                <OrderInput onPress={clearHandler} number={number}/>
                <View style={{ paddingTop: 16, paddingBottom: 28 }}>
                    <KeyList onPress={getValue} list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]} />
                </View>
                <Footer
                    nextStep={() => Alert.alert('next order screen')}
                    profileHandler={() => Alert.alert('profile screen')}
                    locationHandler={() => Alert.alert('location screen')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'relative',
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#fff'
    },
    bgImageWrp: {
        position: 'absolute', 
        top: 0,
        width: '100%', 
        height: '100%'
    }
});