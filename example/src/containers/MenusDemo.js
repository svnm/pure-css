import React from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import Menus from '../components/Menus/Menus'

import Snippet from '../components/Snippet/Snippet'

import js from '!!raw!../components/Menus/Menus'

function MenusDemo( props) {

    const { route } = props;

    const files = [
      { name: './Menus.js', source: js }
    ];

    return (
        <div>        
          <Snippet files={files}>
            <Menus />
          </Snippet>
        </div>
    );
}

export default connect()(MenusDemo)
