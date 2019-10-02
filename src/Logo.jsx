import React, { PureComponent } from 'react'
import './index.css'

class Logo extends PureComponent {
  render() {
    return (
      <div clasName="Container">
        <img src="https://duckduckgo.com/assets/logo_homepage.normal.v108.svg" href={window.scrollTo(0, 250)} alt="Logo" className="mainLogo" />

        <span className="tag">&quot;conocer más&quot;</span>
      </div>
    )
  }
}

export default Logo
