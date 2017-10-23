import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
let posterURL = 'http://image.tmdb.org/t/p/w185/';

const itemHeight = 150;

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
          style={{ flex: 2, height: itemHeight }}
          resizeMode="cover"
          source={{ uri: posterURL + this.props.poster }}
        />
        <View
          style={{
            flex: 5,
            marginLeft: 10,
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}>
          <Text
            style={{ fontSize: 20, fontWeight: 'bold' }}
            ellipsizeMode="clip"
            numberOfLines={2}>
            {this.props.title}
          </Text>
          <Text style={{ fontSize: 16, color: '#2d2d2d' }}>
            {this.props.release_date}
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Icon name="chevron-right" size={15} color="#000" />
        </View>
      </View>
    );
  }
}
