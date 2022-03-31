import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect rx={1} />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9 1H1v8h8V1ZM3 4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2H3Z'
    />
  </svg>
);

export default SvgComponent;
