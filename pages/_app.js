import App from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import GlobalStyle from '../components/GlobalStyle'

const theme = {
  colors: {
    primary: '#00bcd4',
  },
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
