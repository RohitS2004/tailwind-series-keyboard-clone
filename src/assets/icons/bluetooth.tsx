import type { IIcon } from "../../types";

const Bluetooth = (props: IIcon) => {
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
      className="lucide lucide-bluetooth-icon lucide-bluetooth"
    >
      <path d="m7 7 10 10-5 5V2l5 5L7 17" />
    </svg>
  );
};

export default Bluetooth;
