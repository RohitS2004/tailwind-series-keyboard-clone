import type { IIcon } from "../../types";

export const Line = (props: IIcon) => {
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
      className="lucide lucide-minus-icon lucide-minus"
    >
      <path d="M5 12h14" />
    </svg>
  );
};

