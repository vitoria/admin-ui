import React, { PropsWithChildren } from 'react'
import { ThemeProvider } from 'theme-ui'

import theme from './theme'

export default function Theme({ children }: PropsWithChildren<{}>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
