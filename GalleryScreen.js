import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import GridView from 'react-native-gridview';

const itemsPerRow = 3;

class GalleryScreen extends React.Component {
  state = {
    isLoading: true,
    username: ''
  }
    
	static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.username,
    headerStyle: {
      backgroundColor: '#ffffff',
    },
    headerTintColor: '#333333',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  });

  componentDidMount(){
    const { navigation } = this.props;
    const username = navigation.getParam('username', 'default')

    this.setState({
      username: username
    })

    return fetch(`https://apinsta.herokuapp.com/u/${username}`)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.graphql.user.edge_owner_to_timeline_media.edges,
        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  callFun = () =>
  {
 
    alert("Image Clicked!!!");
 
  }

  render() {
    if (this.state.isLoading) {
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <ScrollView>

      <GridView
          data={this.state.dataSource}
          dataSource={null}
          itemsPerRow={itemsPerRow}
          renderItem={(item) => {
            return (
              <TouchableOpacity 
                activeOpacity = { .5 }
                onPress={() => {
                  this.props.navigation.navigate('Image', {
                    image_url: item.node.display_url
                  })

                }}>
                <Image source={{uri: item.node.display_url}} style={{width: 193, height: 110}}/>

              </TouchableOpacity>

             
            );
          }}
        />


      </ScrollView>

     
    )
  }
}

export default GalleryScreen

