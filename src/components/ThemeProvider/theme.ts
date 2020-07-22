const colors = {
  text: '#323845',
  background: '#FFFFFF',
  muted: ['#686E7B', '#8B9299', '#C1C6CC', '#D7DADF', '#F3F5F9'],
  primary: '#345EBD',
  primaryWashed: '#F4F8FE',
  success: '#44B172',
  successWashed: '#E2F5EA',
  warning: '#FFC165',
  warningWashed: '#FFECD0',
  danger: '#FF6565',
  dangerWashed: '#FFE2E2',
}

export default {
  colors,
  buttons: {
    primary: {
      bg: 'primary',
      color: 'background',
      cursor: 'pointer',
    },
    secondary: {
      bg: 'primaryWashed',
      color: 'primary',
      cursor: 'pointer',
    },
    success: {
      bg: 'success',
      color: 'background',
      cursor: 'pointer',
    },
    warning: {
      bg: 'warning',
      color: 'background',
      cursor: 'pointer',
    },
    danger: {
      bg: 'danger',
      color: 'background',
      cursor: 'pointer',
    },
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
}
