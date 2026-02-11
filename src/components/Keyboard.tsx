import { useEffect, useState } from "react";
import { HpIcon } from "../assets/icons";
import { PADDING } from "../constants";
import hpData from "../../hp-compact-350.json";
import type { IKey } from "../types";
import Key from "./Key";

const Keyboard = () => {
  const [keyMapping, setKeyMapping] = useState<[IKey[]] | null>(null);
  const [totalRows, setTotalRows] = useState<number>(0);

  useEffect(() => {
    // @ts-ignore
    setKeyMapping(hpData.keyMapping);
    setTotalRows(hpData.keyMapping!.length);
  }, []);

  return (
    <div
      className={`bg-keyboard-background h-112 w-full rounded-2xl ${PADDING} flex flex-col gap-1`}
    >
      <div className="flex items-center justify-center">
        <HpIcon
          fill="oklch(98.4% 0.003 247.858)"
          height={52}
          width={52}
          stroke="oklch(26.9% 0 0)"
          strokeWidth={1}
        />
      </div>

      <div className="grid-14 grid flex-1 grid-rows-6 gap-1">
        <Key 
        type="backspace"
        primaryText="backspace"
        />
        <Key 
        type="alphabetical"
        primaryText="B"
        />
        <Key 
        type="alphabetical"
        primaryText="A"
        />
        <Key 
        type="tab"
        primaryText="tab"
        />
        <Key 
        type="arrow"
        icons={["arrow_left"]}
        />
      </div>
    </div>
  );
};

export default Keyboard;
