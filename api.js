let rootURL = 'https://api.themoviedb.org/3/search/movie';
const api_key = 'd03639c5975923d7e9fa7c0c09ca9840';

export default (query, page) => {
  let url = `${rootURL}?api_key=${api_key}&query=${query}&page=${page}`;
  console.log(url);
  return fetch(url).then(res => res.json()).then(json => {
    return {
      total_results: json.total_results,
      results: json.results,
      total_pages: json.total_pages,
    };
  });
};
