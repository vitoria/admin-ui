import React from 'react'

import { Button } from '../src'
import { Provider } from './example'

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
