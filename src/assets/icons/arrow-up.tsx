import type { IIcon } from "../../types";

const ArrowUp = (props: IIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill={props.fill}
      stroke={props.stroke}
      strokeWidth={props.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevron-up-icon lucide-chevron-up"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
};

export default ArrowUp;