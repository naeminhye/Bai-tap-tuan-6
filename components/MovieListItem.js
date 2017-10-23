import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
let posterURL = 'http://image.tmdb.org/t/p/w185/';

const itemHeight = 160;

export default class MovieListItem extends Component {
  render() {
    return (
      <View
        style={{
          height: itemHeight,
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <Image
          style={{ flex: 3, height: itemHeight }}
          resizeMode="cover"
          source={this.props.poster !== null ? { uri: posterURL + this.props.poster } : {uri: 'https://critics.io/img/movies/poster-placeholder.png' }}
        />
        <View
          style={{
            flex: 6,
            marginLeft: 10,
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}>
          <Text
            style={{ fontSize: 26, fontWeight: 'bold' }}
            ellipsizeMode="clip"
            numberOfLines={3}>
            {this.props.title}
          </Text>
          <Text style={{ fontSize: 20, color: '#2d2d2d', fontStyle: 'italic' }}>
            {this.props.release_date}
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Icon name="chevron-right" size={30} color="#000" />
        </View>
      </View>
    );
  }
}
