import React from 'react';
export default class FetchProducts extends React.Component {
  state = {
    loading: true
  };
''
  componentDidMount() {
    const 
  }

  render() {
    return (
      <div>
        {this.state.loading ? <div>hang tight, we're loading...</div>} : <div>items..</div>
      </div>
    )
  }
}