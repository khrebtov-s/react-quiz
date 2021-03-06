import React, { Component } from 'react'
import Backdrop from '../../UI/Backdrop/Backdrop'
import { NavLink } from 'react-router-dom'
import classes from './Drawer.css'

const links = [
    {
        to: '/',
        label: 'List',
        exact: true
    },
    {
        to: '/auth',
        label: 'Authorization',
        exact: false
    },
    {
        to: '/quiz-creator',
        label: 'Create quiz',
        exact: false
    },
]

class Drawer extends Component {

    clickHandler = () => {
        this.props.onClose()
    }

    renderLinks() {
        return links.map((link, index) => (
            <li key={index}>
                <NavLink
                    to={link.to}
                    exact={link.exact}
                    activeClassName={classes.active}
                    onClick={this.clickHandler}
                >{link.label}
                </NavLink>
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