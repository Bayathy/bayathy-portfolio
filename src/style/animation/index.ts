import { keyframes } from '@emotion/react'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const popup = keyframes`
  from, 60%, 75%, to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 100px, 0);
  }

  75% {
    opacity: 0.5;
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`
