import React from 'react'
import PropTypes from 'prop-types'
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts'

class WeeklyEvolution extends React.Component {

  static propTypes = {

  }

  render() {
    return (
      <div className="col-md-6">
        <AreaChart width={570} height={200} data={this.props.data} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Area type='monotone' dataKey='uv' stroke='#00f000' fill='#00f000' />
        <Area type='monotone' dataKey='pv' stroke='#0000f0' fill='#0000f0' />
        <Area type='monotone' dataKey='amt' stroke='#f00000' fill='#f00000' />
      </AreaChart>
      </div>
    )
  }
}

export default WeeklyEvolution
