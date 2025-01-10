import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const Fire = ({ size, viewBoxSize, ...props }: Props) => (
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
      d="M7.495 9.517c-2.032 2.199-1.989 5.684.13 7.843a5.385 5.385 0 0 0 3.871 1.642h.005a5.41 5.41 0 0 0 3.885-1.642c2.156-2.197 2.152-5.772-.009-7.967L12.391 6.34c-.302 2.482-1.233 4.66-2.89 4.66-.509 0-1.337-.226-2.006-1.484Zm4.006 11.485h-.007a7.363 7.363 0 0 1-5.299-2.242c-2.914-2.97-2.918-7.804-.009-10.769l.983-.994a1 1 0 0 1 1.679.454c.23.89.504 1.326.655 1.492.355-.373.997-1.884.997-4.441 0-.147 0-.287-.008-.425a1.01 1.01 0 0 1 1.722-.773l4.59 4.688c2.92 2.965 2.925 7.798.01 10.768a7.392 7.392 0 0 1-5.313 2.241Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Fire;
