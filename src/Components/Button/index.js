import React from 'react'
import Styles from './_button.module.scss'
import clsx from 'clsx'

function Button({ children, href, primary, className, ...props }) {
    let Component = 'button'
    const classes = clsx(Styles.btn, { [Styles.primary]: primary }, className)
    if (href) {
        Component = 'a'
    }
    return (
        <Component {...props} className={classes}>
            {children}
        </Component>
    )
}

export default Button
