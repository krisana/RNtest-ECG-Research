import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions, PixelRatio } from 'react-native';
import { Actions } from 'react-native-router-flux';
const ratio = PixelRatio.get();
const basePaddingHeader = 10;
const paddingHeader = basePaddingHeader * ratio;

class Layout extends Component {
  constructor() {
    super();
    this.state = {};
  }

  renderBack = () => {
    if(this.props.back) {
      return (
        <TouchableOpacity onPress={() => Actions.pop()} style={styles.iconBackContainer} >
          <Image source={require('../../assets/icons/arrow-back.png')} style={styles.iconBack} />
        </TouchableOpacity>
      );
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          {this.renderBack()}
          <Text style={styles.navBarTitle}>{this.props.navBarTitle}</Text>
        </View>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: paddingHeader,
    position: 'relative',
  },
  iconBackContainer: {
    position: 'absolute',
    left: 15,
    top: 15,
  },
  iconBack: {
    height: 24,
    width: 24,
  },
  navBar: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: Dimensions.get('window').width,
    backgroundColor: '#ffffff',
  },
  navBarTitle: {
    fontSize: 20,
    textAlign: 'center'
  }
});

export default Layout;