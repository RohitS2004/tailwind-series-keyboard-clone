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
    <div className="bg-neutral-900 min-h-screen max-w-full">
      <Container>
        <Keyboard />
      </Container>
    </div>
  );
};

export default App;
