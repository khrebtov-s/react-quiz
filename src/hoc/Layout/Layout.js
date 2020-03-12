import React, { Component } from 'react';
import MenuToggle from '../../components/Navigation/Menu Toggle/MenuToggle'
import style from './layout.css';

class Layout extends Component {
    state = {
        menu: false
    }

    toggleManuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    render() {
        return (
            <div className={style.Layout}>
                <MenuToggle
                    onToggle={this.toggleManuHandler}
                    isOpen={this.state.menu}
                />
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    };
};

export default Layout;