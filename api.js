let rootURL = 'https://api.themoviedb.org/3/search/movie';
let detailURL = 'https://api.themoviedb.org/3/movie/'
const api_key = 'd03639c5975923d7e9fa7c0c09ca9840';

exports.search = (query, page) => {
  let url = `${rootURL}?api_key=${api_key}&query=${query}&page=${page}`;
  //console.log(url);
  return fetch(url).then(res => res.json()).then(json => {
    return {
      total_results: json.total_results,
      results: json.results,
      total_pages: json.total_pages,
    };
  });
};

exports.detail = (id) => {
  let url = `${detailURL}${id}?api_key=${api_key}`;

  return fetch(url).then(res => res.json());
}