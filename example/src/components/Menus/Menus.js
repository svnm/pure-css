import React from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';

let styles = {}
import { menus } from 'pure-css'
Object.assign(styles, menus)

function Menus( props) {

    const { route } = props;

    return (
        <div>

            <div styleName="pure-menu pure-menu-horizontal">
                <ul styleName="pure-menu-list">
                    <li styleName="pure-menu-item">
                        <a href="#" styleName="pure-menu-link">News</a>
                    </li>
                    <li styleName="pure-menu-item">
                        <a href="#" styleName="pure-menu-link">Sports</a>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default connect()( 
    CSSModules(Menus, styles, {allowMultiple: true} ) 
);
