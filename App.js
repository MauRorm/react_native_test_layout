import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Alert,
  TouchableOpacity,
  Platform
} from "react-native";

let { height } = Dimensions.get("window");

const CUSTOM_STATE = {
  rows: [
    {
      id: 1,
      styleBox: "box1"
    },
    {
      id: 2,
      styleBox: "box2"
    },
    {
      id: 3,
      styleBox: "box3"
    }
  ],
  location: null
};

export default class VerticalStackLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { ...CUSTOM_STATE };
  }

  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);

        this.setState({ location });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  render() {
    const { rows } = this.state;
    let box_count = rows.length;
    let box_height = height / box_count;
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: "column"
      },
      box: {
        height: box_height
      },
      box1: {
        backgroundColor: "#2196F3"
      },
      box2: {
        backgroundColor: "#8BC34A"
      },
      box3: {
        backgroundColor: "#e3aa1a"
      }
    });
    return (
      <View style={styles.container}>
        {rows.map(item => {
          return (
            <View key={item.id} style={[styles.box, styles[item.styleBox]]}>
              <TouchableOpacity onPress={this.findCoordinates}>
                <Text style={styles.welcome}>Find My Coords?</Text>
                <Text>Location: {this.state.location}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  }
}
