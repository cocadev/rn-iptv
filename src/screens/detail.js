import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, Image, Text, ActivityIndicator } from 'react-native';
import { p } from '../common/normalize';
import colors from '../common/colors';
import images from '../common/images';
import Video from 'react-native-video';
import Webview from 'react-native-webview';

const { width, height } = Dimensions.get('window');

export const DetailScreen = props => {
  const [loading, setLoading] = useState(true);
  const url = props.navigation.getParam('url')
  // console.log('url: ', url)
  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator color={'#fff'}/>}
      <Video
        source={{ uri: 'udp://@192.168.1.43:1234'}}
        // source={{ uri: url}}
        rate={1.0}
        volume={0.0}
        isMuted={true}
        resizeMode="cover"
        shouldPlay
        isLooping={false}
        controls={true}
        onLoad={()=>setLoading(false)}
        style={{ width: width-p(20), height: height-p(70), borderWidth: 2, borderColor: 'green', backgroundColor: '#000' }}
      />
      {/* <View style={{ width: width-p(30), height: height-p(60), borderWidth: 2, borderColor: 'green', backgroundColor: '#000' }}>
        <Webview 
          source={{uri: 'https://www.youtube.com/embed/'+ 'aqz-KE-bpKQ' }}
        />
      </View> */}
      <Text style={{ color: '#fff', fontSize: p(8), opacity: 0.5}}>{url}</Text>
      <Image source={images.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark_blue,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loading: {
    width: p(50),
    height: p(80)
  },
  video: {
    width: width-p(20), 
    height: height-p(50), 
    borderWidth: 2, 
    borderColor: 'green', 
    backgroundColor: '#000'
  }
});
