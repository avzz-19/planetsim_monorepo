import * as React from 'react'
import { Children } from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { AppRegistry } from 'react-native'

import appName from '../package.json'

// Force Next-generated DOM elements to fill their parent's height
const normalizeNextElements = `
  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    overflow: hidden;
  }
`

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    AppRegistry.registerComponent(appName, () => Main)
    const { getStyleElement } = AppRegistry.getApplication(appName)
    const page = await renderPage()
    const styles = [
      <style
        dangerouslySetInnerHTML={{ __html: normalizeNextElements }}
        key='0'
      />,
      getStyleElement(),
    ]
    return { ...page, styles: Children.toArray(styles) }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
