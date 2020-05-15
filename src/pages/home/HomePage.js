import React from 'react';
import { inject, observer } from "mobx-react";
// local files
import logo from '../../logo.svg';
import './style.scss';

export const HomePage = inject("store")(observer(({ store }) => {
  const { auth } = store;
  
  React.useEffect(() => {
    auth.getTestData();
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <ul>
          {auth.tasks.map(item => {
            return <li key={item.name}>{item.name}</li>
          })}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}));
