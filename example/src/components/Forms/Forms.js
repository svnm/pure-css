import React from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';

let styles = {}
import { forms, buttons } from 'pure-css'
Object.assign(styles, forms, buttons)

function Menus( props) {

    const { route } = props;

    return (
        <form styleName="pure-form pure-form-stacked">
            <fieldset>
                <legend>A Stacked Form</legend>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Email" />
                <label htmlFor="password">Password</label>
                <input id="password" type="password" placeholder="Password" />
                <label htmlFor="state">State</label>
                <select id="state">
                    <option>AL</option>
                    <option>CA</option>
                    <option>IL</option>
                </select>

                <label htmlFor="remember" styleName="pure-checkbox">
                    <input id="remember" type="checkbox" /> 
                    Remember me
                </label>
                    <button type="submit" styleName="pure-button pure-button-primary">Sign in</button>
                </fieldset>
            </form>
    );
}

export default connect()( 
    CSSModules(Menus, styles, {allowMultiple: true} ) 
);
