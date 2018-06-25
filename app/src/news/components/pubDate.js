import React, { PureComponent } from 'react';
import { Text, StyleSheet } from 'react-native';
import formatDate from 'date-fns/format';
import ruLocale from 'date-fns/locale/ru';

export default class PubDate extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <Text style={styles.pubDate}>
        {formatDate(data, 'DD MMMM, YYYY', { locale: ruLocale })}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  pubDate: {
    color: 'rgba(128, 128, 128, 0.7)',
    fontSize: 12,
    paddingBottom: 6
  }
});
