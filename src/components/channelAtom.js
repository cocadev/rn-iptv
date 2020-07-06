import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { p } from '../common/normalize';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../common/colors';

export const ChannelAtom = props => {
    const { _id, channels } = props.data
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={props.onClick}
        >
            <Image source={{ uri: channels[0].image}} style={styles.image} />
            <Text style={[styles.title, { color: props.channel === _id ? colors.blue : "white"}]}>{channels.length} </Text>
            <Icon name="heart" size={p(13)} color={props.channel === _id ? colors.blue : "white"} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        margin: p(5), 
        marginLeft: p(12),
        alignItems: 'center',
        marginRight: p(10),
        justifyContent: 'space-between',
    },
    image: {
        width: p(25),
        height: p(16)
    },
    title: {
        fontSize: p(10),
        color: colors.white,
        marginLeft: p(10),
        width: p(22),
        textAlign: 'center',
        marginLeft: p(1)
    }
});
