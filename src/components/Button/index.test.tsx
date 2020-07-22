import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

import Button from '.'

describe('Button tests', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Button>Example</Button>)

    expect(asFragment()).toMatchSnapshot()
  })
})
