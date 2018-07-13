import { AsyncStorage } from "react-native";

export const tagsStyles = {
  span: {
    fontSize: 16
  },
  p: {
    fontSize: 16,
    padding: 15,
    paddingBottom: 0
  },
  img: {
    marginTop: 15
  },
  a: {
    color: "#000",
    textDecorationLine: "none"
  },
  strong: {
    fontSize: 16
  },
  h3: {
    padding: 15,
    paddingBottom: 0,
    fontWeight: "600",
    fontSize: 17
  }
};

// TODO: подумать как использовать сохранение и чтение данных в памяти

export function setAsync(key, value) {
  return AsyncStorage.setItem(key, JSON.stringify(value));
}

/* saveData = () => {
  setAsync('dataSettings', this.state);
}; */

export function getAsync(key) {
  return AsyncStorage.getItem(key).then(data => JSON.parse(data));
}

export function clearAsync(key) {
  return AsyncStorage.removeItem(key);
}

/* loadData = () => {
  getAsync('dataSettings').then(dataSettings => {
 func what to do...
  });
  clearAsync('dataSettings');
}; */

export const MY_MAC_SERVER = `http://192.168.1.46:3000/posts`;

export function fetchDATA(key) {
  return fetch(key).then(response => response.json());
}

export const filterData = ["title, description, pubDate, image, count, id"];
