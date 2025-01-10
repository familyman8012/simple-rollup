import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const Pic = ({ size, viewBoxSize, ...props }: Props) => (
  <svg
    css={css`
      ${props.customCss}
    `}
    xmlns="http://www.w3.org/2000/svg"
    width={size || 16}
    height={size || 16}
    fill="none"
    viewBox={`0 0 ${viewBoxSize || 24} ${viewBoxSize || 24}`}
  >
    <path
      fill="#747474"
      fillRule="evenodd"
      d="M8 10a1.5 1.5 0 1 0-.001-3.001A1.5 1.5 0 0 0 8 10Zm10 9H6.561l7.005-5.845c.246-.209.692-.208.933-.001L19 16.994V18a1 1 0 0 1-1 1ZM6 5h12a1 1 0 0 1 1 1v8.364l-3.203-2.732c-.99-.842-2.539-.842-3.52-.006L5 17.698V6a1 1 0 0 1 1-1Zm12-2H6C4.346 3 3 4.346 3 6v12c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Pic;
