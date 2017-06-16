import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

import logo from '../assets/logo.svg'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const LogoStyles = styled.div`
  .logo-style {

  }
  img {
    animation: ${rotate360} infinite 20s linear;
    height: 200px;
  }
`

class Logo extends React.Component {

  static propTypes = {

  }

  render() {
    return (
      <LogoStyles className="col-md-3">
        <img src={logo} className="img-responsive" alt="Peru SNT" />
      </LogoStyles>
    )
  }
}

export default Logo
