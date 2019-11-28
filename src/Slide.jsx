import React, { PureComponent } from 'react'
import './button-dist/style.css'
import PropTypes from 'prop-types'

class Slide extends PureComponent {
  // Hola soy Rodrigo Zea, discipulo de MS
  // Jose Cifuentes :) discipulo de MS
  // holis xd
  render() {
    const {
      imgPath, bgColor1, txtColor, shadow, title, description,
    } = this.props
    const image = {
      backgroundImage: `url(${imgPath})`,
      width: '1000px',
      height: '385px',
      zoom: '0.8',
      margin: 'auto auto auto auto',
    }

    const bgColor = {
      background: `#${bgColor1}`,
    }

    const textColor = {
      color: `#${txtColor}`,
    }

    const textShadow = {
      color: `#${txtColor}`,
      textShadow: '0 1px 4px rgba(0,0,0,0.25)',
    }

    return (
      <div className="slideContainer" style={bgColor}>
        <h1 style={shadow ? textShadow : textColor}>{title}</h1>
        <h2 style={textColor}>{description}</h2>
        <button type="submit">Add DuckDuckGo to Chrome</button>
        <div className="slideImage" style={image} />
      </div>
    )
  }
}

export default Slide

Slide.propTypes = {
  imgPath: PropTypes.string.isRequired,
  bgColor1: PropTypes.string.isRequired,
  txtColor: PropTypes.string.isRequired,
  shadow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,

}
