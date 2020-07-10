import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Image, TouchableOpacity, ScrollView, Text } from 'react-native';
import { Atom } from '../components/atom';
import { ChannelAtom } from '../components/channelAtom';
import { p } from '../common/normalize';
import { TVList } from '../components/tvlist';
import { mokeData1, mokeData2 } from '../common/data';
import Utils from '../common/utils';
import colors from '../common/colors';
import api from '../common/api';

export function MainScreen(props) {
  const [channel, setChannel] = useState(0)
  const [apiData, setApiData] = useState();
  const [video, setVideo] = useState();

  useEffect(() => {
    api.getAppProfile("4f6c0c48d4e8edb8", "Junel", (err, res) => {
      if (err == null) {
        setApiData(res.data.mode.Multichannel)
      } else {
        setApiData(null)
      }
    })
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {video && <Atom data={video} />}
      </View>
      {apiData && <View style={styles.body}>
        <ScrollView style={styles.left}>
          <TouchableOpacity 
            onPress={()=>props.navigation.navigate('Web')} 
            style={styles.btn}
          >
            <Text style={styles.btnText}>Webview</Text>
          </TouchableOpacity>
          <ChannelAtom
            data={mokeData1}
            onClick={() => setChannel(0)}
            channel={channel}
          />
          <ChannelAtom
            data={mokeData2}
            onClick={() => setChannel(100)}
            channel={channel}
          />
          <FlatList
            data={apiData}
            renderItem={({ item }) => <ChannelAtom data={item} onClick={() => setChannel(item._id)} channel={channel} />}
            keyExtractor={item => item._id}
          />
          <ChannelAtom
            data={mokeData1}
            onClick={() => setChannel(0)}
            channel={channel}
          />
        </ScrollView>
        <View style={styles.right}>
          { channel === 100 && <TVList video={video} onClick={(i)=>setVideo(i)}/>}
          { channel !== 100 &&
            (Utils.FindIndex(apiData, channel) > -1 || channel == 0) &&
            <FlatList
              numColumns={4}
              // horizontal
              data={channel == 0 ? mokeData1.channels : apiData[Utils.FindIndex(apiData, channel)].channels}
              renderItem={({ item }) =>
                <TouchableOpacity onPress={() => props.navigation.navigate('Detail', { url: item.url })}>
                  <Image source={{ uri: item.image }} style={styles.img} />
                </TouchableOpacity>
              }
              keyExtractor={item => item._id}
            />
          }
        </View>
      </View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark_blue,
  },
  header: {
    flex: 3,
  },
  body: {
    flex: 7,
    flexDirection: 'row',
  },
  left: {
    flex: 1,
    marginTop: p(12)
  },
  right: {
    flex: 4,
    backgroundColor: colors.black_blue
  },
  title: {
    color: colors.white
  },
  img: {
    width: p(70),
    height: p(40),
    margin: p(3),
    borderWidth: p(2),
    borderColor: colors.blue,
    borderRadius: p(5),
    backgroundColor: '#fff'
  },
  btn: {
    width: p(50),
    height: p(14),
    borderRadius: p(10),
    marginLeft: p(12),
    backgroundColor: 'purple',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center'
  },
  btnText: {
    color: '#fff',
    fontSize: p(8)
  }
  
});
