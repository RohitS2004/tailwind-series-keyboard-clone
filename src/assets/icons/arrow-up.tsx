import type { IIcon } from "../../types";

export const ArrowUp = (props: IIcon) => {
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
      className="lucide lucide-chevron-up-icon lucide-chevron-up"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
};

