import type { IIcon } from "../../types";

export const Tabs = (props: IIcon) => {
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
      className="lucide lucide-app-window-icon lucide-app-window"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M10 4v4" />
      <path d="M2 8h20" />
      <path d="M6 4v4" />
    </svg>
  );
};
