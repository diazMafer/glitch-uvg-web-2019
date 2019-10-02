import React, { PureComponent } from 'react'
import './App.css'
import PropTypes from 'prop-types'

export default class Background extends PureComponent {
  render() {
    const { children } = this.props
    return (
      <div className="background">{children}</div>
    )
  }
}

Background.propTypes = {
  children: PropTypes.string.isRequired,
}
