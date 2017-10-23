import React from 'react';
import {
    View,
    StyleSheet,
    Button,
    Text,
    Image
} from 'react-native';

let fullsizePosterURL = 'https://image.tmdb.org/t/p/original';

export default class DetailScreen extends React.Component {
    render() {
        const { params } = this.props.navigation.state;
        return(
            <View style={styles.container}>
                <Image
                style={{ width: 200, height: 350 }}
                resizeMode="cover"
                source={{ uri: fullsizePosterURL + params.movie.poster_path }}
                />
                <Text>This is Detail Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});