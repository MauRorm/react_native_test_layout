import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Alert,
  TouchableOpacity,
  Platform,
  ScrollView,
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
};

export default class VerticalStackLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { ...CUSTOM_STATE };
  }


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


//header
box1: {
  flex: 1,
  backgroundColor: '#2196F3'
},
//content
box2: {
  flex: 10,
  backgroundColor: '#8BC34A'
},
//footer
box3: {
  flex: .5,
  backgroundColor: '#e3aa1a'
}

    });
    return (
      <View style={styles.container}>
        {rows.map(item => {
          return (
            <ScrollView key={item.id} style={[styles.box, styles[item.styleBox]]}>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
              <Text>mckdmckmdkcmdkmcdkmckdmckmdckmdckmdkmcldkmckdmcm</Text>
            </ScrollView>
          );
        })}
      </View>
    );
  }
}
