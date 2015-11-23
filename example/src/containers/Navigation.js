import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from 'redux-router5'

import { menus } from 'pure-css'
let styles = {}
Object.assign(styles, menus)

class Nav extends Component {
    constructor(props, context) {
        super(props);
        this.router = context.router;
    }

    render() {
        const { navigateTo, route } = this.props

        return (
            <nav>
                <div styleName="pure-menu pure-menu-horizontal">
                    <ul styleName="pure-menu-list">
                        <li styleName="pure-menu-item">
                            <a onClick={ () => navigateTo('grids') } styleName="pure-menu-link">Grids</a>
                        </li>
                        <li styleName="pure-menu-item">
                            <a onClick={ () => navigateTo('buttons') } styleName="pure-menu-link">Buttons</a>
                        </li>
                        <li styleName="pure-menu-item">
                            <a onClick={ () => navigateTo('menus') } styleName="pure-menu-link">Menus</a>
                        </li>
                        <li styleName="pure-menu-item">
                            <a onClick={ () => navigateTo('forms') } styleName="pure-menu-link">Forms</a>
                        </li>
                        <li styleName="pure-menu-item">
                            <a onClick={ () => navigateTo('tables') } styleName="pure-menu-link">Tables</a>
                        </li>
                    </ul>
                </div>                
            </nav>
        );
    }
}

Nav.contextTypes = {
    router: PropTypes.object.isRequired
};

export default connect(
    state => state.router.route,
    dispatch => bindActionCreators({ navigateTo: actions.navigateTo }, dispatch)
)( CSSModules(Nav, styles, {allowMultiple: true} ) );
