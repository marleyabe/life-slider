import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

import Slider from '@react-native-community/slider';
import { captureScreen } from "react-native-view-shot";
export default class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      defaultValue: 0,
      teste: 0
    }
  }

  render(){
    const sliderHeight = 35

    return(
      
      <View style={styles.component}>
        <View style={styles.border}>
          <View style={styles.container}>
            <View style={styles.menu}>
              <Text style={styles.title}>App Design</Text>
              <View style={styles.icons}>
                <TouchableOpacity
                  onPress={async () => {
                    this.setState({defaultValue: 1})
                    await new Promise(resolve => setTimeout(resolve, 1)) // 0.01
                    this.setState({defaultValue: 0})
                  }}>
                  <Image
                    style={styles.icon}
                    source={require('./src/img/refresh.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.classification}>
              <View style={styles.classificationItem}>
                <Text style={styles.item}>Feminino</Text>
                <Text style={styles.item}>Masculino</Text>
              </View>
              <Slider
                style={{height: sliderHeight, width: "110%", right: 0, left: -16}}
                minimumValue={-3}
                maximumValue={3}
                value={this.state.defaultValue}
                step={1}
                minimumTrackTintColor="lightgrey"
                maximumTrackTintColor="grey"
                thumbTintColor="lightgreen"
              />
              {/* ------- */}
              <View style={styles.classificationItem}>
                <Text style={styles.item}>Jovem</Text>
                <Text style={styles.item}>Experiente</Text>
              </View>
              <Slider
                style={{height: sliderHeight, width: "110%", right: 0, left: -16}}
                minimumValue={-3}
                maximumValue={3}
                value={this.state.defaultValue}
                step={1}
                minimumTrackTintColor="lightgrey"
                maximumTrackTintColor="grey"
                thumbTintColor="lightgreen"
              />
              {/* ------- */}
              <View style={styles.classificationItem}>
                <Text style={styles.item}>Simples</Text>
                <Text style={styles.item}>Detalhado</Text>
              </View>
              <Slider
                style={{height: sliderHeight, width: "110%", right: 0, left: -16}}
                minimumValue={-3}
                maximumValue={3}
                value={this.state.defaultValue}
                step={1}
                minimumTrackTintColor="lightgrey"
                maximumTrackTintColor="grey"
                thumbTintColor="lightgreen"
              />
              {/* ------- */}
              <View style={styles.classificationItem}>
                <Text style={styles.item}>Amigável</Text>
                <Text style={styles.item}>Autoridade</Text>
              </View>
              <Slider
                style={{height: sliderHeight, width: "110%", right: 0, left: -16}}
                minimumValue={-3}
                maximumValue={3}
                value={this.state.defaultValue}
                step={1}
                minimumTrackTintColor="lightgrey"
                maximumTrackTintColor="grey"
                thumbTintColor="lightgreen"
              />
              {/* ------- */}
              <View style={styles.classificationItem}>
                <Text style={styles.item}>Classico</Text>
                <Text style={styles.item}>Moderno</Text>
              </View>
              <Slider
                style={{height: sliderHeight, width: "110%", right: 0, left: -16}}
                minimumValue={-3}
                maximumValue={3}
                value={this.state.defaultValue}
                step={1}
                minimumTrackTintColor="lightgrey"
                maximumTrackTintColor="grey"
                thumbTintColor="lightgreen"
              />
              {/* ------- */}
              <View style={styles.classificationItem}>
                <Text style={styles.item}>Economico</Text>
                <Text style={styles.item}>Caro</Text>
              </View>
              <Slider
                style={{height: sliderHeight, width: "110%", right: 0, left: -16}}
                minimumValue={-3}
                maximumValue={3}
                value={this.state.defaultValue}
                step={1}
                minimumTrackTintColor="lightgrey"
                maximumTrackTintColor="grey"
                thumbTintColor="lightgreen"
              />
              {/* ------- */}
              <View style={styles.classificationItem}>
                <Text style={styles.item}>Divertido</Text>
                <Text style={styles.item}>Sério</Text>
              </View>
              <Slider
                style={{height: sliderHeight, width: "110%", right: 0, left: -16}}
                minimumValue={-3}
                maximumValue={3}
                value={this.state.defaultValue}
                step={1}
                minimumTrackTintColor="lightgrey"
                maximumTrackTintColor="grey"
                thumbTintColor="lightgreen"
              />
              {/* ------- */}
              <View style={styles.classificationItem}>
                <Text style={styles.item}>Exclusivo</Text>
                <Text style={styles.item}>Popular</Text>
              </View>
              <Slider
                style={{height: sliderHeight, width: "110%", right: 0, left: -16}}
                minimumValue={-3}
                maximumValue={3}
                value={this.state.defaultValue}
                step={1}
                minimumTrackTintColor="lightgrey"
                maximumTrackTintColor="grey"
                thumbTintColor="lightgreen"
              />
              {/* ------- */}
              <View style={styles.classificationItem}>
                <Text style={styles.item}>Industrial</Text>
                <Text style={styles.item}>Natural</Text>
              </View>
              <Slider
                style={{height: sliderHeight, width: "110%", right: 0, left: -16}}
                minimumValue={-3}
                maximumValue={3}
                value={this.state.defaultValue}
                step={1}
                minimumTrackTintColor="lightgrey"
                maximumTrackTintColor="grey"
                thumbTintColor="lightgreen"
              />
              {/* ------- */}
              <View style={styles.classificationItem}>
                <Text style={styles.item}>Delicado</Text>
                <Text style={styles.item}>Forte</Text>
              </View>
              <Slider
                style={{height: sliderHeight, width: "110%", right: 0, left: -16}}
                minimumValue={-3}
                maximumValue={3}
                value={this.state.defaultValue}
                step={1}
                minimumTrackTintColor="lightgrey"
                maximumTrackTintColor="grey"
                thumbTintColor="lightgreen"
              />
              {/* ------- */}
              <View style={styles.classificationItem}>
                <Text style={styles.item}>Casual</Text>
                <Text style={styles.item}>Elegante</Text>
              </View>
              <Slider
                style={{height: sliderHeight, width: "110%", right: 0, left: -16}}
                minimumValue={-3}
                maximumValue={3}
                value={this.state.defaultValue}
                step={1}
                minimumTrackTintColor="lightgrey"
                maximumTrackTintColor="grey"
                thumbTintColor="lightgreen"
              />
            </View>
          </View>
        </View>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  component : {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  border: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    width: "90%",
    height: "95%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    width: "90%",
    height: "95%",
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 15
  },
  classification: {
    marginTop: "7%",
    width: "100%",
    height: "92%",
    
  },
  classificationItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  }
})