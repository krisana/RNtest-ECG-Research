import React from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Layouts } from '../../utilities';

export default function ({
  url,
  title,
  thumbnail,
}) {
  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={() => Actions.detail({ url })}
    >
      <Image source={{ uri: thumbnail}} style={styles.image} />
      <View style={styles.textBox}>
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: Layouts.width - 30,
    height: null,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'cover',
    width: Layouts.width - 30,
    height: Layouts.width * 0.6,
    marginBottom: 8,
  },
  textBox: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 14,
    color: '#2e2e2e',
    marginBottom: 4,
    backgroundColor: 'transparent',
  },
  textProperties: {
    fontSize: 12,
    color: '#4d4d4d',
    marginBottom: 4,
    backgroundColor: 'transparent',
  },
  textPrice: {
    fontSize: 14,
    color: '#4d4d4d',
  },
});