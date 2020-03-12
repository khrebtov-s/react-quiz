import React, { Component } from 'react'
import Backdrop from '../../UI/Backdrop/Backdrop'
import classes from './Drawer.css'

const links = [
    1, 2, 3
]

class Drawer extends Component {

    renderLinks() {
        return links.map((link, index) => (
            <li key={index}>
                <a>Link {link}</a>
            </li>
        ))
    }

    render() {
        const cls = [classes.drawer]

        if (!this.props.isOpen) {
            cls.push(classes.close)
        }
        return (
            <>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen && <Backdrop onClick={this.props.onClose} />}
            </>
        )
    }
}

export default Drawer