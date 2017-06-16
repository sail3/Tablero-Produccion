import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Header } from '../components'
import TableContainer from './TableContainer'

const dataSet = {
  "header": {
    "companyName":"Mi increible empdddresa",
    "lineNumber": 50,
    "graphicData": [
      {name: 'LUN', uv: 4000, pv: 2400, amt: 2400},
      {name: 'MAR', uv: 3000, pv: 1398, amt: 2210},
      {name: 'MIE', uv: 2000, pv: 9800, amt: 2290},
      {name: 'VIE', uv: 2780, pv: 3908, amt: 2000},
      {name: 'JUE', uv: 1890, pv: 4800, amt: 2181},
      {name: 'SAB', uv: 2390, pv: 3800, amt: 2500},
      {name: 'DOM', uv: 3490, pv: 4300, amt: 2100},
    ],
    "styleName": "Mi estile name",
    "people": 123123,
    "base": 121231233

  },
  "content": [
      { startHour: '00:00', endtHour: '01:00', cumulativeProduction: '53', projectedProduction: '53', projectedEfficiency: '53'},
      { startHour: '01:00', endtHour: '02:00', cumulativeProduction: '53', projectedProduction: '53', projectedEfficiency: '53'},
      { startHour: '02:00', endtHour: '03:00', cumulativeProduction: '53', projectedProduction: '53', projectedEfficiency: '53'},
      { startHour: '03:00', endtHour: '04:00', cumulativeProduction: '53', projectedProduction: '53', projectedEfficiency: '53'},
      { startHour: '04:00', endtHour: '05:00', cumulativeProduction: '53', projectedProduction: '53', projectedEfficiency: '53'},
      { startHour: '05:00', endtHour: '06:00', cumulativeProduction: '53', projectedProduction: '53', projectedEfficiency: '53'},
      { startHour: '06:00', endtHour: '07:00', cumulativeProduction: '53', projectedProduction: '53', projectedEfficiency: '53'},
      { startHour: '07:00', endtHour: '08:00', cumulativeProduction: '53', projectedProduction: '53', projectedEfficiency: '53'},
      { startHour: '08:00', endtHour: '09:00', cumulativeProduction: '53', projectedProduction: '53', projectedEfficiency: '53'},
      { startHour: '09:00', endtHour: '10:00', cumulativeProduction: '53', projectedProduction: '53', projectedEfficiency: '53'},
      { startHour: '10:00', endtHour: '11:00', cumulativeProduction: '53', projectedProduction: '53', projectedEfficiency: '53'},
      { startHour: '11:00', endtHour: '12:00', cumulativeProduction: '53', projectedProduction: '53', projectedEfficiency: '53'},
      { startHour: '12:00', endtHour: '00:00', cumulativeProduction: '53', projectedProduction: '53', projectedEfficiency: '53'},
  ]
}

class MainContainer extends React.Component {

  static propTypes = {

  }

  render() {
    return (
      <div>
        <Header data={dataSet.header}/>
        <TableContainer values={dataSet.content} header={dataSet.header}/>
      </div>
    )
  }
}

export default MainContainer
