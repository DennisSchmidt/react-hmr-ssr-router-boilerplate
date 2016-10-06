import React from 'react'
import { assetPath } from '../../lib/assets'

const Head = ({
  head
}) => (
  <head>
    {head.title.toComponent()}
    {head.meta.toComponent()}
    <Favicon />

    {process.env.NODE_ENV === 'production' && <link rel="stylesheet" media="screen" href={assetPath("app", "css")} />}
    <script type="text/javascript" src={assetPath("vendor", "js")}></script>
  </head>
)

export default Head

const Favicon = () => {
  let source = require('./favicon.ico')
  if (process.env.NODE_ENV === 'development')
    source = source.toString().replace(`${process.env.CLIENT_HOST}:${process.env.CLIENT_PORT}`, `${process.env.HOST}:${process.env.PORT}`)

  return <link rel="icon" href={source} />
}
