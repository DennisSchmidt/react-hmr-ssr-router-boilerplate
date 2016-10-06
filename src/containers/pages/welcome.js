import React from 'react'

import './welcome.sass'
import Image from './hero.jpg'

const Welcome = () => (
  <div>
    <h1 className="welcome">Welcome user!</h1>
    <img src={Image} />
  </div>
)

export default Welcome
