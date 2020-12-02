import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuArea from './Components/MenuArea/MenuArea';
import Banner from './Components/Banner/Banner';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <MenuArea></MenuArea>
      <Switch>
        <Route path="/banner/:BannerId">
          <Banner></Banner>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
