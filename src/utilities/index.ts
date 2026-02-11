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

export const IconMapper = () => {
  const iconMap = new Map<TIcons, (props: IIcon) => ReactNode>();

  // iconMap.set("arrow_down", ArrowDown({ strokeWidth: 1 }));
  iconMap.set("arrow_left", ArrowLeft);
  iconMap.set("arrow_right", ArrowRight);
  // iconMap.set("arrow_up", ArrowUp({ strokeWidth: 1 }));
  // iconMap.set("bluetooth", Bluetooth({}));
  // iconMap.set("brightness_high", BrightnessHigh({}));
  // iconMap.set("brightness_low", BrightnessLow({}));
  // iconMap.set("emoji", Emoji({}));
  // iconMap.set("line", Line({}));
  // iconMap.set("lock", Lock({}));
  // iconMap.set("microphone", Microphone({}));
  // iconMap.set("mute", Mute({}));
  // iconMap.set("play_pause", PlayPause({}));
  // iconMap.set("recording", Recording({}));
  // iconMap.set("screen_capture", Screenshot({}));
  // iconMap.set("display", Tabs({}));
  // iconMap.set("sound _low", VolumeDown({}));
  // iconMap.set("sound_high", VolumeUp({}));
  // iconMap.set("windows", Windows({}));

  return iconMap;
};
