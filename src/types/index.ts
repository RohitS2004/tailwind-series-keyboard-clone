import type { ReactNode } from "react";

type TKeys =
  | "alphabetical" // alphabetical keys
  | "backspace" // backspace key
  | "tab" // tab key
  | "arrow" // arrow keys (left and right)
  | "arrow_group_vertical" // arrow keys group (up and donw)
  | "capslock" // capslock key
  | "control" // control key (individual)
  | "delete" // delete key
  | "enter" // enter key
  | "escape" // escape key
  | "single_function" // function key (on the last row)
  | "shift" // shift key (right side)
  | "shift_group" // shift group key
  | "spacebar"
  | "special" // special character keys
  | "symbol_numeric" // symbol and number keys
  | "function" // function keys
  | "group"; // grouped keys (on the last row, separated by a line in between)

export type TIcons =
  | "arrow_down"
  | "arrow_left"
  | "arrow_right"
  | "arrow_up"
  | "bluetooth"
  | "brightness_high"
  | "brightness_low"
  | "display"
  | "emoji"
  | "line"
  | "lock"
  | "microphone"
  | "mute"
  | "play_pause"
  | "recording"
  | "screen_capture"
  | "sound_high"
  | "sound_low"
  | "windows";

export interface IContainer {
  children: ReactNode;
}

export interface IIcon {
  fill?: string;
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
  barLength?: number;
}

export interface IKey {
  type: TKeys;
  primaryText?: string;
  secondaryText?: string;
  icons?: TIcons[];
}

export interface IKeyboardConfig {
  model: string;
  keyCount: number;
  keyMapping: [IKey[]];
}
