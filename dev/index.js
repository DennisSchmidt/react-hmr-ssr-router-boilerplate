import React from 'react'
import { render } from 'react-dom'

import { AppContainer as HotContainer } from 'react-hot-loader'

import Root from '../src/containers/Root'

render(
  <HotContainer>
    <Root />
  </HotContainer>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('../src/containers/Root', () => {
    const Root = require('../src/containers/Root').default
    render(
      <HotContainer>
        <Root />
      </HotContainer>,
      document.getElementById('app')
    )
  })
}
