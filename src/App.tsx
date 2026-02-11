import { Container, Keyboard } from "./components";
import hpData from "../hp-compact-350.json";
import { useEffect, useState } from "react";

const App = () => {
  const [model, setModel] = useState<string>();
  const [keyCount, setKeyCount] = useState<number>();

  useEffect(() => {
    setModel(hpData.model);
    setKeyCount(hpData.keyCount);
  }, []); 

  return (
    <div className="bg-background min-h-screen max-w-full">
      <Container>
        <div
          className={`tracking-tighter text-keycap/40 flex w-full justify-between px-2.5 font-semibold`}
        >
          <span>{model}</span>
          <span>{keyCount} keys</span>
        </div>
        <Keyboard />
      </Container>
    </div>
  );
};

export default App;
