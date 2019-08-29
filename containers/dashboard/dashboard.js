import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  ImageBackground
} from "react-native";
import {
  Input,
  ListItem,
  Header,
  Icon
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
  widthPrincipal: "100%"
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

    const styles = StyleSheet.create({
      containerBkd: {
        height: "100%",
        width: "100%",
       // backgroundColor: "#D11717",
        flexDirection: "row",
        flex: 1
      },

      item: {
        width: this.state.width,
        backgroundColor: "#DADDEA"
      },
      itemTwo: {
        flexWrap: 'wrap',
        width: this.state.widthPrincipal,
        //backgroundColor: "#1739D1",
        flexDirection: "column",
        height: '100%',
        position: 'relative'
      },

      container: {
        //backgroundColor: "#9B8ACB"
      },

      marginTopData: {
        marginTop: "200"
      },

      tamano:{
        height:'100%'
      }
    });

    return (
      <ImageBackground style={styles.tamano} source={require("../../assets/tumblr_ndsytwFGJ31sin489o1_500.gif")}>
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
            text: "Selecciona país",
            style: { color: "#fff" }
          }}
          rightComponent={{ icon: "home", color: "#fff" }}
        />
        <View style={styles.containerBkd}>
          <View style={styles.item}>
            <Text>menu</Text>
          </View>
          <View style={styles.itemTwo}>
            
            <ListItem
              leftAvatar={{ source: require("../../assets/mexico.png") }}
              title={"México"}
              subtitle={"Historias de los 32 estados de la república mexicana"}
              containerStyle={styles.container}
              contentContainerStyle={styles.container}
              onPress={() => {
                this.props.history.push("/historiesBoard/mx");
              }}
            />
            <ListItem
              leftAvatar={{ source: require("../../assets/inglaterra.png") }}
              title={"Inglaterra"}
              subtitle={"Historias de de la nueva y vieja Inglaterra"}
              containerStyle={styles.container}
              contentContainerStyle={styles.container}
              onPress={() => {}}
            />
            
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default withRouter(Dashboard);

/*



      <View>
        <View>
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
              text: "Selecciona país",
              style: { color: "#fff" }
            }}
            rightComponent={{ icon: "home", color: "#fff" }}
          />
        </View>

        <View style={styles.containerBkd}>
          <View style={styles.item}>
            <Text>oooo</Text>
          </View>
          <ScrollView style={styles.itemTwo}>
            <ListItem
              leftAvatar={{ source: require("../../assets/mexico.png") }}
              title={"México"}
              subtitle={"Historias de los 32 estados de la república mexicana"}
              containerStyle={styles.container}
              contentContainerStyle={styles.container}
              onPress={() => {
                this.props.history.push("/historiesBoard/mx");
              }}
            />
            <ListItem
              leftAvatar={{ source: require("../../assets/inglaterra.png") }}
              title={"Inglaterra"}
              subtitle={"Historias de de la nueva y vieja Inglaterra"}
              containerStyle={styles.container}
              contentContainerStyle={styles.container}
              onPress={() => {}}
            />
          </ScrollView>
        </View>
      </View>
    


*/
