import React from 'react'

import Provider from '../ThemeProvider'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
}

export const Themes = () => {
  return (
    <Provider>
      <Button bg="primary">Primary Button</Button>
      <Button bg="secondary">Seconday Button</Button>
    </Provider>
  )
}
