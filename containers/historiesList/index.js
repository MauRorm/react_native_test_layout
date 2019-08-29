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
  Icon,
  Divider,
  Overlay
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
  searchText: "",
  isOpenModal: false,
  historyItem: {}
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
    const { searchText } = this.state;
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
        //backgroundColor: "#D11717",
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
        //backgroundColor: "#1739D1",
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

    const historiesArray = [
      {
        id: "0001-34fc-rtgr-eft5",
        title: "cuerpos en puentes",
        text:
          "En si los cimientos hay cuerpos de personas q murieron ahí cuando se cayó el puente mitad de contribucion pero como la mayoría eran inmigrantes todo se quedó ahí",
        fecha: "26-08-2019",
        idCountry: "mx"
      },
      {
        id: "0001-34rc-rtqr-e3m5",
        title: "cuerpos en puentes",
        text:
          "En la carretera nueva de barranca larga a ventanilla ( puerto escondido) una amiga ingeniera civil me platicó que un túnel no lo podían colar por qué sucedían cosas muy extrañas, después de muchos atrasos lo lograron pero al parecer el encargado de la obra realizó un pacto que nadie supo de que trató",
        fecha: "26-08-2019",
        idCountry: "mx"
      },
      {
        id: "0201-34rc-rtqr-e3m5",
        title: "cuerpos en puentes 2",
        text:
          " Bueno pero en realidad si fallecieron 11 personas en el lugar cuando se estaba colando la última sección del puente, ahí abajo esta una capilla muy pequeña con 11 cruces, lo se por que mi tío trabajó en ese tramo carretero y recuerdo cuando lo íbamos a ver y no estaba ninguna estructura del puente Calapa! También se accidentaron varios Yuncles y tractores.",
        fecha: "26-08-2019",
        idCountry: "mx"
      },
      {
        id: "0001-34rc-rtqr-e4ym5",
        title: "cuerpos en puentes",
        text:
          ' Tengo familiares que trabajaron en la construcción de ese tramo de la carretera y ellos presenciaron varios " accidentes" que hicieron que trabajadores cayeran a las fozas cuando se estaba armando las pilotes, esas personas caían ahí y nos los sacaban, los dejaron enterrados.' +
          'También existen historias de lo que ahora es la antigua carretera que conectaba a puebla con la ciudad de Oaxaca, en el tramo de la carbonera a Telixtlahuaca existen varios puntos donde se ven fenómenos no normales, en en el lugar que le llaman en "el catrin" le dice así porque muchas personas han visto a una persona vestida de manera muy elegante.',
        fecha: "26-08-2019",
        idCountry: "mx"
      },
      {
        id: "0001-344gc-rtqr-e3m5",
        title: "cuerpos en puentes",
        text:
          "Hay muchas historias, y la mayoría son reales, por eso los abuelitos de antes dicen, que cuando se va a hacer una obra que se tiene k hablar con el lugar bueno al menos haci lo hacen en mi pueblo de San Miguel el Grande Oaxaca. y que es hablar con el lugar, es pedirle permiso a las tierras, le echan su derecho que es comida, cerveza, aguardiente, refresco etc. Y al mismo tiempo se convive. Para k el lugar este satisfecho, y deje trabajar tranquilo y no aya accidentes a la hora, de trabajar oh después. Saludos desde Baja California.",
        fecha: "26-08-2019",
        idCountry: "mx"
      },
      {
        id: "03f01-34rc-f7qr-e3m5",
        title: "cuerpos en puentes",
        text:
          "Esos es verdad, mi padre trabajo con ingenieros,cuando estaban haciendo una carretera hacia un pueblo a oaxaca, un día el ingeniero no estaba, y llego un hombre muy bien vestido preguntando por el ingeniero, que salio de la nada,que quería hablar con él, qué quería su parte, para eso el lugar donde estaban trabajando era muy difícil de pasar , tenían que dinamitar y aun así, no se dejaba el lugar, entonces se tuvo que dar ofrendas, al dueño del lugar , para poder pasar en ese lugar . es algo increíble, pero cierto.",
        fecha: "26-08-2019",
        idCountry: "mx"
      },
      {
        id: "0001-34rc-rtqr-e3m5",
        title: "cuerpos en puentes",
        text:
          "Me paso algo muy parecido cuando viajaba en ADO rumbo a puebla, iba en el aciento número 1 ya era tarde como las 2 de la mañana y justo al llegar a donde están los ventiladores (o generadores de energía eólica) se nos atravesó un rebaño de chivos y el de hasta atrás era el más grande,estaba parado en 2 patas y casi media lo que el autobús, lo más extraño es que solo el conductor y yo vimos todos los chivos, porqué cuando el conductor se frenó para no atropellarlos las personas le preguntaban que porque se frenó y cuando les decíamos el porque decían que no veían nada, durante todo el viaje a Puebla e incluso cuando llegamos a la CAPU yo iba escuchando una risa de niños, por eso ya no vuelvo a viajar de madrugada a Puebla.",
        fecha: "26-08-2019",
        idCountry: "mx"
      },
      {
        id: "0001-368rc-r2sqr-e3m5",
        title: "cuerpos en puentes",
        text:
          "Yo soy piloto custodio, la verdad desde que empiezas a bajar hacia el puente, circulación Puebla- Oaxaca se siente pesado hasta el km 110 casi llegando al rodeo,me ha tocado subir en la noche o madrugada en ese tramo, despacio y la neta la parte que se siente más pesada es cuando estás cerca del túnel o por la falla geológica,no manches se me pone hasta la piel chinita siento que alguien me observa desde los cerros",
        fecha: "26-08-2019",
        idCountry: "mx"
      },
      {
        id: "0s301-34rc-r5tqr-e3m5",
        title: "cuerpos en puentes",
        text:
          "En la cd de México, en la estación Barranca del muerto, diario tiraban los andamios cuando construían el puente una noche se quedaron los ingenieros y algunos trabajadores entre ellos mi tío para ver quién deshacía el trabajo y dice que a las 3 am salió un Hombre muy bien vestido y preguntó por el ingeniero. Y le pidio 100 cadáveres si quería continuar la obra. Así que fueron a comprarlos en el servicio médico forense,",
        fecha: "26-08-2019",
        idCountry: "mx"
      },
      {
        id: "0001-34rc-rtqr-e3m5",
        title: "cuerpos en puentes",
        text:
          'Por lo regular siempre pasa eso en las construcciones carreteras , en el pueblo donde viven mis abuelos ( san Isidro paso ancho en oaxaca ) cuenta mi abuela que cuando se hizo el puente que comunica la población con otras mas , se les aviso que nadie se acercará ala construcción ( niños , hombres , mujeres ) durante la construcción nadie pasaba por ahí , después que se inauguró notaron que debajo habían veladoras a los pies del puente cuenta mi abuela que son las personas que murieron ahí " accidentalmente ',
        fecha: "26-08-2019",
        idCountry: "mx"
      },
      {
        id: "0001-3467c-rtqr-d45m5",
        title: "cuerpos en puentes",
        text:
          " Yo en lo personal un tio mio rentaba unos cuartos cerca de su pobre casa (cerca de la autopista puebla mexico donde hiciero el segundo piso) una tia les ofrecio venderles comida por q no eran del estado de puebla y no sabian moverse por la ciudad una ocasion me encontre a mi tia y la ayude a llevar las hoyas de comida, me acuerdo q fue un viernes en la noche por lo de costumbre siempre los viernes les pagaban y mi tia les cobraba a todos los q les vendia comida a los inquilinos q hay rentaban,una ocasion los inquilinos estaban esperando a mi tia creo q era un grupo de una pantilla conformado por 6 trabajadores solo estaban esperando a mi tia para pagarle por q ya se ivan (la verdad es gente honrada q es ley)mi tia les pregunto q paso muchachos ya no queriendo decir nos platicaron q vieron y presenciaron algo mal pero en su angustia y miedo no querian decirnos bien ya un poco calmados nos platicaron q un ing.mando a un trabajor a bajar a un pozo q para q amarrara unas varrillas (por lo regular estas contrucciones se realizaban de noche para no entorpezer el trafico)y cuando bajo aquel trabajador el ing.mando al de la revolvedora a vaciar todo el cemento enterrandole vivo en aquel momento los q presenciaron aquel disque accidente temerosos por las atrozidades q se llevaban en la contruccion decidieron huir y mejor seguir vivos q por un dinero ser enterrados en el tiempo q duro la obra iva y venian trabajadores nuevos solo Dios sabra cual de esos q rentaban llegaron con vida a sus casas",
        fecha: "26-08-2019",
        idCountry: "mx"
      },
      {
        id: "0001-34rc-rtqr-e3m5",
        title: "cuerpos en puentes",
        text:
          " En la Sierra mixe cuando pasó la carretera Oaxaca-zacatepec mixe sucedieron muchos de esos sacrificios, se cuentan historias de los abuelos que vieron esos sucesos y ahora que pasó la autopista Oaxaca-Tehuantepec por territorio Zapoteca y Mixe en la sierra comenzó de nuevo. No es nada fuera de lo común que esa pista nunca se encuentra bien hay derrumbes, muchos accidentes y conflictos.",
        fecha: "26-08-2019",
        idCountry: "mx"
      },
      {
        id: "0001-34rc-rtqr-e3m5",
        title: "cuerpos en puentes",
        text:
          " En uno de los tantos hoteles de Acapulco existe una leyenda urbana que cuenta que por las noches los empleados de recepción reciben la llamada de una niña que pide servicio a su habitación. La pequeña pide chocolates y dulces, pero cuando los empleados revisan el registro esa habitación está desocupada." +
          "Esta fotografía la tomo uno de los empleados de ese hotel, mismo que señala que en la habitación de la niña fantasma se prenden y apagan las luces y la televisión por sí solas y hasta la fecha nadie sabe la razón de esta fantasmal aparición.",
        fecha: "26-08-2019",
        idCountry: "mx"
      },
      {
        id: "0001-34rc-rtqr-e3m5",
        title: "cuerpos en puentes",
        text:
          " yo trabajaba en un pueblo cercano a ahí se llama atenango adelante de Tonalá , ahí se cuenta la historia diferente incluso hablan de una León muy grande que habita la montaña de una mujer que la miran en los Montes y de un simio muy grande son algunas cosas que la gente de ahí me contaba",
        fecha: "26-08-2019",
        idCountry: "mx"
      },
      {
        id: "0001-34rc-rtqr-e3m5",
        title: "cuerpos en puentes",
        text:
          "En una ocasión que regresaba a mitla del trabajo, cerca de las 10pm justo una semana antes de todos Santos pasando el crucero de macuilxochitl hay una ligera curva, justo al pasar la curva y ya subiendo la loma, sentí una gran pesadez como cuando te quedas dormido pero fue instantáneo ya que no estaba cansado, como si me iluminarán las luces de un coche que iban en sentido contrario a unos 100 metros más o menos vi las siluetas de varias personas caminado sobre la carretera a manera de procesión en ese momento instintivamente frene de golpe, (no quemando llanta) para no atropellarlos ese frenon me puso alerta de nuevo y note que no venía ningún carro y tampoco había nadie en la carretera.",
        fecha: "26-08-2019",
        idCountry: "mx"
      }
    ];

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
              onPress={() => {
                this.props.history.push("/");
              }}
            >
              Logout
            </Text>
            <Divider style={{ backgroundColor: "blue" }} />
          </View>
          <View style={styles.itemTwo}>
            <Input
              value={searchText}
              placeholder="Busca titulo de historia"
              leftIcon={{ type: "font-awesome", name: "chevron-left" }}
              onChangeText={searchText => this.setState({ searchText })}
            />
            <ScrollView>
              {historiesArray.map(item => {
                return (
                  <View>
                    <ListItem
                      title={item.title}
                      subtitle={item.text.substring(0, 20) + "..."}
                      containerStyle={styles.container}
                      contentContainerStyle={styles.container}
                      onPress={() => {
                        this.setState({
                          isOpenModal: true,
                          historyItem: item
                        });
                      }}
                    />
                    <Divider style={{ backgroundColor: "blue" }} />
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>

        <Overlay
          onBackdropPress={() => this.setState({ isOpenModal: false })}
          isVisible={this.state.isOpenModal}
        >
          <Text>{this.state.historyItem.title}</Text>
          <ScrollView>
            <Divider style={{ backgroundColor: "blue" }} />
            <Text>{this.state.historyItem.text}</Text>
          </ScrollView>
        </Overlay>
      </ImageBackground>
    );
  }
}

export default withRouter(Dashboard);
