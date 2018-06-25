import React, { Component } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import formatDate from "date-fns/format";

import {
  setAsync,
  getAsync,
  MY_MAC_SERVER,
  fetchDATA,
  filterData
} from "../config/helpers";

import Card from "../container/Card";
import SettingsModal from "./settingsModal";
import SearchInput from "../components/searchInput";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class RenderCards extends Component {
  static navigationOptions = {
    header: null
    // headerTitle: "НОВОСТИ",
    // headerTitleStyle: {
    //   position: "absolute",
    //   left: 0,
    //   fontSize: 19,
    //   fontWeight: "bold"
    // },
    // headerTruncatedBackTitle: `НОВОСТИ`,
    // headerStyle: {
    //   elevation: 0,
    //   borderBottomWidth: 0,
    //   borderBottomColor: "#fff",
    //   backgroundColor: "#f5f5f5"
    // }
  };

  constructor(props) {
    super(props);

    this.state = {
      news: [],
      page: 1,
      loading: false,
      query: "",
      isHiddenSearch: true,
      isHiddenHeaderFooter: false,
      modalVisible: false,
      allDate: false,
      today: formatDate(new Date(), "YYYY-MM-DD"),
      todayNews: false,
      popularSorting: false,
      favoritesSorting: false
    };
    this.updatePostsState = this.updatePostsState.bind(this);
    this.handleKeySearch = this.handleKeySearch.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    console.log("get data...");

    const { page, query, news, isHiddenSearch, today, todayNews } = this.state;
    this.setState({
      loading: true
    });

    if (isHiddenSearch && query == "") {
      fetchDATA(
        !todayNews
          ? MY_MAC_SERVER + `?_limit=3&_page=${page}&_sort=pubDate&_order=desc`
          : MY_MAC_SERVER + `?_limit=3&_page=${page}&pubDate=${today}`
      )
        .then(res => res.map(filterData => filterData))
        .then(data => {
          this.setState({
            news: page === 1 ? data : [...news, ...data],
            loading: false
          });
          console.log(
            data.length > 3
              ? "ПРЕВЫШЕН _limit: " + data.length + " > " + "3"
              : "В лимите..."
          );
          if (!todayNews) setAsync("prevStateNews", this.state.news);
        });
    }

    if (!isHiddenSearch && query !== "") {
      fetchDATA(MY_MAC_SERVER + `?_sort=pubDate&_order=desc&q=${query}`)
        .then(res => res.map(filterData => filterData))
        .then(data => {
          this.setState({
            news: data,
            loading: false,
            page: 1
          });
        });
    }

    if (!isHiddenSearch && query == "") {
      console.log("load data from storage... ");

      getAsync("prevStateNews").then(data => {
        this.setState({
          news: data == news ? news : data
        });
      });
    }
  };

  handleKeySearch(text) {
    this.setState(
      {
        query: text
      },
      () => {
        this.state.query.length >= 3 ? this.getData() : null;
      }
    );
  }

  clearQuery = () => {
    this.setState(
      {
        query: ""
      },
      () => {
        this.getData();
      }
    );
  };

  updatePostsState(data) {
    this.setState(data);
  }

  updateStateSettings = () => {
    this.setState(
      {
        modalVisible: !this.state.modalVisible
      },
      () => {
        this.getData();
      }
    );
  };

  scrollToTop = () => {
    this.refs.listRef.scrollToOffset({
      x: 0,
      y: 0,
      animated: true
    });
    !this.state.isHiddenHeaderFooter
      ? this.setState({
          isHiddenHeaderFooter: !this.state.isHiddenHeaderFooter
        })
      : null;
  };

  scrollEvent(event) {
    const { isHiddenHeaderFooter, isHiddenSearch } = this.state;
    let scrollLength = event.nativeEvent.contentOffset.y;

    scrollLength > 100 && !isHiddenSearch
      ? this.setState({
          isHiddenSearch: !isHiddenSearch
        })
      : null;

    scrollLength > 44 && !isHiddenHeaderFooter
      ? this.setState({
          isHiddenHeaderFooter: !isHiddenHeaderFooter
        })
      : null;
  }

  onEndReached = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => this.getData()
    );
  };

  renderItem = ({ item }) => {
    const { navigation } = this.props;
    return <Card data={item} navigation={navigation} />;
  };

  render() {
    const {
      news,
      isHiddenHeaderFooter,
      isHiddenSearch,
      modalVisible
    } = this.state;

    return (
      <View style={styles.container}>
        <Header isHiddenHeaderFooter={isHiddenHeaderFooter} />
        <SearchInput
          searchInput={this.state}
          clearQuery={this.clearQuery}
          handleKeySearch={this.handleKeySearch}
        />
        <FlatList
          data={news}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
          ref="listRef"
          onMomentumScrollBegin={event => {
            this.scrollEvent(event);
          }}
          onMomentumScrollEnd={() =>
            this.setState({
              isHiddenHeaderFooter: !isHiddenHeaderFooter
            })
          }
          onEndReached={this.onEndReached}
          onEndReachedThreshold={0.5}
        />
        <Footer
          isHiddenSearch={isHiddenSearch}
          modalVisible={modalVisible}
          isHiddenHeaderFooter={isHiddenHeaderFooter}
          updatePostsState={this.updatePostsState}
          scrollToTop={this.scrollToTop}
        />
        <SettingsModal
          settings={this.state}
          updatePostsState={this.updatePostsState}
          updateStateSettings={this.updateStateSettings}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1
  }
});
