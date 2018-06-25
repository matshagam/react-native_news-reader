import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

export default class Footer extends Component {
  render() {
    const isHiddenSearch = this.props.isHiddenSearch,
      isHiddenFooter = this.props.isHiddenHeaderFooter,
      modalVisible = this.props.modalVisible;

    return !isHiddenFooter ? (
      <View style={styles.iconsContainer}>
        <Icon
          iconStyle={styles.icon}
          size={45}
          underlayColor="transparent"
          type="ionicon"
          name="ios-search-outline"
          onPress={() => {
            this.props.updatePostsState({
              isHiddenSearch: !isHiddenSearch
            });
          }}
        />
        <Icon
          iconStyle={styles.icon}
          size={45}
          underlayColor="transparent"
          type="ionicon"
          name="ios-settings-outline"
          onPress={() => {
            this.props.updatePostsState({
              modalVisible: !modalVisible
            });
          }}
        />
        <Icon
          iconStyle={styles.icon}
          size={45}
          underlayColor="transparent"
          type="ionicon"
          name="ios-arrow-dropup-outline"
          onPress={this.props.scrollToTop}
        />
      </View>
    ) : null;
  }
}

const styles = StyleSheet.create({
  icon: {
    color: "rgba(128, 128, 128, 0.6)"
  },
  iconsContainer: {
    justifyContent: "space-between",
    alignSelf: "center",
    position: "absolute",
    flexDirection: "row",
    bottom: 0,
    width: 170
  }
});
