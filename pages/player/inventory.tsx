import * as React from 'react';

class Inventory extends React.Component {
  public isClientOrServer = () => {
    return (typeof window !== 'undefined' && window.document) ? 'client' : 'server';
  };

  public render() {
    return (
      <div>
        <h1>Inventory Page</h1>
      </div>
    )
  }
}

export default Inventory;