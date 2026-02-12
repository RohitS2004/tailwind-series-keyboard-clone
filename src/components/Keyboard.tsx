import { useEffect, useState } from "react";
import { HpIcon } from "../assets/icons";
import { PADDING } from "../constants";
import hpData from "../../hp-compact-350.json";
import type { IKey } from "../types";
import Key from "./Key";

const Keyboard = () => {
  const [keyMapping, setKeyMapping] = useState<[IKey[]] | null>(null);

  useEffect(() => {
    // @ts-ignore
    setKeyMapping(hpData.keyMapping);
  }, []);

  return (
    <div
      className={`bg-keyboard-background h-95 w-full rounded-2xl ${PADDING} flex flex-col gap-1`}
    >
      {/* <div className="flex items-center justify-center">
        <HpIcon
          fill="oklch(98.4% 0.003 247.858)"
          height={52}
          width={52}
          stroke="oklch(26.9% 0 0)"
          strokeWidth={1}
        />
      </div> */}

      <div className="grid-14 grid flex-1 grid-rows-6 gap-1 overflow-hidden">
        {keyMapping?.map((row: IKey[]) =>
          row.map((key: IKey, index: number) => (
            <Key
              key={index}
              type={key.type}
              primaryText={key.primaryText}
              secondaryText={key.secondaryText}
              icons={key.icons}
            />
          )),
        )}
      </div>
    </div>
  );
};

export default Keyboard;
