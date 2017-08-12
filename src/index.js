/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';

import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import insertCss from 'insert-css';
import css from './../node_modules/re-bulma/build/css';
try {
  if (typeof document !== 'undefined' || document !== null) insertCss(css, { prepend: true });
} catch (e) {/**/}
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import './styles/font-awesome.min.css';
import { syncHistoryWithStore } from 'react-router-redux';

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);


render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
