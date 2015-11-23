import React from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import Tables from '../components/Tables/Tables'

import Snippet from '../components/Snippet/Snippet'

import js from '!!raw!../components/Tables/Tables'

function TablesDemo( props) {

    const { route } = props;

    const files = [
      { name: './Tables.js', source: js }
    ];

    return (
        <div>        
          <Snippet files={files}>
            <Tables />
          </Snippet>
        </div>
    );
}

export default connect()(TablesDemo)
