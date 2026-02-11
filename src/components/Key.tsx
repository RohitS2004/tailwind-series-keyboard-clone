import type { IKey } from "../types";
import { IconMapper } from "../utilities";

const Key = (props: IKey) => {
  switch (props.type) {
    case "alphabetical":
      // primaryText = Upper case alphabets
      return (
        <div className="bg-keycap border-background/20 active:border-background/30 col-span-4 flex h-full w-full cursor-grab items-center justify-center rounded-lg border text-xs shadow-md transition-all duration-50 ease-in select-none active:border-2 active:text-[11px] text-background">
          {props.primaryText}
        </div>
      );

    case "backspace":
      // primaryText = backspace
      return (
        <div className="bg-keycap border-background/20 active:border-background/30 col-span-6 flex h-full w-full cursor-grab items-center justify-end rounded-lg border pr-2 text-xs shadow-md transition-all duration-50 ease-in select-none active:border-2 active:text-[11px] text-background">
          {props.primaryText}
        </div>
      );

    case "tab":
      // primaryText = tab
      return (
        <div className="bg-keycap border-background/20 active:border-background/30 col-span-4 flex h-full w-full cursor-grab items-center justify-start rounded-lg border pl-2 text-xs shadow-md transition-all duration-50 ease-in select-none active:border-2 active:text-[11px] text-background">
          {props.primaryText}
        </div>
      );

    case "arrow":
      // icons = ["arrow_left"] || ["arrow_right"]
      const arrowType = props.icons![0];
      return (
        <div className="bg-keycap border-background/20 active:border-background/30 col-span-4 flex h-full w-full cursor-grab items-center justify-center rounded-lg border text-xs shadow-md transition-all duration-50 ease-in select-none active:border-2 active:text-[11px] text-background">
          {
            IconMapper().get(arrowType)
          }
        </div>
      );
  }
};

export default Key;
