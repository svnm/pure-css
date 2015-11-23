import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Snippet.css';

class Snippet extends Component {

  render() {
    return (
      <div styleName='root'>

        <div styleName='output'>
          <div styleName='fileName'>Output</div>
          <div styleName='outputContent'>
            { this.props.children }
          </div>
        </div>

        {
          this.props.files.map(file => (
            <div key={file.name} styleName='file'>
              <div styleName='fileName'>{ file.name }</div>
              <pre styleName='pre'>{ file.source }</pre>
            </div>
          ))
        }

      </div>
    );
  }
};

export default CSSModules(Snippet, styles);