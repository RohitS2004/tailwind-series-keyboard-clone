import type { ReactNode } from "react";
import type { IIcon, TIcons } from "../types";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Bluetooth,
  BrightnessHigh,
  BrightnessLow,
  Emoji,
  HpIcon,
  Line,
  Lock,
  Microphone,
  Mute,
  PlayPause,
  Recording,
  Screenshot,
  Tabs,
  VolumeDown,
  VolumeUp,
  Windows,
} from "../assets/icons";

type CustomeReactNode = ReactNode & IIcon;

export const IconMapper = () => {
  const iconMap = new Map<TIcons, ReactNode>();

//   iconMap.set("arrow_down", ArrowDown());
};
