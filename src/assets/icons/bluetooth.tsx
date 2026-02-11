import type { IIcon } from "../../types";

export const Bluetooth = (props: IIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
       width={props.width ?? 24}
      height={props.height ?? 24}
      viewBox="0 0 24 24"
      fill={props.fill ?? "none"}
      stroke={props.stroke ?? "oklch(26.9% 0 0)"}
      strokeWidth={props.strokeWidth ?? 2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-bluetooth-icon lucide-bluetooth"
    >
      <path d="m7 7 10 10-5 5V2l5 5L7 17" />
    </svg>
  );
};
