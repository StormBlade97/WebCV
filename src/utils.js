import { keyframes } from 'styled-components'
import tinycolor from 'tinycolor2'

export const getPulsateRipple = color => keyframes`
  0% {
    box-shadow: 0 0 0 0 ${tinycolor(color).setAlpha(.7).toRgbString()};
  }
  70% {
      box-shadow: 0 0 0 30px ${tinycolor(color).setAlpha(0).toRgbString()};
  }
  100% {
      box-shadow: 0 0 0 0 ${tinycolor(color).setAlpha(0).toRgbString()};
}
`
export const rotate = () => keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`