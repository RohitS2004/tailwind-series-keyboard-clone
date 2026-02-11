import type { IIcon } from "../../types";

const Tabs = (props: IIcon) => {
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
      className="lucide lucide-between-vertical-end-icon lucide-between-vertical-end"
    >
      <rect width="7" height="13" x="3" y="3" rx="1" />
      <path d="m9 22 3-3 3 3" />
      <rect width="7" height="13" x="14" y="3" rx="1" />
    </svg>
  );
};

export default Tabs;
