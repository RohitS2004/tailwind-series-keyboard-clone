import type { IIcon } from "../../types";

const ArrowRight = (props: IIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill={props.fill}
      stroke={props.stroke}
      strokeWidth={props.width}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevron-right-icon lucide-chevron-right"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
};

export default ArrowRight;
