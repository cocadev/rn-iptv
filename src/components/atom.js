import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { p } from '../common/normalize';
import colors from '../common/colors';
import Icon from 'react-native-vector-icons/Entypo';
import data from '../common/data';
import Video from 'react-native-video';
const { width, height } = Dimensions.get('window');

export const Atom = props => {
    const { img, title,  } = props.data
    return (
        <View style={styles.container}>
            <Image source={{ uri: img ? img : 'https://www.wildaboutmovies.com/wp-content/uploads/Weathering-with-You-150x210.jpg'}} style={styles.img} />
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.note} numberOfLines={1}>{data.moke1.note}</Text>
                <View style={styles.row}>
                    <Text style={styles.new}>NEW</Text>
                    <Text style={styles.description}>{data.moke1.time}</Text>
                </View>
                <Text style={styles.word} numberOfLines={2}>
                    {data.moke1.description1 + '  '}
                    <Text style={styles.description} >
                        {data.moke1.description2}
                    </Text>
                </Text>
            </View>
            <View>
                {/* <Image source={data.moke1.video} style={styles.video} /> */}
                <Video
                source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'}}
                rate={1.0}
                volume={0.0}
                isMuted={true}
                resizeMode="cover"
                shouldPlay
                isLooping={false}
                controls={true}
                // onLoad={()=>setLoading(false)}
                style={styles.video}
            />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: -p(2) }}>
                    <Icon name="triangle-up" size={p(13)} color="yellow" />
                    <Text style={styles.guide}>GUIDE OPTIONS</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        margin: p(10),
        marginLeft: p(35)
    },
    row: {
        flexDirection: 'row'
    },
    header: {
        marginHorizontal: 12,
        maxWidth: p(200),
    },
    img: {
        width: p(35),
        height: p(55)
    },
    title: {
        color: colors.white,
        fontSize: p(15),
        fontWeight: '300',
        marginTop: -p(4)
    },
    note: {
        color: colors.white,
        fontSize: p(10),
        fontWeight: '300'
    },
    new: {
        color: colors.blue,
        fontWeight: '600',
        fontSize: p(5),
        paddingTop: p(3),
        paddingRight: p(5)
    },
    description: {
        color: colors.white,
        fontSize: p(7)
    },
    word: {
        color: '#666',
        fontSize: p(7),
        paddingRight: p(12)
    },
    guide: {
        color: colors.white,
        fontSize: p(7)
    },
    video: {
        width: p(85),
        height: p(44),
        borderWidth: 2, 
        borderColor: 'green', 
        backgroundColor: '#000'
      }
});
