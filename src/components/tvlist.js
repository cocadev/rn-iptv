import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { p } from '../common/normalize';
import { tableData } from '../common/data';
import Utils from '../common/utils';
import colors from '../common/colors';

export const TVList = props => {
    const [dt, setDt] = useState(new Date());
    const videoId = props.video && props.video.id
    useEffect(() => {
        let secTimer = setInterval(() => {
            setDt(new Date())
        }, 1000)
        return () => clearInterval(secTimer);
    }, [])
    return (
        <View style={styles.timeLine}>
            <View style={{ flexDirection: 'column' }}>
                <ScrollView>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{}}>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <View style={{ width: p(80), marginTop: p(-2) }}>
                                    <Text style={{ color: 'white', fontSize: p(11), fontWeight: '300' }}>{Utils.MyTime(dt)}</Text>
                                    <View style={styles.redLine} />
                                </View>
                                {
                                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((item, index) =>
                                        <View key={index} style={{ width: p(80) }}>
                                            <Text style={{ color: 'white', fontSize: p(7), marginTop: p(3) }}>{Utils.UponTime(dt, item)}</Text>
                                        </View>)
                                }
                            </View>
                            {
                                tableData.map((eachRow, j) => {
                                    return (
                                        <View style={{ flexDirection: 'row' }} key={j}>
                                            {
                                                eachRow.map((eachItem, i) => {
                                                    return (
                                                        <TouchableOpacity 
                                                            onPress={()=>props.onClick(eachItem)} 
                                                            key={i} 
                                                            style={[styles.item, 
                                                                { 
                                                                    width: p(eachItem.width),
                                                                    backgroundColor: videoId == eachItem.id ? '#016299' : colors.dark_blue
                                                                }]}
                                                        >
                                                            {eachItem.new && <Text style={styles.new}>NEW</Text>}
                                                            <Text style={{ fontSize: p(8), color: '#fff' }} numberOfLines={1}>{eachItem.title}</Text>
                                                        </TouchableOpacity>)
                                                })
                                            }
                                        </View>
                                    );
                                })
                            }
                        </View>
                    </ScrollView>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    timeLine: {
        backgroundColor: colors.dark_blue,
      },
      redLine: {
        width: 17,
        height: 2,
        backgroundColor: 'red',
        marginTop: p(-1)
      },
      item: {
        height: p(20),
        borderWidth: 0.5,
        borderColor: '#016299',
        borderBottomWidth: 0,
        justifyContent: 'flex-start',
        backgroundColor: colors.black_blue,
        paddingLeft: p(6),
        flexDirection: 'row',
        alignItems: 'center'
      },
      new: {
        color: '#016299',
        marginRight: p(4)
      }
});
