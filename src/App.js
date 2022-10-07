import './App.css';
import requests from './request';
import Row from './Row';

function App() {
  return (
    <div className="App">
        <Row title="NETFLIX ORIGINALS" fetchURL = {requests.fetchNetflixOriginals} isLargeRow/>
        <Row title="Trending Now" fetchURL={requests.fetchTrending} />
        <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
        <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
        <Row title="Documentaries" fetchURL={requests.fetchDocumantaries} />
    </div>
  );
}

export default App;
