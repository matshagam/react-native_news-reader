import React, { PureComponent } from "react";
import { Text, View, StyleSheet, ScrollView, Modal } from "react-native";
import { Icon, CheckBox } from "react-native-elements";

export default class SettingsModal extends PureComponent {
  render() {
    const {
      allDate,
      todayNews,
      modalVisible,
      popularSorting,
      favoritesSorting
    } = this.props.settings;
    return (
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.headerH1}>
              НАСТРОЙКИ{"  "}
              <Text style={styles.headerH2}>новостной ленты</Text>
            </Text>
          </View>
          <ScrollView>
            <View>
              <View style={styles.viewContainer}>
                <Text style={styles.icon}>Поиск</Text>
                <View style={styles.viewCheckBox}>
                  <Text style={styles.checkBoxText}>
                    {`По всем дням\n(без галочки: только за сегодня)`}
                  </Text>
                  <CheckBox
                    iconType="ionicon"
                    iconRight
                    containerStyle={styles.checkBox}
                    checkedIcon="md-checkbox"
                    uncheckedIcon="md-square-outline"
                    checkedColor="#c3c3c3"
                    checked={allDate}
                    onPress={() => {
                      this.props.updatePostsState({
                        allDate: !allDate
                      });
                    }}
                  />
                </View>
              </View>
              <View style={styles.viewContainer}>
                <Text style={styles.icon}>Календарь</Text>
                <View style={styles.viewCheckBox}>
                  <Text style={styles.checkBoxText}>
                    {`Все новости\n(без галочки: только за сегодня)`}
                  </Text>
                  <CheckBox
                    iconType="ionicon"
                    iconRight
                    containerStyle={styles.checkBox}
                    checkedIcon="md-checkbox"
                    uncheckedIcon="md-square-outline"
                    checkedColor="#c3c3c3"
                    checked={todayNews}
                    onPress={() => {
                      this.props.updatePostsState({
                        todayNews: !todayNews
                      });
                    }}
                  />
                </View>
              </View>
              <View style={styles.viewContainer}>
                <Text style={styles.icon}>Сортировка</Text>
                <View style={styles.viewCheckBox}>
                  <Text style={styles.checkBoxText}>Популярные новости</Text>
                  <CheckBox
                    iconType="ionicon"
                    iconRight
                    containerStyle={styles.checkBox}
                    checkedIcon="md-checkbox"
                    uncheckedIcon="md-square-outline"
                    checkedColor="#c3c3c3"
                    checked={popularSorting}
                    onPress={() => {
                      this.props.updatePostsState({
                        popularSorting: !popularSorting
                      });
                    }}
                  />
                </View>
                <View style={styles.viewLastBox}>
                  <Text style={styles.checkBoxText}>Избранные новости</Text>
                  <CheckBox
                    iconType="ionicon"
                    iconRight
                    containerStyle={styles.checkBox}
                    checkedIcon="md-checkbox"
                    uncheckedIcon="md-square-outline"
                    checkedColor="#c3c3c3"
                    checked={favoritesSorting}
                    onPress={() => {
                      this.props.updatePostsState({
                        favoritesSorting: !favoritesSorting
                      });
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={styles.saveSettings}>
              <Icon
                iconStyle={styles.icon}
                name="ios-checkmark-circle-outline"
                type="ionicon"
                size={45}
                onPress={this.props.updateStateSettings}
              />
            </View>
          </ScrollView>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "#fff",
    height: "100%",
    top: 22
  },
  header: {
    height: 44,
    justifyContent: "center",
    left: 16
  },
  headerH1: {
    fontSize: 19,
    fontWeight: "bold"
  },
  headerH2: {
    fontWeight: "normal",
    color: "grey"
  },
  icon: {
    color: "rgba(128, 128, 128, 0.4)"
  },
  viewLastBox: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 8,
    paddingBottom: 8
  },
  checkBox: {
    backgroundColor: "#fff",
    borderWidth: 0,
    margin: 0,
    padding: 0,
    marginRight: 0,
    marginLeft: 0
  },
  checkBoxText: {
    fontSize: 15,
    color: "#575757",
    width: 300
  },
  viewContainer: {
    paddingHorizontal: 16,
    paddingTop: 24
  },
  viewCheckBox: {
    paddingTop: 16,
    paddingBottom: 8,
    borderTopWidth: 0.3,
    borderTopColor: "rgba(128, 128, 128, 0.4)",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  saveSettings: {
    height: 150,
    alignItems: "center",
    justifyContent: "center"
  }
});