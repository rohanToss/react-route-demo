import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import PageNotFound from './Pages/PageNotFound';

function App() {

    return (
        <Router>
    <Nav/>
      <Switch>
        <Route path="/about" exact component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/:name" exact component={Home} />
        <Router path component = {PageNotFound} />
      </Switch>
    </Router>
    );

}

export default App;