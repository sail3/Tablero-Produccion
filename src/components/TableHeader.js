import React from 'react'
import PropTypes from 'prop-types'

class TableHeader extends React.Component {

  static propTypes = {

  }

  render() {
    return (
      <thead>
        <tr className="text-center">
          <th className="text-center">HORA</th>
          <th className="text-center">PRODUCCION<br />ACUMULADA</th>
          <th className="text-center">PRODUCCION<br />PROYECTADA</th>
          <th className="text-center">EFICIENCIA<br />PROYECTADA</th>
        </tr>
      </thead>
    )
  }
}

export default TableHeader
