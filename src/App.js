import './App.css';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Api from './Compement/Api';
import SearchBar from './Compement/SearchBar';
import MyNavBar from './Compement/MyNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';



const HomeScreen = () =>{
  return(
    <div className="App">
      <MyNavBar/>
      <header className="App-header">
          <h1>Site Film</h1>
      </header>
    </div>
  )
}

const PopularScreen = () =>{
  return(
    <div className="App">
      <MyNavBar/>
      <h1>Film trier par popularité</h1>
      <Api param = {"&page=1"}/>
    </div>
  )
}
const SearchScreen = () =>{
  return(
    <div className="App">
      <MyNavBar/>  
      <SearchBar/>
    </div>
  )
}
const DetailMovieScreen = (props) =>{
  return(
    <div className="App">
      <MyNavBar/>
      <Api/>
    </div>
  )
}
const VideoMovieScreen = (props) =>{
  return(
    <div className="App">
      <MyNavBar/>
      <Api/>
    </div>
  )
}


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Route  exact path = "/" component = {HomeScreen}/> 
          <Switch>
            <Route path = "/movie/popular" exact component = {PopularScreen}/>  
            <Route  exact path = "/movie/:ID_FILM" component = {DetailMovieScreen}/>
          </Switch>
          <Route path='/movie/:ID_FILM/videos' component={VideoMovieScreen} /> 
          <Route path = "/search/multi" component = {SearchScreen}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
