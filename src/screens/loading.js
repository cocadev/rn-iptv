import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import LottieView from 'lottie-react-native';
import { p } from '../common/normalize';
import colors from '../common/colors';
import images from '../common/images';

export const LoadingScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Auth')
    }, 4000);
  }, []);
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../common/loading.json')}
        colorFilters={[{
          keypath: "button",
          color: "#F00000"
        },{
          keypath: "Sending Loader",
          color: "#F00000"
        }]}
        autoPlay
        loop
        style={styles.loading}
      />
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
  }
});