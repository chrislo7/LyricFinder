import React, { Component } from "react";
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';

class Tracks extends Component {
  render() {
    return (
      <div>
        <h1>Tracks</h1>
        <Consumer>
          {value => { 
            const { track_list } = value;
            if ( track_list === undefined || track_list.length === 0 )
            { return <Spinner /> } 
            else { return <h1>Tracks Loaded</h1> }
          }}
        </Consumer>
      </div>
    );
  }
}

export default Tracks;
