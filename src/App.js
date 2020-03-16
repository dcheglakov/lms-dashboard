import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/home'
import Submissions from './components/submissions'
import Admin from './components/admin'
import Header from './components/header'

import styled from '@emotion/styled'
import tw from 'twin.macro'

const Container = styled.div`
  ${tw`p-4`}
`

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/submissions">
            <Submissions />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}

export default App
