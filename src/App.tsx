import React from 'react';
import { useSelector} from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { Login } from './features/Auth/Login';
import { Register } from './features/Auth/Register';
import { Header } from './features/Header/Header';
import { Layout } from './features/Layout';
import { Menu } from './features/Menu/Menu';
import { StateType } from './redux/store';

function App() {
	const {token} = useSelector((state: StateType) => state.authentication);

  return (
    <div className="App">
      <div className={'context'}>
        <div>
          <Menu />
        </div>
        <div className={'context__inner'}>
          <Header />
					{
						token && (
							<Switch>
								<Route path='/interviews' render={() => (<Layout />)} />
								<Redirect to={'/interviews'}/>
							</Switch>
						)
					}
					{
						!token && (
							<Switch>
								<Route exact path='/' render={() => (<Login />)} />
								<Route path='/register' render={() => (<Register />)} />
								<Redirect to={'/'}/>
							</Switch> 
						)
					}    
        </div>
      </div>
    </div>
  );
}

export default App;
