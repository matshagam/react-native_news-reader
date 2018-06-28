import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export const Header = props =>
  !props.isHiddenHeaderFooter ? (
    <View style={styles.header}>
      <Text style={styles.textHeader}>НОВОСТИ</Text>
    </View>
  ) : null

const styles = StyleSheet.create({
  header: {
    height: 44,
    justifyContent: 'center',
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 22,
    paddingLeft: 16,
  },
})
