import type { ReactNode } from "react";

type TKeys =
  | "alphabetical"
  | "arrow"
  | "arrow_group_vertical"
  | "backspace"
  | "capslock"
  | "control"
  | "delete"
  | "enter"
  | "escape"
  | "function"
  | "group"
  | "shift"
  | "spacebar"
  | "special"
  | "symbol_numeric"
  | "tab";

type TIcons =
  | "arrow_down"
  | "arrow_left"
  | "arrow_left"
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
  | "sound _low"
  | "windows";

export interface IContainer {
  children: ReactNode;
}

export interface IIcon {
  fill: string;
  width: number;
  height: number;
  strokeWidth: number;
  stroke: string;
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
