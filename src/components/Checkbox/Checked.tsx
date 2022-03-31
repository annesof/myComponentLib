import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1Zm3.96 6.906a.311.311 0 0 1-.433 0L2.582 4.961a.311.311 0 0 1 0-.434l.422-.422a.297.297 0 0 1 .422 0L4.75 5.418l2.813-2.813a.297.297 0 0 1 .421 0l.422.422a.311.311 0 0 1 0 .434L4.961 6.906Z'
    />
  </svg>
);

export default SvgComponent;
