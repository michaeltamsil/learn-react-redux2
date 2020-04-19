import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducer';

import Content from './components/Content';
import Counter from './components/Counter';

const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <div>
        <Content/>
        <Counter/>
      </div>
    </Provider>
  );
}

export default App;
