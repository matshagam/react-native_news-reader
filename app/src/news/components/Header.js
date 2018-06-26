import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class Header extends Component {
  render() {
    const isHiddenHeader = this.props.isHiddenHeaderFooter;

    return !isHiddenHeader ? (
      <View style={styles.header}>
        <Text style={styles.textHeader}>НОВОСТИ</Text>
      </View>
    ) : null;
  }
}

const styles = StyleSheet.create({
  header: {
    height: 44,
    justifyContent: "center"
  },
  textHeader: {
    fontWeight: "bold",
    fontSize: 22,
    paddingLeft: 16
  }
});
