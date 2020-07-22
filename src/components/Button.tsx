import React, { forwardRef, Ref } from 'react'
import { Button as WAIButton, ButtonProps as WAIProps } from 'reakit'
import { Button as TAButton, ButtonProps as TAProps } from 'theme-ui'

type Props = WAIProps & TAProps

function Button(props: Props, ref: Ref<HTMLButtonElement>) {
  return <WAIButton {...props} ref={ref} as={TAButton} />
}

export default forwardRef(Button)
