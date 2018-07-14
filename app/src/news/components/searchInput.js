import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const SearchInput = props =>
  !props.isHiddenSearch ? (
    <View style={styles.textInputContainer}>
      <TextInput
        onChangeText={text => props.handleKeySearch(text.toLowerCase())}
        style={styles.searchInput}
        placeholder="Начните вводить слово..."
        value={props.query}
        selectionColor="grey"
        numberOfLines={1}
        maxLength={24}
        autoCorrect={false}
        autoFocus={true}
        onKeyPress={event =>
          event.nativeEvent.key === 'Backspace' && props.query.length === 2
            ? props.clearQuery()
            : null
        }
      />
      <Ionicons
        style={styles.icon}
        size={20}
        underlayColor="transparent"
        name="ios-close-circle-outline"
        onPress={props.clearQuery}
      />
    </View>
  ) : null;

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
