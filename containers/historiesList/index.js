import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView
} from "react-native";
import {
  Input,
  ListItem,
  Header,
  Icon,
  Divider,
} from "../../components/react-native-elements";
import { Col, Row, Grid } from "react-native-easy-grid";
//import Icon from "react-native-vector-icons/FontAwesome";
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
  width: "0%",
  isOpenMenu: false,
  widthPrincipal: "100%",
  searchText:'',
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...CUSTOM_STATE };
  }

  componentWillMount() {
    //this.props.match.params.idCountry
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
    const {
      searchText,
    } = this.state;
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

    const styles = StyleSheet.create({
      containerBkd: {
        height: "100%",
        width: "100%",
        backgroundColor: "#D11717",
        flexDirection: "row",
        flex: 1
      },

      item: {
        width: this.state.width,
        backgroundColor: "#DADDEA"
      },
      itemTwo: {
        flexWrap: "wrap",
        width: this.state.widthPrincipal,
        backgroundColor: "#1739D1",
        flexDirection: "column",
        height: "100%",
        position: "relative"
      },

      container: {
        backgroundColor: "#9B8ACB"
      },

      marginTopData: {
        marginTop: "200"
      },

      tamano: {
        height: "100%"
      }
    });

    return (
      <View style={styles.tamano}>
        <Header
          placement={"left"}
          leftComponent={() => {
            return (
              <Icon
                name="navicon"
                type="evilicon"
                color="#FFFFFF"
                onPress={() => {
                  if (this.state.isOpenMenu === false) {
                    this.setState({
                      width: "50%",
                      widthPrincipal: "50%",
                      isOpenMenu: true
                    });
                  } else {
                    this.setState({
                      width: "0%",
                      widthPrincipal: "100%",
                      isOpenMenu: false
                    });
                  }
                }}
              />
            );
          }}
          centerComponent={{
            text: "Busca una historia",
            style: { color: "#fff" }
          }}
          rightComponent={() => {
            return (
              <Icon
                name="arrow-left"
                type="evilicon"
                color="#FFFFFF"
                onPress={() => {
                  this.props.history.push("/dashboard");
                }}
              />
            );
          }}
        />
        <View style={styles.containerBkd}>
          <View style={styles.item}>
            <Text
              onPress={()=>{
                this.props.history.push("/");
              }}
            >Logout</Text>
            <Divider style={{ backgroundColor: 'blue' }} />
          </View>
          <View style={styles.itemTwo}>
            <Input
              value={searchText}
              placeholder="Busca titulo de historia"
              leftIcon={{ type: "font-awesome", name: "chevron-left" }}
              onChangeText={searchText => this.setState({ searchText })}
            />
            <ScrollView>
            <ListItem
              title={"Niña del metro Tacubaya"}
              subtitle={"Lo anterior ha derivado en historias de presuntas extrañas energías dentro de sus estructuras, que salen a flote en forma de 'fantasmas' y 'espectros'."}
              containerStyle={styles.container}
              contentContainerStyle={styles.container}
              onPress={() => {
                //this.props.history.push("/historiesBoard/mx");
              }}
            />
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

export default withRouter(Dashboard);
