import { useState } from "react";
import type { IKey } from "../types";
import { IconMapper } from "../utilities";

const Key = (props: IKey) => {
  switch (props.type) {
    case "alphabetical":
      // primaryText = Upper case alphabets
      return (
        <div className="bg-keycap border-background/20 active:border-background/30 text-background col-span-4 flex h-full w-full cursor-grab items-center justify-center rounded-lg border text-xs shadow-md transition-all duration-50 ease-in select-none active:border-2 active:text-[11px] active:font-bold">
          {props.primaryText}
        </div>
      );

    case "backspace":
      // primaryText = backspace
      return (
        <div className="bg-keycap border-background/20 active:border-background/30 text-background col-span-6 flex h-full w-full cursor-grab items-center justify-end rounded-lg border pr-2 text-xs shadow-md transition-all duration-50 ease-in select-none active:border-2 active:text-[11px] active:font-bold">
          {props.primaryText}
        </div>
      );

    case "tab":
      // primaryText = tab
      return (
        <div className="bg-keycap border-background/20 active:border-background/30 text-background col-span-4 flex h-full w-full cursor-grab items-center justify-start rounded-lg border pl-2 text-xs shadow-md transition-all duration-50 ease-in select-none active:border-2 active:text-[11px] active:font-bold">
          {props.primaryText}
        </div>
      );

    case "arrow":
      // icons = ["arrow_left"] || ["arrow_right"]
      const arrowType = props.icons![0];
      const arrowIconFunction = IconMapper().get(arrowType)!;
      const [width, setWidth] = useState<number>(24);
      const [height, setHeight] = useState<number>(24);
      const [strokeWidth, setStrokeWidth] = useState<number>(1);

      return (
        <div
          className="bg-keycap border-background/20 active:border-background/30 text-background col-span-4 flex h-full w-full cursor-grab items-center justify-center rounded-lg border text-xs shadow-md transition-all duration-50 ease-in select-none active:border-2 active:text-[11px]"
          onMouseDown={() => {
            setWidth(22);
            setHeight(22);
            setStrokeWidth(2);
          }}
          onMouseUp={() => {
            setWidth(24);
            setHeight(24);
            setStrokeWidth(1);
          }}
        >
          {arrowIconFunction({ strokeWidth, width, height })}
        </div>
      );
    case "arrow_group_vertical":
      return (
        <div className="bg-keycap border-background/20 active:border-background/30 text-background col-span-4 flex h-full w-full cursor-grab items-center justify-center rounded-lg border text-xs shadow-md transition-all duration-50 ease-in select-none active:border-2 active:text-[11px]"></div>
      );
  }
};

export default Key;
