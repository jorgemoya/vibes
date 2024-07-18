import * as React from 'react'
import type { SVGProps } from 'react'

const Phone16 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    className="stroke-foreground"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.25 5C4.25 4.0335 5.0335 3.25 6 3.25H10C10.9665 3.25 11.75 4.0335 11.75 5V13.5C11.75 14.4665 10.9665 15.25 10 15.25H6C5.0335 15.25 4.25 14.4665 4.25 13.5V5Z"
      strokeWidth="1.5"
    />
    <path d="M7.25 12.75H8.75" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
)
export default Phone16
