import React from 'react';
import { 
    View, 
    StyleSheet, 
    Text, 
    TextInput, 
    ListView, 
    TouchableOpacity 
} from 'react-native';
import API from '../api';
import MovieListItem from '../components/MovieListItem';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class ListScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      totalResults: 0,
      totalPages: 1,
      results: [],
      currentPage: 1,
      dataSource: ds.cloneWithRows([]),
    };
  }

  findMovies(query, page) {
    API.search(query, page).then(data => {
      this.setState({
        totalResults: data.total_results,
        results: data.results,
        totalPages: data.total_pages,
        dataSource: ds.cloneWithRows(data.results),
      });
    });
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{ paddingTop: 40, paddingLeft: 20, paddingRight: 20 }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 10 }}>
            Search
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <TextInput
              ref={search => (this.search = search)}
              onChangeText={_text => {
                this.setState({
                  query: _text,
                });
              }}
              style={styles.search}
              placeholder="Search Movie..."
              returnKeyType="search"
              onSubmitEditing={() => {
                this.findMovies(this.state.query, this.state.currentPage);
              }}
            />
          </View>
        </View>
        {this.state.totalResults === 0
          ? <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{ fontSize: 24, fontWeight: '600', color: '#CCCCCC' }}>
                No Result
              </Text>
            </View>
          : <View>
              <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 10, marginBottom: 10 }}>
                Found: {this.state.totalResults} results in {this.state.totalPages} pages.
              </Text>
              <View>
                <ListView
                  style={{ padding: 10 }}
                  dataSource={this.state.dataSource}
                  renderRow={rowData => (
                    <TouchableOpacity onPress={() => navigate('Detail', { id: rowData.id })}>
                      <MovieListItem
                        title={rowData.title}
                        release_date={rowData.release_date}
                        poster={rowData.poster_path}
                      />
                    </TouchableOpacity>
                  )}
                  renderSeparator={(
                    sectionID,
                    rowID,
                    adjacentRowHighlighted
                  ) => (
                    <View
                      key={rowID}
                      style={{ height: 1, backgroundColor: 'lightgray' }}
                    />
                  )}
                />
              </View>
            </View>}
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
    paddingTop: 20,
  },
  search: {
    flex: 1,
    backgroundColor: '#ccc',
    borderRadius: 10,
    height: 36,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
