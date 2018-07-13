import React from 'react'
import { Image, TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

import { fetchDATA, MY_MAC_SERVER } from '../config/helpers'
import LampButton from '../components/lampButton'
import { PubDate } from '../components/pubDate'

export default class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      read: false,
      pressed: false,
    }
    this.updateCardState = this.updateCardState.bind(this)
  }

  toContent = () => {
    const { navigate } = this.props.navigation
    const { id } = this.props.data

    fetchDATA(MY_MAC_SERVER + `/${id}`).then(data => {
      navigate('Content', {
        content: data.content,
      })
      this.setState({
        read: true,
      })
    })
  }

  updateCardState(data) {
    this.setState(data)
  }

  render() {
    const { pubDate, description, title, image, count } = this.props.data

    return (
      <View
        style={
          !this.state.read
            ? styles.card
            : [styles.card, { backgroundColor: '#f5f5f5' }]
        }
      >
        <View style={styles.logoHeader}>
          <Image
            style={styles.logo}
            source={require('../assets/rmb_logo_top.png')}
          />
        </View>
        <View style={styles.imageBody}>
          <Image style={styles.image} source={{ uri: image }} />
        </View>
        <View style={styles.titleBody}>
          <PubDate pubDate={pubDate} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.descriptionBody}>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.buttonBody}>
          <LampButton
            data={count}
            lampButton={this.state}
            updateCardState={this.updateCardState}
          />
          <View>
            <TouchableOpacity
              style={styles.contentButton}
              onPress={() => this.toContent()}
            >
              <Icon
                iconStyle={styles.icon}
                type="ionicon"
                name="ios-arrow-forward-outline"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 8,
    backgroundColor: '#fff',
  },
  logoHeader: {
    padding: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  logo: {
    height: 30,
    width: 60,
    resizeMode: 'contain',
  },
  imageBody: {
    paddingBottom: 8,
  },
  image: {
    height: 200,
    width: '100%',
    flex: 1,
  },
  titleBody: {
    padding: 16,
    paddingBottom: 8,
    paddingTop: 0,
  },
  title: {
    fontSize: 19,
    fontWeight: '600',
  },
  descriptionBody: {
    padding: 16,
    paddingBottom: 8,
    paddingTop: 8,
  },
  description: {
    fontSize: 16,
  },
  buttonBody: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  contentButton: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    color: 'rgba(128, 128, 128, 0.4)',
  },
})
