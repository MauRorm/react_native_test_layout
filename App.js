import React, { Component } from "react";
import { NativeRouter, Route, Link } from "react-router-native";
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

import Login from './containers/login/login';

const CUSTOM_STATE = {
};


export default class VerticalStackLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { ...CUSTOM_STATE };
  } 

  render() {
    const { } = this.state;
    return (

      <NativeRouter>
      <View style={styles.container}>  
        <Route exact path="/" component={Login} />
        {
          /*
                  <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
          */
        }
      </View>
    </NativeRouter>

    );
  }
}



const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: '#3F2E71',
  },
});