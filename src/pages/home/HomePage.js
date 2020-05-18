import React from 'react';
import { inject, observer } from "mobx-react";
// local files
import brandLogo from '../../assets/images/HandyDay-logo.svg';
import flagImage from '../../assets/images/Flags.svg';
import logo from '../../logo.svg';
import './modal.scss';
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

      <div className="modal __wrapper-block">

        <div className="modal __inner-block">
          <div className="modal __head">
            <a className="brand-link" href="#">
              <img src={brandLogo} alt=""/>
            </a>
            <a className="close-btn" href="#">x</a>
          </div>
          <div className="modal __body">
            <h3>Let’s get you signed in</h3>
            <h6>Type your mobile number. <br/>
              We’ll text you a code.</h6>
            <form action="">
              <div className="field-wrapper">
                <button className="btn-country"><span><img src={flagImage} alt=""/></span>+996</button>
                <ul className="list-country">

                  <li className="item-country">
                    <button>
                      <span><img src={flagImage} alt=""/></span>+923123123123123123123
                    </button>
                  </li>
                  <li className="item-country">
                    <button>
                      <span><img src={flagImage} alt=""/></span>+9
                    </button>
                  </li>
                  <li className="item-country">
                    <button>
                      <span><img src={flagImage} alt=""/></span>+123123123
                    </button>
                  </li>

                </ul>
                <input className="field-form __phone" type="number" placeholder="Your number"/>
              </div>
              <div className="btn-wrapper">
                <button className="btn _custom">Text me my code</button>
              </div>
            </form>
          </div>
        </div>

        {/*<div className="modal __inner-block">*/}
        {/*  <div className="modal __head">*/}
        {/*    <a className="brand-link" href="#">*/}
        {/*      <img src={brandLogo} alt=""/>*/}
        {/*    </a>*/}
        {/*    <a className="close-btn" href="#">x</a>*/}
        {/*  </div>*/}
        {/*  <div className="modal __body">*/}
        {/*    <h3>Type the code we sent</h3>*/}
        {/*    <h6>We just texted you a code. Type in that code here.</h6>*/}
        {/*    <form action="">*/}
        {/*      <div className="field-wrapper">*/}
        {/*        <input className="field-form __code" type="number" placeholder="*"/>*/}
        {/*      </div>*/}
        {/*      <div className="btn-wrapper">*/}
        {/*        <button className="btn _custom">Sign in</button>*/}
        {/*      </div>*/}
        {/*    </form>*/}
        {/*  </div>*/}
        {/*</div>*/}

      </div>

    </div>
  );
}));
