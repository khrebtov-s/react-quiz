import React, { Component } from 'react';
import style from './layout.css';

class Layout extends Component {
    render() {
        return (
            <div className={style.Layout}>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    };
};

export default Layout;