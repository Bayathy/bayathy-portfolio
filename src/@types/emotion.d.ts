import '@emotion/react'

declare module '@emotion/react' {
  interface Theme {
    colors: Colors
    padding: Padding
    margin: Margin
  }
}

interface Colors {
  primary: string
  secondary: string
  extra: string
  text: string
}

interface Padding {
  small: string
  medium: string
  large: string
}

interface Margin {
  small: string
  medium: string
  large: string
}
