import { useEffect } from 'react';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About.jsx';
import Navbar from './components/Navbar';
import { withRouter, Switch, Route } from 'react-router-dom';

function App(props) {
  useEffect(() => {
    props.history.push('home');
  }, []);
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
