import React from 'react';
import { Text, View, Image, Button, TextInput, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import GalleryScreen from './GalleryScreen';
import ImageScreen from './ImageScreen';

class UserSearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Suretgram',
    headerStyle: {
      backgroundColor: '#ffffff',
    },
    headerTintColor: '#333333',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }

  state = {
    username: ''
  }

  render(){
    return(
      <View style={styles.form}>
      
        <TextInput
            style={styles.input}
            label='Username'
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
            underlineColor='#159688'

            placeholder="Type username's name..."
          />

        <Button
          title="Найти"
          color="#1aa898"
          onPress={() => {
            this.props.navigation.navigate('Gallery', {
              username: this.state.username
            })
          }}
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  form: {
    padding: 50
  },
  input: {
    fontSize: 16
  }
})

const RootStack = createStackNavigator(
  {
    UserSearch: UserSearchScreen,
    Gallery: GalleryScreen,
    Image: ImageScreen
  },
  {
    initialRouteName: 'UserSearch',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}