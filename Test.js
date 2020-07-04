import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from './src/constants/colors';

export default function Test() {
  return(
    <View>
      <Text style={styles.text}>Hola</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.text
  }
});
