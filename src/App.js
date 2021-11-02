import Instagram from  './components/Instagram';
import Facebook from './components/Facebook';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Create from './components/Create';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {

 
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
                <Home />
                
                <Facebook/>
                <Instagram/>
            </Route>

            <Route  path="/about">
                <About />
              
               <Facebook/>
               <Instagram/>
            
            </Route>
           
          
            <Route  path="/create">
                <Create />
             
               <Facebook/>
               <Instagram/>
            </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
