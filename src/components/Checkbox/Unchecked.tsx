import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox='0 0 10 10'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect x={0.5} y={0.5} width={9} height={9} rx={0.5} />
  </svg>
);

export default SvgComponent;
