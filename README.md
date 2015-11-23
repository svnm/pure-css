# pure-css

[![npm version](https://badge.fury.io/js/react-search.svg)](https://badge.fury.io/js/react-search)

A [css module](https://github.com/css-modules/css-modules) compatible version of [purecss](https://github.com/yahoo/pure/).

You will need to use [react-css-modules](https://github.com/gajus/react-css-modules) to make use of the class names as purecss classes are not camelCase.

It would be possible to make a version compatible to just css modules, however most implementations of a virtual dom should have a higher order component for allowing normal class names and this will be the future direction for css modules. 

It could also be an approach to rewrite the current style names in pure to be more compatible with css modules, although again they would probably not be camelCase.

That may be something to consider, however may need some discussion with the developers at purecss to ensure they are on board with a new version being written as currently the css source here is just a straight copy from purecss 0.6.0 cdn exported as modules for use in components.

This would mean instead of css styleNames like this:

```jsx
<button styleName='pure-button pure-button-disabled'>A Disabled Button</button>
```

we could write:

```jsx
<button styleName='button-disabled'>A Disabled Button</button>
```

## Installation

`npm install pure-css --save-dev`

## Usage
Simply import your pure css module 

`import { buttons, grids } from 'pure-css'`

Then use it for styling your elements.

```jsx
<div styleName='pure-g'>
</div>
```

## Example

Check out the full working example [here]()

```jsx
import React from 'react'
import CSSModules from 'react-css-modules'

import { buttons, grids } from 'pure-css'
let styles = {}
Object.assign(styles, grids, buttons)

class Test extends React.Component {
    render () {
        return (
          <div styleName='pure-g'>
            <div styleName="pure-u-1">
              <button styleName='pure-button'>A button in a grid</button>
            </div>
          </div>
        );
    }
}

export default CSSModules(Test, styles);
```

## License

[MIT](http://isekivacenz.mit-license.org/)