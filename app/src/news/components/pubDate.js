import React, { PureComponent } from 'react'
import { Text, StyleSheet } from 'react-native'
import formatDate from 'date-fns/format'
import ruLocale from 'date-fns/locale/ru'

export default function PubDate(props) {
  return (
    <Text style={styles.pubDate}>
      {formatDate(props.pubDate, 'DD MMMM, YYYY', { locale: ruLocale })}
    </Text>
  )
}

const styles = StyleSheet.create({
  pubDate: {
    color: 'rgba(128, 128, 128, 0.7)',
    fontSize: 12,
    paddingBottom: 6,
  },
})
