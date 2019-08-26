import React, { Component } from "react";
import { NativeRouter, Route, Link, Switch } from "react-router-native";
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

import Login from "./containers/login/login";
import Dashboard from "./containers/dashboard/dashboard";
import HistoriesList from "./containers/historiesList";

const CUSTOM_STATE = {};

export default class VerticalStackLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { ...CUSTOM_STATE };
  }

  render() {
    const {} = this.state;
    return (
      <NativeRouter style={styles.container}>
        <View style={styles.item}>
          <Route exact path="/" component={Login} />
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route
              exact
              path="/historiesBoard/:idCountry"
              component={HistoriesList}
            />
            {/*
                  <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
          */}
          </Switch>
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    height: "100%",
    width: "100%",
    backgroundColor: "#AAAAAA"
  },
  item: {
    width: "100%",
    height: "100%",
    backgroundColor: "#3F2E71"
  }
});
