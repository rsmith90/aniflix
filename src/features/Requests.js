
const API_KEY = process.env.REACT_APP_TMDB_KEY;

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&with_genres=16`,
    fetchTopRated: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
    fetchAction: `/discover/tv?api_key=${API_KEY}&with_genres=16,10759&sort_by=vote_average.desc`,
    fetchTopAnimation: `/discover/movie?api_key=${API_KEY}&with_keywords_taglist=anime&with_genres=16&sort_by=vote_average.desc`,   
    fetchKidsShows: `/discover/tv?api_key=${API_KEY}&with_genres=16,10762&sort_by=vote_average.desc`,
    fetchFamilyShows: `/discover/tv?api_key=${API_KEY}&with_genres=16,10751&sort_by=vote_average.desc`,
    fetchComedyShows: `/discover/tv?api_key=${API_KEY}&with_genres=16,35&sort_by=vote_average.desc`,
}

export default requests;

// instance https://api.themoviedb.org/3

// Genres listing: `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`

// `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16,28&sort_by=vote_average.desc`
// `https://api.themoviedb.org/3/search/tv?api_key={API_KEY}&query=anime`
// `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=16`


// Specify English =  &language=en-US
// &sort_by=vote_average.desc
//how to use multi *( , )  ex=> &with_genres=16,28

// {"genres":
// {"id":12,"name":"Adventure"},
// {"id":14,"name":"Fantasy"},
// {"id":16,"name":"Animation"},
// {"id":18,"name":"Drama"},
// {"id":27,"name":"Horror"},
// {"id":28,"name":"Action"},
// {"id":35,"name":"Comedy"},
// {"id":36,"name":"History"},
// {"id":37,"name":"Western"},
// {"id":53,"name":"Thriller"},
// {"id":80,"name":"Crime"},
// {"id":99,"name":"Documentary"},
// {"id":878,"name":"Science Fiction"},
// {"id":9648,"name":"Mystery"},
// {"id":10402,"name":"Music"},
// {"id":10749,"name":"Romance"},
// {"id":10752,"name":"War"},
// {"id":10770,"name":"TV Movie"},
// {"id":10751,"name":"Family"},
