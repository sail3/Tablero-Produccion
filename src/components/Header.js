import React from 'react'
import logo from '../assets/logo.svg'
import styled, { keyframes } from 'styled-components'

import { COMPANY_NAME } from '../constants/actionTypes'
import LineNumber from './LineNumber'
import Logo from './Logo'
import WeeklyEvolution from './WeeklyEvolution'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const TopBar = styled.div`
  background-color: #222;
  ${''/* height: 150px; */}
  padding: 20px;
  color: #0f0;

  .redux-logo {
    animation: ${rotate360} infinite 20s linear;
    height: 80px;
  }
`
class Header extends React.Component {
  render(){
    return (
      <TopBar>
        <h1>{this.props.data.companyName}</h1><hr />
        <div className="container">
          <Logo></Logo>
          <WeeklyEvolution data={this.props.data.graphicData}></WeeklyEvolution>
          <LineNumber lineNumber={this.props.data.lineNumber}></LineNumber>
        </div>
      </TopBar>
    )
  }
}

export default Header
