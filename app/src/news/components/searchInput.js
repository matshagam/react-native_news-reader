import React, { PureComponent } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default class SearchInput extends PureComponent {
  render() {
    const { query, isHiddenSearch } = this.props.searchInput;
    if (!isHiddenSearch) {
      return (
        <View style={styles.textInputContainer}>
          <TextInput
            onChangeText={text =>
              this.props.handleKeySearch(text.toLowerCase())
            }
            style={styles.searchInput}
            placeholder="Начните вводить слово..."
            value={query}
            selectionColor="grey"
            numberOfLines={1}
            maxLength={24}
            autoCorrect={false}
            autoFocus={true}
            onKeyPress={event =>
              event.nativeEvent.key === 'Backspace' && query.length === 2
                ? this.props.clearQuery()
                : null
            }
          />
          <Icon
            containerStyle={styles.iconSearchContainer}
            iconStyle={styles.icon}
            size={20}
            underlayColor="transparent"
            type="ionicon"
            name="ios-close-circle-outline"
            onPress={this.props.clearQuery}
          />
        </View>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  textInputContainer: {
    height: 46,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5'
  },
  searchInput: {
    fontSize: 16,
    paddingHorizontal: 8,
    marginHorizontal: 8,
    height: 34,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: '#eaeaea'
  },
  iconSearchContainer: {
    top: 13,
    right: 16,
    position: 'absolute'
  },
  textInputContainer: {
    height: 46,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5'
  },
  icon: {
    color: 'rgba(128, 128, 128, 0.4)'
  }
});
