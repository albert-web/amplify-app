import React from 'react';
import logo from './logo.svg';
import './App.css';

import { 
  withAuthenticator
  , AmplifySignOut 
} from '@aws-amplify/ui-react'

const App = () => {
  return (
    <div>
      <h1>
      Hello from aws Amplify
      </h1>
      <AmplifySignOut />
    </div>
  );

}

//export default App;
export default withAuthenticator(App)
