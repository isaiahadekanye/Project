import React, {
  Component
} from 'react';
import './App.css';
import Image from './components/image';
import Input from './components/input';

class App extends Component {
  render() {
    return (
      <React.Fragment >
      <Image />
      <Input />
      </React.Fragment>
    );
  }
}

export default App;