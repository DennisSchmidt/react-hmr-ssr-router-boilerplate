import React from 'react'
import Head from './head'
import { assetPath } from '../../lib/assets'

const Document = ({
  head,
  content,
  children
}) => (
  <html>
    <Head head={head} />
    <body>
      {content
        ? <div id="app" dangerouslySetInnerHTML={{ __html: content }} />
        : <div id="app">{children}</div>
      }

      <script type="text/javascript" src={assetPath("app", "js")}></script>
    </body>
  </html>
)

export default Document
