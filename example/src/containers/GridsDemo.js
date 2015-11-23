import React from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import Grids from '../components/Grids/Grids'

import Snippet from '../components/Snippet/Snippet'

import js from '!!raw!../components/Grids/Grids';

function GridsDemo( props) {

    const { route } = props;

    const files = [
      { name: './Grids.js', source: js }
    ];

    return (
        <div>        
          <Snippet files={files}>
            <Grids />
          </Snippet>
        </div>
    );
}

export default connect()(GridsDemo)
