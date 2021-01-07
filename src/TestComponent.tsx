import { css } from '@emotion/react';

export default function TestComponent() {
  return (
    <div css={
      css`
        background-color: red;
      `
    }>
      Test
    </div>
  )
}