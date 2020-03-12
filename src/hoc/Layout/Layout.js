import React, { Component } from 'react';
import MenuToggle from '../../components/Navigation/Menu Toggle/MenuToggle'
import Drawer from '../../components/Navigation/Drawer/Drawer'
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
                <Drawer
                    isOpen={this.state.menu}
                    onClose={this.toggleManuHandler}
                />
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