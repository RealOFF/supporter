/* eslint-disable react/display-name */
import { ColorModeScript } from '@chakra-ui/react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ReactElement } from 'react'
import { ServerStyleSheet } from 'styled-components'

import { theme } from '../utils/theme'

export default class CustomDocument extends Document<{
  styleTags: ReactElement[]
}> {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()

    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    )

    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }

  render() {
    return (
      <Html>
        <Head>{this.props.styleTags}</Head>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
