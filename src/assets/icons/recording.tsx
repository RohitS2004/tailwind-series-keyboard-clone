import type { IIcon } from "../../types";

export const Recording = (props: IIcon) => {
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
      className="lucide lucide-disc-icon lucide-disc"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
};
