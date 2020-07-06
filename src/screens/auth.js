import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { p } from '../common/normalize';
import colors from '../common/colors';
import images from '../common/images';
import api from '../common/api';
import Cache from '../common/cache';

export const AuthScreen = props => {
  const [user, setUser] = useState('4f6c0c48d4e8edb8');
  const [password, setPassword] = useState('Junel@123');
  const [isWaiting, setIsWaiting] = useState(false);

  const onLogin = () => {
    setIsWaiting(true)
    api.login(user, password, (err, res) => {
      setIsWaiting(false)
      console.log('{{{{{{{{}}}}}}}}', err)
      console.log('{{{{{{{{ 1 }}}}}}}}', res)

      if (err == null) {
        Cache.token = res.data.token
        props.navigation.navigate('Main')
      } else {

      }
    })
  }

  return (
    <View style={styles.container}>
      <Image source={images.logo} />
      <TextInput
        style={styles.input}
        onChangeText={text => setUser(text)}
        value={user}
        placeholder={'username'}
        placeholderTextColor={'#777'}
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder={'password'}
        placeholderTextColor={'#777'}
      />
      <TouchableOpacity style={styles.btn} onPress={onLogin}>
        <Text style={styles.btnText}>
          Login
        </Text>
        {isWaiting && <ActivityIndicator color={'#fff'}/>}
      </TouchableOpacity>
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
  input: {
    borderColor: 'green',
    borderWidth: 1,
    width: p(140),
    height: p(20),
    margin: p(6),
    fontSize: p(12),
    padding: 0,
    paddingLeft: 12,
    color: '#fff'
  },
  btn: {
    width: p(140),
    height: p(20),
    margin: 12,
    backgroundColor: colors.blue,
    borderRadius: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row'
  },
  btnText: {
    fontSize: p(10),
    color: '#fff'
  }
});
