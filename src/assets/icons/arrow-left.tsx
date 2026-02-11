import type { IIcon } from "../../types";

export const ArrowLeft = (props: IIcon) => {
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
      className="lucide lucide-chevron-left-icon lucide-chevron-left"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
};
