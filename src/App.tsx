import React, { Component } from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux'

import Launch from './screens/Launch'
import Home from './screens/Home'
import RegisterRole from './screens/RegisterRole'
import RegisterProfile from './screens/RegisterProfile'
import RegisterPassword from './screens/RegisterPassword'
import PatternAuth from './screens/PatternAuth'

interface Props {}

export default class App extends Component<Props> {
  constructor(props: Props) {
    super(props)

    console.disableYellowBox = true;
  }

  render(): React.ReactNode {
    return (
      <Router>
        <Stack key='root'>
          <Scene key='launch' component={Launch} headerMode='none' hideNavBar initial />
          <Scene key='patternAuth' component={PatternAuth} headerMode='none' hideNavBar init />
          <Scene key='home' component={Home} headerMode='none' hideNavBar init />

          <Stack key="register" hideNavBar>
            <Scene key='registerRole' component={RegisterRole} />
            <Scene key='registerProfile' component={RegisterProfile} />
            <Scene key='registerPassword' component={RegisterPassword} />
          </Stack>
        </Stack>
      </Router>
    )
  }
}