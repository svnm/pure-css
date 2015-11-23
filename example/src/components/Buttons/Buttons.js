import React from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';

let styles = {}
import { buttons } from 'pure-css'
Object.assign(styles, buttons)

function Buttons( props) {

    const { route } = props;

    return (
        <div>

            <h3>Default Buttons</h3>
            <button styleName='pure-button'>A Pure Button</button>

            <h3>Disabled Buttons</h3>
            <button styleName='pure-button pure-button-disabled'>A Disabled Button</button>

            <h3>Active Buttons</h3>
            <button styleName='pure-button'>An Active Button</button>

            <h3>Primary Buttons</h3>
            <button styleName='pure-button'>A Primary Button</button>

            <h3>Buttons with different sizes</h3>
            <button styleName='pure-button'>Extra Small Button</button>
            <button styleName='pure-button'>Small Button</button>
            <button styleName='pure-button'>Large Button</button>
            <button styleName='pure-button'>Extra Large Button</button>

        </div>
    );
}

export default connect()( 
    CSSModules(Buttons, styles, {allowMultiple: true} ) 
);
