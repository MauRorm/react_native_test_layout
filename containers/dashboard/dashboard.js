import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView
} from "react-native";
import { Input, ListItem } from "../../components/react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { Redirect, withRouter } from "react-router-native";

import BgAudio from "react-native-background-audio";

const strings = {
  LOGIN: "Log In",
  WELCOME_TO_LOGIN: "Welcome to the login screen!",
  EMAIL_PLACEHOLDER: "Email",
  PASSWORD_PLACEHOLDER: "Password"
};

const colors = {
  BLACK: "#000",
  WHITE: "#FFF",
  DODGER_BLUE: "#428AF8",
  SILVER: "#BEBEBE",
  TORCH_RED: "#F8262F",
  MISCHKA: "#E5E4E6"
};

const CUSTOM_STATE = {
  login: "",
  password: ""
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...CUSTOM_STATE };
  }

  componentWillMount() {}

  handleEmailChange(email) {
    this.setState({ email: email });
  }

  handlePasswordChange(password) {
    this.setState({ password: password });
  }

  handleLoginPress() {
    console.log("Login button pressed");
  }

  render() {
    const list = [
      {
        name: "México",
        avatar_url: "../../assets/mexico.png",
        subtitle: "Historias de los 32 estados de la república mexicana"
      },
      {
        name: "Estados Unidos",
        avatar_url: "../../assets/inglaterra.png",
        subtitle: "Historias de los 52 estados de Estados Unidos de América"
      }
    ];
    const audio_options = {
      source: { local: require("../../assets/sh-lisas-theme.mp3") } //ex. require('./music/sample.mp3')
    };
    return (
      <ScrollView style={styles.container}>
        <ListItem
          leftAvatar={{ source: require("../../assets/mexico.png") }}
          title={'México'}
          subtitle={'Historias de los 32 estados de la república mexicana'}
          contentContainerStyle={styles.container}
          onPress={()=>{

          }}
        />
        <ListItem
          leftAvatar={{ source: require("../../assets/inglaterra.png") }}
          title={'Inglaterra'}
          subtitle={"Historias de de la nueva y vieja Inglaterra"}
          contentContainerStyle={styles.container}
          onPress={()=>{

          }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF"
  },
  logo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  }
});

export default withRouter(Dashboard);
