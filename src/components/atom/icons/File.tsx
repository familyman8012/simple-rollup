import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const File = ({ size, viewBoxSize, ...props }: Props) => (
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
      d="M12 14H9a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm-4 3a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm9.444 3H6.555C6.25 20 6 19.776 6 19.5v-15c0-.276.25-.5.555-.5H12v3.15C12 8.722 13.217 10 14.714 10H18v9.5c0 .276-.249.5-.556.5ZM14 4.978 16.742 8h-2.028C14.32 8 14 7.619 14 7.15V4.978Zm5.74 3.35-5.444-6a1 1 0 0 0-.74-.328h-7C5.145 2 4 3.122 4 4.5v15C4 20.878 5.146 22 6.555 22h10.89C18.852 22 20 20.878 20 19.5V9a1 1 0 0 0-.26-.672Z"
      clipRule="evenodd"
    />
  </svg>
);
export default File;
