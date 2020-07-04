import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import {
  Provider as PaperProvider,
  Button,
} from 'react-native-paper';
import colors from './src/constants/colors';
import Test from './Test';

export default function App() {
  return (
    <PaperProvider>
      {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
      {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.text}>Rolling Exchange</Text>
        </View>
        <Test></Test>
        <Button icon="camera" mode="contained" onPress={() => console.log('presionado')}>
          Presioná
        </Button>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.textBlack
  },
  card: {
    backgroundColor: colors.primary,
    width: '90%',
    padding: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBarUnderlay: {
    height: 28,
    backgroundColor: 'red',
  }
});
