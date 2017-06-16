import React, { Component } from 'react'
import { MainContainer } from '../containers'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`

class Routes extends Component {
  render() {
    return (
      <Router>
        <Container>
           <Route path="/" component={MainContainer} />
        </Container>
      </Router>
    )
  }
}

export default Routes
