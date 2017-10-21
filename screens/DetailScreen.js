import React from 'react';
import {
    View,
    StyleSheet,
    Button,
    Text
} from 'react-native';

export default class DetailScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
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