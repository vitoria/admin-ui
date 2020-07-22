import React, { PropsWithChildren } from 'react'
import { ThemeProvider } from 'theme-ui'

const theme = {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#212121',
  },
}

export default function Theme({ children }: PropsWithChildren<{}>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
