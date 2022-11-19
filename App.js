import logo from './logo.svg';
import Movie from './Component/Movie/Movie';
import Info from './Component/Movie Information/Info';
import Rating from './Component/Rating/Rating';
import Login from './Component/Dilog/Login';
import SignUp from './Component/Dilog/SignUp'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Information from './Component/Movie Information/Information';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path='/' component={Movie} />
          <Route path='/Info' component={Info} />
          <Route path='/Rating' component={Rating} />
          <Route path='/Login'component={Login} />
          <Route path='/SignUp' component={SignUp}/>
        </Routes>
      </Router> */}
      
      {/* <Movie />
      <Info />
      <Rating /> */}
      <Login />
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
