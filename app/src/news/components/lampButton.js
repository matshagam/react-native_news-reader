import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Animated
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class LampButton extends React.Component {
  constructor() {
    super();
    this.Animation = new Animated.Value(0);
  }

  StartBackgroundColorAnimation = () => {
    this.Animation.setValue(0);
    Animated.timing(this.Animation, {
      toValue: 1,
      duration: 2000
    }).start(() => {
      this.StartBackgroundColorAnimation();
    });
  };

  render() {
    const { pressed, count } = this.props.lampButton;
    const { data } = this.props;
    const updateCardState = this.props.updateCardState;

    const BackgroundColorConfig = this.Animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['#FEFF21', '#fff9c4', '#FFFFE1']
    });

    return (
      <TouchableOpacity
        style={styles.lampOpacity}
        onPress={() => {
          updateCardState({
            count: !pressed ? count + 1 : count - 1,
            pressed: !pressed
          });
          !pressed ? this.StartBackgroundColorAnimation() : null;
        }}
      >
        <View style={styles.lampContainer}>
          <Animated.View
            style={
              pressed
                ? [
                    styles.containerStyle,
                    ,
                    { backgroundColor: BackgroundColorConfig }
                  ]
                : null
            }
          >
            <Ionicons style={styles.lampLogo} name="ios-bulb-outline" />
          </Animated.View>
          <Text style={styles.lampTxt}>{!pressed ? 'вкл' : 'выкл'}</Text>
        </View>
        <Text style={styles.lampTxt}>
          {count !== 0 ? +count + +data : data}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    height: 30,
    width: 30,
    alignSelf: 'center',
    borderRadius: 30
  },
  lampOpacity: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center'
  },
  lampContainer: {
    flexDirection: 'column'
  },
  lampLogo: {
    color: '#6b6b6b',
    fontSize: 27
  },
  lampTxt: {
    color: '#6b6b6b',
    width: 40,
    fontSize: 12,
    textAlign: 'center'
  }
});
