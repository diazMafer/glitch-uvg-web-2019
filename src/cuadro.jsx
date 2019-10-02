import React from 'react'
import Title from './title/index'
import Robot from './Robot'
import DataInfo from './DataInfo'
import DiscButton from './button-dist/index'

require('./cuadro.css')

export default class Cuadro extends React.PureComponent {
  render() {
    return (
      <div className="cuadro">
        <div className="imagen">
          <Robot />
          <Title />
          <DataInfo />
          <DiscButton />

        </div>
      </div>
    )
  }
}
