import React, { PureComponent } from 'react'

require('./style.css')

export default class Robot extends PureComponent {
  render() {
    return (
      <img src="https://duckduckgo.com/assets/onboarding/robot-icon-frameless.svg" alt="Robot" className="imagenRobot" />
    )
  }
}
