import React from 'react';
import { observer } from 'mobx-react';
import { inject } from 'react-mobx';

@inject('Store')
@observer
class App extends React.Component {
  render() {
    return(
      <div>{this.props.Store.Tnumber}</div>
    );
  }
}

export default App;