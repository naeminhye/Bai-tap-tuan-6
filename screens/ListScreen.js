import React from 'react';
import {
    View,
    StyleSheet,
    Button,
    Text,
    ScrollView,
    ListView,
    Image,
} from 'react-native';
import { SearchBar } from 'react-native-elements'
import API from '../api';

export default class ListScreen extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        query: '',
        totalResults: 0,
        totalPages: 1,
        results: [],
        currentPage: 1,
      };
    }

    findMovies(query, page) {
        API(query, page).then(data => {
          this.setState({
            totalResults: data.total_results,
            results: data.results,
            totalPages: data.total_pages,
          });
        });
      }

    static navigationOptions = {
        header: null
      };

    render() {
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
            <View style={{ paddingTop: 60, paddingLeft: 20, paddingRight: 20 }}>
                <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 10, }}>Search</Text>
                <SearchBar
                    lightTheme
                    ref={search => (this.search = search)}
                    onChangeText={_text => {
                    this.setState({
                        query: _text,
                    });
                    }}
                    placeholder="Search Movie..."
                    returnKeyType="search" 
                    onSubmitEditing={() => {
                        this.findMovies(this.state.query, this.state.currentPage);
                    }}
                    containerStyle={styles.searchContainer}
                    inputStyle={styles.searchInput} />
            </View>
            { this.state.totalResults === 0 ? 
                (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{ fontSize: 24, fontWeight: '600', color: '#CCCCCC' }}>No Result</Text>
                </View>)
                :(<View>
                    <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 10 }}>Found: {this.state.totalResults} results in {this.state.totalPages} pages.</Text>
                    <ScrollView style={{ padding: 10 }}>
                        {this.state.results.map((movie, index) => (
                            <View key={index}>
                                <Text>Title: {movie.title}</Text>
                                <Text>Release Date: {movie.release_date}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            )}
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#fff',
    },
    searchContainer: {
        backgroundColor: '#fff',
        marginBottom: 20,
    },
    searchInput: {
        backgroundColor: '#ccc',
    }
});