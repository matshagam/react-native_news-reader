import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import HTMLView from 'react-native-render-html'

import { tagsStyles } from '../config/helpers'

export default class ContentPost extends React.PureComponent {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#fff',
      elevation: 0,
      borderBottomWidth: 0,
      borderBottomColor: '#fff',
    },
    headerTintColor: 'rgba(128, 128, 128, 0.4)',
  }

  render() {
    const { content } = this.props.navigation.state.params
    return (
      <ScrollView style={styles.content}>
        <HTMLView tagsStyles={tagsStyles} html={content} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#fff',
  },
})
