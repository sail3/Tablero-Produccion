import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const tdStyle = {
  "font-size": "60px"
};
const hourStyle = {
  "font-size": "25px"
}
const hrStyle = {
  "margin-top": "5px",
  "margin-bottom": "5px"
}

class TableRow extends React.Component {

  static propTypes = {

  }

  render() {
    return (
      <tr>
        <td style={hourStyle}><strong>{this.props.rowValue.startHour}
          <hr style={hrStyle}/>{this.props.rowValue.endtHour}</strong></td>
          <td style={tdStyle}><strong>{this.props.rowValue.cumulativeProduction}</strong></td>
          <td style={tdStyle}><strong>{this.props.rowValue.projectedProduction}</strong></td>
          <td style={tdStyle}><strong>{this.props.rowValue.projectedEfficiency}%</strong></td>
        </tr>
    )
  }
}

export default TableRow
