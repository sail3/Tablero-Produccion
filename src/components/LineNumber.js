import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LineContent = styled.div`
  background-color: #222;
  font-size: 100px;
`

class LineNumber extends React.Component {

  static propTypes = {

  }

  render() {
    return (
      <div className="col-md-3">
        <LineContent>
          { this.props.lineNumber }
        </LineContent>
      </div>
    )
  }
}

export default LineNumber
