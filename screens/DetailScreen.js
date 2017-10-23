import React from 'react';
import {
    View,
    StyleSheet,
    Button,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import API from '../api';

let fullsizePosterURL = 'https://image.tmdb.org/t/p/original';

export default class DetailScreen extends React.Component {
    constructor(props) {
      super(props);
      const { params } = this.props.navigation.state;
  
      this.state = {
          title: '',
          release_date: '',
          original_title: '',
          genres: [],
          overview: '',
          status: '',
          tagline: '',
          poster_path: '',
      };

      API.detail(params.id).then(data => {
        this.setState({
            title: data.title,
            release_date: data.release_date,
            original_title: data.original_title,
            genres: data.genres,
            overview: data.overview,
            status: data.status,
            tagline: data.tagline,
            poster_path: data.poster_path,
        });
      });

      //this._genres = this._genres.bind(this);
    }

    _genres() {
        console.log(this.state.genres);
        return this.state.genres.map((gen, i) => {
            return (
                <View key={i}>
                    <Text style={{ fontStyle: 'italic', margin: 3, color: 'blue' }}>{gen.name}</Text>
                </View>
            );
        });
    }

    static navigationOptions = {
        header: null,
    };

    render() {
        const { goBack } = this.props.navigation;
        const { params } = this.props.navigation.state;
        return(
            <View style={styles.container}>
                <View style={{ height: 80, paddingLeft: 20, justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => goBack() }>
                        <Icon name='chevron-left' size={30}/>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image
                        style={{ flex: 1, marginLeft: 20, marginRight: 15, }}
                        resizeMode="cover"
                        source={this.state.poster_path !== null ? { uri: fullsizePosterURL + this.state.poster_path } : { uri: 'https://critics.io/img/movies/poster-placeholder.png' }}
                    />
                    <View style={{ flex: 2, marginRight: 10, flexDirection: 'column', justifyContent: 'flex-start', paddingTop: 20, }}>
                        <Text style={{ fontSize: 28, fontWeight: 'bold' }} numberOfLines={2}>{this.state.title}</Text>
                        <Text style={{ fontSize: 18 }} numberOfLines={2}>Original Title: {this.state.original_title}</Text>
                        <Text style={{ fontSize: 18 }}>Release Date: {this.state.release_date}</Text>
                        <Text style={{ fontSize: 18 }}>Status: {this.state.status}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            {this._genres()}
                        </View>
                    </View>
                </View>
                <View style={{ flex: 2, padding: 20 }}>
                    <Text style={{ fontSize: 24, fontWeight: '600', fontStyle: 'italic', marginBottom: 10 }}>
                        {this.state.tagline}
                    </Text>
                    <Text style={{ fontSize: 18 }} numberOfLines={5}>{this.state.overview}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#fff',
        paddingTop: 20,
    },
});