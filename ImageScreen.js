import React from 'react';
import { Image, StyleSheet } from 'react-native';

class ImageScreen extends React.Component {
  static navigationOptions = {
    title: 'Image',
    header: null
    
  }

  render() {
    const { navigation } = this.props;
    const image_url = navigation.getParam('image_url', 'https://pbs.twimg.com/profile_images/757974066011770880/ae2Eop2g_400x400.jpg');

    return (
      <Image source={{uri: image_url}} style={styles.image} resizeMode="contain"/>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
})

export default ImageScreen

