import type { IKey } from "../types";

const Key = (props: IKey) => {
  switch (props.type) {
    case "alphabetical":
      return (
        <div className="bg-keycap border-background/20 active:border-background/30 font-poppins col-span-2 flex h-full w-full cursor-grab items-center justify-center rounded-lg border text-xs shadow-md transition-all duration-50 ease-in select-none active:border-2 active:text-[10px]">
          {props.primaryText}
        </div>
      );

    case "backspace":
      return (
        <div className="bg-keycap border-background/20 active:border-background/30 font-poppins col-span-3 flex h-full w-full cursor-grab items-center justify-center rounded-lg border text-xs shadow-md transition-all duration-50 ease-in select-none active:border-2 active:text-[10px]">
          {props.primaryText}
        </div>
      );

    case "tab":
      return (
        <div className="bg-keycap border-background/20 active:border-background/30 font-poppins col-span-3 flex h-full w-full cursor-grab items-center justify-center rounded-lg border text-xs shadow-md transition-all duration-50 ease-in select-none active:border-2 active:text-[10px]">
          {props.primaryText}
        </div>
      );
  }
};

export default Key;
