import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TableContent from '../components/TableContent'
import TableHeader from '../components/TableHeader'

const ItemHeader = styled.div`
  font-size: 25px;
  .strong-label {
    font-size: 30px;
    font-weight: bolder;
  }
`

class TableContainer extends React.Component {

  static propTypes = {

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <ItemHeader className="col-md-4">
            <span className="strong-label">ESTILO:</span>{this.props.header.styleName}
          </ItemHeader>
          <ItemHeader className="col-md-4">
            <span className="strong-label"># PERSONAS:</span>{this.props.header.people}
          </ItemHeader>
          <ItemHeader className="col-md-4">
            <span className="strong-label">BASE:</span>{this.props.header.base}%
          </ItemHeader>
        </div>
        <table className="table">
          <TableHeader />
          <TableContent values={this.props.values}/>
        </table>
      </div>
    )
  }
}

export default TableContainer
