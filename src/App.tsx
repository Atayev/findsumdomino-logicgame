import { useState } from "react";
import "./App.css";
import PickBoard from "./components/PickBoard";
import TilesBoard from "./components/TilesBoard";
import { dominoTiles } from "./tiles";
import ExtractedBoard from "./components/ExtractedBoard";
import LeftBoard from "./components/LeftBoard";

function App() {
  const [pickedTiles, setPickedTiles] = useState<number[][]>([]);
  const [extractedTiles, setExtractedTiles] = useState<number[][]>([]);
  const [leftTiles, setLeftTiles] = useState<number[][]>([]);

  const handleExtractedTiles = (tiles: number[][]) => {
    setExtractedTiles((prevTiles) => [...prevTiles, ...tiles]);
  };
  const handlePickTile = (tile: number[]) => {
    setPickedTiles((prevTiles: number[][]) => [...prevTiles, tile]);
  };
  const handleLeftTiles = (tiles: number[][]) => {
    setLeftTiles((prevTiles) => [...prevTiles, ...tiles]);
  };

  console.log("left", leftTiles);
  return (
    <div className="grid grid-rows-2 grid-cols-2 gap-4">
      <TilesBoard
        dominoTiles={dominoTiles}
        onPickTile={handlePickTile}
        onExtractTiles={handleExtractedTiles}
        onLeftTiles={handleLeftTiles}
      />
      <PickBoard pickedTiles={pickedTiles} />
      <ExtractedBoard extractedTiles={extractedTiles} />
      <LeftBoard leftTiles={leftTiles} />
    </div>
  );
}

export default App;
