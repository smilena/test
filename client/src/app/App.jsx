import React from 'react';
import './App.scss';
import Search from '../pages/Search';
import Product from '../pages/Product';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import NotFoundPage from '../pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Search} />
        <Route exact path='/items' component={Search} />
        <Route exact path='/items/:id' component={Product} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
