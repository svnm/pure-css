import React from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import Forms from '../components/Forms/Forms'

import Snippet from '../components/Snippet/Snippet'

import js from '!!raw!../components/Forms/Forms'

function FormsDemo( props) {

    const { route } = props;

    const files = [
      { name: './Forms.js', source: js }
    ];

    return (
        <div>        
          <Snippet files={files}>
            <Forms />
          </Snippet>
        </div>
    );
}

export default connect()(FormsDemo)
