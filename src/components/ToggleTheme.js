import React, { Component } from 'react';
import { ThemeContext } from '../contexts/Theme.context';

class toggleTheme extends Component {
    static contextType = ThemeContext;
    render() { 
        const { toggleTheme } = this.context;
        return ( 
            <button onClick={ toggleTheme }>Switch Theme</button>
        );
    }
}
 
export default toggleTheme;