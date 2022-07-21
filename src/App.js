import './App.css';
import Blogs from './components/Blogs/Blogs';
import Coaches from './components/Coaches/Coaches';
import Create from './components/Create/Create';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Programs from './components/Programs/Programs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route exact path="/"> 
        <Hero />
        <Programs />
        <Blogs />
        <Coaches />
        <Join />
        <Footer/>
      </Route>
      <Route path="/Create">
          <Create />
      </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
