import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Alert,
  TouchableOpacity,
  Platform,
  ScrollView
} from "react-native";

let { height } = Dimensions.get("window");

const CUSTOM_STATE = {
  selectedTab: null,
  movies: [],
};

export default class VerticalStackLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { ...CUSTOM_STATE };
  }

  renderSection(selectedTab = null) {
    
    switch (selectedTab) {
      case "1":
        return <ScrollView>
          {
             <Text>uno</Text>
          }
        </ScrollView>;
        break;
      case "2":
        return <Text>dos</Text>;
        break;
      case "3":
        return <Text>Tres</Text>;
        break;
      default:
        return null;
    }
  }

  render() {
    let box_count = 3;
    let box_height = height / box_count;
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: "column"
      },
      box: {
        height: box_height
      },

      //header
      tabs: {
        height: "15%",
        backgroundColor: "white",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row"
      },
      //content
      body: {
        height: "80%",
        backgroundColor: "white"
      },
      //footer
      footer: {
        height: "5%",
        backgroundColor: "#e3aa1a"
      },

      tabOne: {
        width: "33.33%",
        backgroundColor: "#5DCBEE"
      },
      tabTwo: {
        width: "33.33%",
        backgroundColor: "#0EBFF7"
      },
      tabThree: {
        width: "33.33%",
        backgroundColor: "#79CBE5"
      },

      tabsText: {
        fontSize: 40,
        textAlign: "center"
      }
    });
    const { selectedTab } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.tabs}>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                selectedTab: "1"
              });
            }}
            style={styles.tabOne}
          >
            <Text style={styles.tabsText}>Tab1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                selectedTab: "2"
              });
            }}
            style={styles.tabTwo}
          >
            <Text style={styles.tabsText}>Dos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                selectedTab: "3"
              });
            }}
            style={styles.tabThree}
          >
            <Text style={styles.tabsText}>Tres</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.body}>
          {this.renderSection(selectedTab)}
        </ScrollView>
        <View style={styles.footer} />
      </View>
    );
  }
}
