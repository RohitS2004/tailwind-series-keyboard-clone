import type { ReactNode } from "react";

type TKey = "alphabetical" | "numerical" | "functional" | "spacebar" | "enter" | "left_shift" | "right_shift" | "capslock" | "tab" | "backspace" | "arrow_left" | "arrow_right" | "arrow_up" | "arrow_down";

export interface IKey {
    type: TKey;
    text: string;
    secondText?: string;
    icon?: ReactNode
}