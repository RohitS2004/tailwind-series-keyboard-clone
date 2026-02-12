import { useState } from "react";
import type { MouseEvent } from "react";
import type { IKey } from "../types";
import { IconMapper } from "../utilities";

const Key = (props: IKey) => {
  const [iconWidth, setIconWidth] = useState<number>(24);
  const [iconHeight, setIconHeight] = useState<number>(24);
  const [iconStrokeWidth, setIconStrokeWidth] = useState<number>(1);

  const handleOnIconButtonMouseDown = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
  ) => {
    e.stopPropagation();
    setIconWidth(20);
    setIconHeight(20);
    setIconStrokeWidth(1.5);
  };

  const handleOnIconButtonMouseUp = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
  ) => {
    e.stopPropagation();
    setIconWidth(24);
    setIconHeight(24);
    setIconStrokeWidth(1);
  };

  switch (props.type) {
    case "alphabetical":
      // primaryText = Upper case alphabets
      return (
        <div className="bg-keycap border-background/20 active:border-background/30 text-background col-span-14 flex h-full w-full items-center justify-center rounded-lg border text-xs shadow-md transition-all duration-50 ease-in select-none active:border-2 active:text-[11px] active:font-semibold">
          {props.primaryText}
        </div>
      );

    case "backspace":
      // primaryText = backspace
      return (
        <div className="bg-keycap border-background/20 active:border-background/30 text-background col-span-17 flex h-full w-full items-center justify-end rounded-lg border pr-2 text-[10px] shadow-md transition-all duration-50 ease-in select-none active:border-2 active:text-[9px] active:font-semibold">
          {props.primaryText}
        </div>
      );

    case "tab":
      // primaryText = tab
      return (
        <div className="bg-keycap border-background/20 active:border-background/30 text-background col-span-14 flex h-full w-full items-center justify-start rounded-lg border pl-2 text-xs shadow-md transition-all duration-50 ease-in select-none active:border-2 active:text-[11px] active:font-semibold">
          {props.primaryText}
        </div>
      );

    case "arrow":
      // icons = ["arrow_left"] || ["arrow_right"]
      const arrowType = props.icons![0];
      const arrowIconFunction = IconMapper().get(arrowType)!;

      return (
        <div
          className="bg-keycap border-background/20 active:border-background/30 col-span-14 flex h-full w-full items-center justify-center rounded-lg border shadow-md transition-all duration-50 ease-in select-none active:border-2"
          onMouseDown={handleOnIconButtonMouseDown}
          onMouseUp={handleOnIconButtonMouseUp}
        >
          {arrowIconFunction({
            strokeWidth: iconStrokeWidth,
            width: iconWidth,
            height: iconHeight,
          })}
        </div>
      );

    case "arrow_group_vertical":
      // icons = ["arrow_up", "arrow_down"]
      const arrowUp = props.icons![0];
      const arrowDown = props.icons![1];
      const arrowUpFunction = IconMapper().get(arrowUp)!;
      const arrowDownFunction = IconMapper().get(arrowDown)!;

      const [firstWidth, setFirstWidth] = useState<number>(24);
      const [firstHeight, setFirstHeight] = useState<number>(24);
      const [firstStrokeWidth, setFirstStrokeWidth] = useState<number>(1);

      const [secondWidth, setSecondWidth] = useState<number>(24);
      const [secondHeight, setSecondHeight] = useState<number>(24);
      const [secondStrokeWidth, setSecondStrokeWidth] = useState<number>(1);

      const arrowGroupHandleOnIconButtonMouseDown = (
        e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
        value: "first" | "second",
      ) => {
        if (value === "first") {
          e.stopPropagation();
          setFirstWidth(20);
          setFirstHeight(20);
          setFirstStrokeWidth(1.5);
        } else {
          e.stopPropagation();
          setSecondWidth(20);
          setSecondHeight(20);
          setSecondStrokeWidth(1.5);
        }
      };

      const arrowGroupHandleOnIconButtonMouseUp = (
        e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
        value: "first" | "second",
      ) => {
        if (value === "first") {
          e.stopPropagation();
          setFirstWidth(24);
          setFirstHeight(24);
          setFirstStrokeWidth(1);
        } else {
          e.stopPropagation();
          setSecondWidth(24);
          setSecondHeight(24);
          setSecondStrokeWidth(1);
        }
      };

      return (
        <div
          className="col-span-14 flex h-full flex-col justify-between overflow-hidden rounded-lg shadow-md"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="bg-keycap border-background/20 active:border-background/30 flex h-[49%] w-full items-center justify-center rounded-t-lg border transition-all duration-50 ease-in select-none active:border-2"
            onMouseDown={(e) =>
              arrowGroupHandleOnIconButtonMouseDown(e, "first")
            }
            onMouseUp={(e) => arrowGroupHandleOnIconButtonMouseUp(e, "first")}
          >
            {arrowUpFunction({
              strokeWidth: firstStrokeWidth,
              width: firstWidth,
              height: firstHeight,
            })}
          </div>

          <div
            className="bg-keycap border-background/20 active:border-background/30 flex h-[49%] w-full items-center justify-center rounded-b-lg border transition-all duration-50 ease-in select-none active:border-2"
            onMouseDown={(e) =>
              arrowGroupHandleOnIconButtonMouseDown(e, "second")
            }
            onMouseUp={(e) => arrowGroupHandleOnIconButtonMouseUp(e, "second")}
          >
            {arrowDownFunction({
              strokeWidth: secondStrokeWidth,
              width: secondWidth,
              height: secondHeight,
            })}
          </div>
        </div>
      );

    case "capslock":
      // primaryText = caps lock
      return (
        <div className="bg-keycap border-background/20 active:border-background/30 text-background col-span-21 flex h-full w-full items-center justify-start rounded-lg border pl-2 text-xs shadow-md transition-all duration-50 ease-in select-none active:border-2 active:text-[11px] active:font-semibold">
          {props.primaryText}
        </div>
      );

    case "control":
      // primaryText = ctrl
      return (
        <div className="bg-keycap border-background/20 active:border-background/30 text-background col-span-14 flex h-full w-full items-center justify-start rounded-lg border pl-2 text-xs shadow-md transition-all duration-50 ease-in select-none active:border-2 active:text-[11px] active:font-semibold">
          {props.primaryText}
        </div>
      );

    case "delete":
      // primaryText = delete
      return (
        <div className="bg-keycap border-background/20 active:border-background/30 text-background col-span-14 flex h-full w-full items-center justify-center rounded-lg border text-xs shadow-md transition-all duration-50 ease-in select-none active:border-2 active:text-[11px] active:font-semibold">
          {props.primaryText}
        </div>
      );

    case "enter":
      // primaryText = enter
      return (
        <div className="bg-keycap border-background/20 active:border-background/30 text-background col-span-21 flex h-full w-full items-center justify-end rounded-lg border pr-2 text-xs shadow-md transition-all duration-50 ease-in select-none active:border-2 active:text-[11px] active:font-semibold">
          {props.primaryText}
        </div>
      );

    case "escape":
      // primaryText = esc
      return (
        <div className="bg-keycap border-background/20 active:border-background/30 text-background col-span-14 flex h-full w-full items-center justify-center rounded-lg border text-xs shadow-md transition-all duration-50 ease-in select-none active:border-2 active:text-[11px] active:font-semibold">
          {props.primaryText}
        </div>
      );

    case "single_function":
      // primaryText = fn
      return (
        <div className="bg-keycap border-background/20 active:border-background/30 text-background col-span-14 flex h-full w-full items-center justify-center rounded-lg border text-xs shadow-md transition-all duration-50 ease-in select-none active:border-2 active:text-[11px] active:font-semibold">
          {props.primaryText}
        </div>
      );

    case "shift":
      // primaryText = shift
      return (
        <div className="bg-keycap border-background/20 active:border-background/30 text-background col-span-28 flex h-full w-full items-center justify-end rounded-lg border pr-2 text-xs shadow-md transition-all duration-50 ease-in select-none active:border-2 active:text-[11px] active:font-semibold">
          {props.primaryText}
        </div>
      );

    case "shift_group":
      // primaryText = shift
      // secondaryText = fn
      // icons = ["lock"]

      const lock = props.icons![0];
      const lockFunction = IconMapper().get(lock)!;

      const [lockWidth, setLockWidth] = useState(8);
      const [lockHeight, setLockHeight] = useState<number>(8);
      const [lockStrokeWidth, setLockStrokeWidth] = useState<number>(2.5);

      const handleShiftGroupMouseDown = (
        e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
      ) => {
        setLockWidth(7);
        setLockHeight(7);
        setLockStrokeWidth(3.5);
      };

      const handleShiftGroupMouseUp = (
        e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
      ) => {
        setLockWidth(8);
        setLockHeight(8);
        setLockStrokeWidth(2.5);
      };

      return (
        <div
          className="bg-keycap border-background/20 active:border-background/30 text-background relative col-span-28 flex h-full w-full items-center justify-start rounded-lg border pl-2 text-xs shadow-md transition-all duration-50 ease-in select-none active:border-2 active:text-[11px] active:font-semibold"
          onMouseDown={(e) => handleShiftGroupMouseDown(e)}
          onMouseUp={(e) => handleShiftGroupMouseUp(e)}
        >
          <span>{props.primaryText}</span>
          <div className="absolute right-1 bottom-1 flex items-center justify-center gap-0.5">
            <span className="text-[9px] active:text-[7px]">
              {props.secondaryText}
            </span>
            {lockFunction({
              width: lockWidth,
              height: lockHeight,
              strokeWidth: lockStrokeWidth,
            })}
          </div>
        </div>
      );

    case "spacebar":
      return (
        <div className="bg-keycap border-background/20 active:border-background/30 col-span-70 h-full w-full rounded-lg border shadow-md transition-all duration-50 ease-in select-none active:border-2">
          {props.primaryText}
        </div>
      );

    case "special":
      // primaryText = some_special_character
      // secondaryText = some_special_character

      if (props.primaryText === "`") {
        return (
          <div className="bg-keycap border-background/20 active:border-background/30 text-background col-span-11 flex h-full w-full flex-col items-center justify-center rounded-lg border text-xs shadow-md transition-all duration-50 ease-in select-none active:border-2 active:text-[11px] active:font-semibold">
            <span>{props.secondaryText}</span>
            <span>{props.primaryText}</span>
          </div>
        );
      }
      return (
        <div className="bg-keycap border-background/20 active:border-background/30 text-background col-span-14 flex h-full w-full flex-col items-center justify-center rounded-lg border text-xs shadow-md transition-all duration-50 ease-in select-none active:border-2 active:text-[11px] active:font-semibold">
          <span>{props.secondaryText}</span>
          <span>{props.primaryText}</span>
        </div>
      );

    case "symbol_numeric":
      // primaryText = some_number
      // secondaryText = some_symbol
      return (
        <div className="bg-keycap border-background/20 active:border-background/30 text-background col-span-14 flex h-full w-full flex-col items-center justify-center rounded-lg border text-xs shadow-md transition-all duration-50 ease-in select-none active:border-2 active:text-[11px] active:font-semibold">
          <span>{props.secondaryText}</span>
          <span>{props.primaryText}</span>
        </div>
      );

    case "function":
      // primaryText = some_function_key
      // icons = []

      const icon = props.icons![0];
      const iconFunction = IconMapper().get(icon)!;

      const [functionIconWidth, setFunctionIconWidth] = useState<number>(19);
      const [functionIconHeight, setFunctionIconHeight] = useState<number>(19);
      const [functionIconStrokeWidth, setFunctionIconStrokeWidth] =
        useState<number>(1);

      const handleFunctionButtonMouseDown = (
        e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
      ) => {
        setFunctionIconWidth(17);
        setFunctionIconHeight(17);
        setFunctionIconStrokeWidth(1.5);
      };

      const handleFunctionButtonMouseUp = (
        e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
      ) => {
        setFunctionIconWidth(19);
        setFunctionIconHeight(19);
        setFunctionIconStrokeWidth(1);
      };

      return (
        <div
          className="bg-keycap border-background/20 active:border-background/30 text-background relative col-span-14 flex h-full w-full flex-col items-center justify-center rounded-lg border text-xs shadow-md transition-all duration-50 ease-in select-none active:border-2 active:text-[11px] active:font-semibold"
          onMouseDown={handleFunctionButtonMouseDown}
          onMouseUp={handleFunctionButtonMouseUp}
        >
          <span className="absolute top-0.5 left-0.5 text-[9px] active:text-[7px]">
            {props.primaryText}
          </span>
          {iconFunction({
            width: functionIconWidth,
            height: functionIconHeight,
            strokeWidth: functionIconStrokeWidth,
          })}
        </div>
      );

    case "group":
      // primaryText = some_special_character
      // secondaryText = some_special_character
      // icons = []

      // Two types of groups can be there:
      // 1. primaryText, secondaryText, icons = ["line"]
      // 2. primaryText, icons = ["windows", "recording", "line"]

      const [groupIconWidth, setGroupIconWidth] = useState<number>(19);
      const [groupIconHeight, setGroupIconHeight] = useState<number>(19);
      const [groupIconStrokeWidth, setGroupIconStrokeWidth] =
        useState<number>(1);

      const handleGroupButtonMouseDown = (
        e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
      ) => {
        setGroupIconWidth(17);
        setGroupIconHeight(17);
        setGroupIconStrokeWidth(1.5);
      };

      const handleGroupButtonMouseUp = (
        e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
      ) => {
        setGroupIconWidth(19);
        setGroupIconHeight(19);
        setGroupIconStrokeWidth(1);
      };

      if (
        props.primaryText &&
        props.secondaryText &&
        props.icons?.length === 1
      ) {
        const icon = props.icons[0];
        const iconFunction = IconMapper().get(icon)!;

        return (
          <div
            className="bg-keycap border-background/20 active:border-background/30 text-background relative col-span-14 flex h-full w-full flex-col items-center justify-center rounded-lg border text-xs shadow-md transition-all duration-50 ease-in select-none active:border-2 active:text-[11px] active:font-semibold"
            onMouseDown={handleGroupButtonMouseDown}
            onMouseUp={handleGroupButtonMouseUp}
          >
            <span className="absolute top-1.5 mx-auto">
              {props.primaryText}
            </span>
            {iconFunction({
              width: groupIconWidth,
              height: groupIconHeight,
              strokeWidth: groupIconStrokeWidth,
              barLength: 24,
            })}
            <span className="absolute bottom-1.5 mx-auto">
              {props.secondaryText}
            </span>
          </div>
        );
      } else {
        const windowsIcon = props.icons![0];
        const recordingIcon = props.icons![1];
        const lineIcon = props.icons![2];

        const windowIconFunction = IconMapper().get(windowsIcon)!;
        const recordingIconFunction = IconMapper().get(recordingIcon)!;
        const lineIconFunction = IconMapper().get(lineIcon)!;

        return (
          <div
            className="bg-keycap border-background/20 active:border-background/30 text-background relative col-span-14 flex h-full w-full flex-col items-center justify-center rounded-lg border text-xs shadow-md transition-all duration-50 ease-in select-none active:border-2 active:text-[11px] active:font-semibold"
            onMouseDown={handleGroupButtonMouseDown}
            onMouseUp={handleGroupButtonMouseUp}
          >
            <div className="absolute top-1.5 flex items-center gap-0.5">
              {windowIconFunction({
                width: groupIconWidth === 19 ? 15 : 14,
                height: groupIconHeight === 19 ? 15 : 14,
                strokeWidth: groupIconStrokeWidth + 0.5,
              })}

              {recordingIconFunction({
                width: groupIconWidth === 19 ? 15 : 14,
                height: groupIconHeight === 19 ? 15 : 14,
                strokeWidth: groupIconStrokeWidth + 0.5,
              })}
            </div>

            {lineIconFunction({
              width: groupIconWidth,
              height: groupIconHeight,
              strokeWidth: groupIconStrokeWidth,
              barLength: 24,
            })}

            <span className="absolute bottom-1.5 mx-auto">
              {props.primaryText}
            </span>
          </div>
        );
      }
  }
};

export default Key;

/**
 * globalThis provides a standardized way to access the gloabl object across different JavaScript environments (Browsers, NodeJS, Web Workers) eliminating the need for environment-specific syntax like window, global, or self
 */
