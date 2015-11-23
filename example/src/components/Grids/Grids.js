import React from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';

let styles = {}
import { buttons, grids } from 'pure-css'
Object.assign(styles, grids, buttons)

function Buttons( props) {

    const { route } = props;

    return (
        <div styleName='pure-g'>
            <div styleName="pure-u-1 pure-u-md-1-3">
                <p>
                This grid is responsive, at medium and above it is 1/3
                Below medium it is 1/1. medium is ≥ 768px
                </p>
            </div>
            <div styleName="pure-u-1 pure-u-md-1-3">
                <p>
                Just a note, you can mix purecss modules in...
                e.g. we have a button in this grid
                </p>
                <button styleName='pure-button'>A Pure Button</button>
            </div>

            <div styleName="pure-u-1 pure-u-md-1-3">
                <p>Here is the third grid row.</p>
            </div>
        </div>        
    );
}

export default connect()( 
    CSSModules(Buttons, styles, {allowMultiple: true} ) 
);
