import React from 'react'
import { Match, Miss } from 'react-router'

import Layout from './layout/index'
import WelcomePage from './pages/welcome'
import AboutPage from './pages/about'
import ImprintPage from './pages/imprint'

const Root = () => (
  <Layout>
    <Match exactly pattern="/" component={WelcomePage} />
    <Match pattern="/about" component={AboutPage} />
    <Match pattern="/imprint" component={ImprintPage} />

    <Miss component={NoMatch}/>
  </Layout>
)

export default Root

const NoMatch = ({
  location
}) => (
  <div>
    <h2>Whoops</h2>
    <p>Sorry but {location.pathname} didn’t match any pages</p>
  </div>
)
