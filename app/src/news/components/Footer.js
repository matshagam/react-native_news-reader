import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const Footer = props =>
  !props.isHiddenHeaderFooter ? (
    <View style={styles.iconsContainer}>
      <Ionicons
        style={styles.icon}
        size={45}
        underlayColor="transparent"
        name="ios-search-outline"
        onPress={() => {
          props.updatePostsState({
            isHiddenSearch: !props.isHiddenSearch
          });
        }}
      />
      <Ionicons
        style={styles.icon}
        size={45}
        underlayColor="transparent"
        name="ios-settings-outline"
        onPress={() => {
          props.updatePostsState({
            modalVisible: !props.modalVisible
          });
        }}
      />
      <Ionicons
        style={styles.icon}
        size={45}
        underlayColor="transparent"
        name="ios-arrow-dropup-outline"
        onPress={props.scrollToTop}
      />
    </View>
  ) : null;

const styles = StyleSheet.create({
  icon: {
    color: 'rgba(128, 128, 128, 0.6)'
  },
  iconsContainer: {
    justifyContent: 'space-between',
    alignSelf: 'center',
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    width: 170
  }
});
