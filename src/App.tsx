import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Login } from './features/Auth/Login';
import { Header } from './features/Header/Header';
import { Layout } from './features/Layout';
import { Menu } from './features/Menu/Menu';

function App() {
  return (
    <div className="App">
      <div className={'context'}>
        <div>
          <Menu />
        </div>
        <div className={'context__inner'}>
          <Header />
          <Switch>
            <Route exact path='/' render={() => (<Login />)} />
            <Route path='/interviews' render={() => (<Layout />)} />
          </Switch>       
        </div>
      </div>
    </div>
  );
}

export default App;
