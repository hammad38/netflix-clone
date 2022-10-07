import './App.css';
import requests from './request';
import Row from './Row';

function App() {
  return (
    <div className="App">
        <Row title="NETFLIX ORIGINALS" fetchURL = {requests.fetchNetflixOriginals}/>
        <Row title="Trending Now" fetchURL={requests.fetchTrending} />
    </div>
  );
}

export default App;
