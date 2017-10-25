import React from 'react';
import { Provider } from 'react-redux';
import store from './configureStore';
import AppNavigator from './AppNavigator';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
