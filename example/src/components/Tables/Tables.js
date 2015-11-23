import React from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';

let styles = {}
import { tables } from 'pure-css'
Object.assign(styles, tables)

function Tables( props) {

    const { route } = props;

    return (

        <table styleName="pure-table pure-table-horizontal">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                </tr>
            </thead>

            <tbody>

                <tr>
                    <td>1</td>
                    <td>Honda</td>
                    <td>Accord</td>
                    <td>2009</td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>Toyota</td>
                    <td>Camry</td>
                    <td>2012</td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>Hyundai</td>
                    <td>Elantra</td>
                    <td>2010</td>
                </tr>
            </tbody>

        </table>
    );
}

export default connect()( 
    CSSModules(Tables, styles, {allowMultiple: true} ) 
);
