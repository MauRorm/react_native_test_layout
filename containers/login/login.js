import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ImageBackground
} from "react-native";
import { Input } from "../../components/react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { Redirect, withRouter } from "react-router-native";
import moment from "moment";

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
  password: "",
  dayMoment: ""
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...CUSTOM_STATE };
  }

  componentWillMount() {
    var currentTimeR= moment();    // e.g. 11:00 pm
    var startTime = moment('07:30 pm', "HH:mm a");
    var endTime = moment('11:59:00 pm', "HH:mm a");

    var startTimeTwo = moment('12:00 am', "HH:mm a");
    var endTimeTwo = moment('07:20 am', "HH:mm a");

    var startTimeThree = moment('07:21 am', "HH:mm a");
    var endTimeThree = moment('07:29:00 pm', "HH:mm a");


    const amIBetween = currentTimeR.isBetween(startTime , endTime);
    if (
      currentTimeR.isBetween(startTime , endTime) === true
    ) {
      this.setState({
        dayMoment: "night"
      });
    } else if (
      currentTimeR.isBetween(startTimeTwo , endTimeTwo) === true
    ) {
      this.setState({
        dayMoment: "night"
      });
    } else if (
      currentTimeR.isBetween(startTimeThree , endTimeThree) === true
    ) {
      this.setState({
        dayMoment: "morning"
      });
    } else {
      this.setState({
        dayMoment: "morning"
      });
    }
  }

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
    const audio_options = {
      source: { local: require("../../assets/sh-lisas-theme.mp3") } //ex. require('./music/sample.mp3')
    };
    const { dayMoment } = this.state;
    return (
      <ImageBackground
        style={styles.container}
        source={
          dayMoment === "night"
            ? require("../../assets/tumblr_m7im2ftfI81rtuzomo1_500.gif")
            : require("../../assets/1509811479_raining.gif")
        }
      >
        <BgAudio options={audio_options} />
        <View style={styles.formContiner}>
          <View style={styles.form}>
            <Input
              placeholder="Usuario"
              leftIcon={<Icon name="user" size={24} color="black" />}
              value={this.state.login}
              editable={true}
              onChangeText={login => this.setState({ login })}
            />
          </View>
          <View style={styles.form}>
            <Input
              placeholder="Contraseña"
              leftIcon={<Icon name="unlock-alt" size={24} color="black" />}
              value={this.state.password}
              editable={true}
              onChangeText={password => this.setState({ password })}
            />
          </View>
          <Button
            onPress={() => {
              this.props.history.push("/dashboard");
            }}
            style={styles.formButton}
            title="Entrar"
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F2E71",
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover"
  },
  logo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center"
  },
  formContiner: {
    height: '100%'
  },
  form: {
    marginTop: "30%"
  },
  formButton: {
    marginTop: "60%"
  }
});

export default withRouter(Login);
