import './App.css';
import Home from './components/Home';
import GlobalStyle from './globalStyles';
import { Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Store from './pages/Store';
import Gmail from './pages/Gmail';
import Images from './pages/Images';
import Info from './pages/Info';

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/store' component={Store} />
        <Route path='/gmail' component={Gmail} />
        <Route path='/images' component={Images} />
        <Route path='/info' component={Info} />
      </Switch>
    </>
  );
}

export default App;
