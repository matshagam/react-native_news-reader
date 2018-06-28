import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

export const Footer = props =>
  !props.isHiddenHeaderFooter ? (
    <View style={styles.iconsContainer}>
      <Icon
        iconStyle={styles.icon}
        size={45}
        underlayColor="transparent"
        type="ionicon"
        name="ios-search-outline"
        onPress={() => {
          props.updatePostsState({
            isHiddenSearch: !props.isHiddenSearch,
          })
        }}
      />
      <Icon
        iconStyle={styles.icon}
        size={45}
        underlayColor="transparent"
        type="ionicon"
        name="ios-settings-outline"
        onPress={() => {
          props.updatePostsState({
            modalVisible: !props.modalVisible,
          })
        }}
      />
      <Icon
        iconStyle={styles.icon}
        size={45}
        underlayColor="transparent"
        type="ionicon"
        name="ios-arrow-dropup-outline"
        onPress={props.scrollToTop}
      />
    </View>
  ) : null

const styles = StyleSheet.create({
  icon: {
    color: 'rgba(128, 128, 128, 0.6)',
  },
  iconsContainer: {
    justifyContent: 'space-between',
    alignSelf: 'center',
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    width: 170,
  },
})
