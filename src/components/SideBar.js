import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image
} from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

export default SideBar = props => (
  <ScrollView>
    <ImageBackground
      source={require('../../assets/images/background.png')}
      style={{ width: undefined, padding: 16, paddingTop: 48 }}
    >
      <Text style={styles.name}>Jodie Harris</Text>

      <View style={{ flexDirection: 'row' }}></View>
    </ImageBackground>

    <View
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <DrawerNavigatorItems {...props} />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#FFF'
  },
  name: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '800',
    marginVertical: 8
  }
});
