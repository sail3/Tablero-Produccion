import React from 'react'
import PropTypes from 'prop-types'
import TableRow from '../components/TableRow'

class TableContent extends React.Component {

  static propTypes = {

  }

  render() {
    let rows = [];
    this.props.values.forEach(function (value) {
      rows.push(<TableRow rowValue={value} />);
    });
    return (
      <tbody>
        {rows}
      </tbody>
    )
  }
}

export default TableContent
