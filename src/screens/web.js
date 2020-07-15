import React from 'react';
import { Dimensions, StyleSheet, View, Image, Text } from 'react-native';
import { p } from '../common/normalize';
import colors from '../common/colors';
import images from '../common/images';
import Webview from 'react-native-webview';

const { width, height } = Dimensions.get('window');
const uri = 'https://whichbrowser.net/'

export const WebScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.web}>
        <Webview 
          source={{ uri }}
        />
      </View>
      <Text style={{ color: '#fff'}}>{uri}</Text>
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
  web: {
    width: width - p(30),
    height: height - p(60),
    borderWidth: 2,
    borderColor: 'green',
    backgroundColor: '#000'
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