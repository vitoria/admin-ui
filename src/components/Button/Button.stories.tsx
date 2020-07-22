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
      <Button m={2} variant="primary">
        Primary Button
      </Button>
      <Button m={2} variant="secondary">
        Secondary Button
      </Button>
      <Button m={2} variant="success">
        Success Button
      </Button>
      <Button m={2} variant="warning">
        Warning Button
      </Button>
      <Button m={2} variant="danger">
        Danger Button
      </Button>
    </Provider>
  )
}
