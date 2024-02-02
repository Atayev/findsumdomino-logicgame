import { useState } from "react";
import TilesBoard from "../../components/TilesBoard";
import { dominoTiles } from "../../tiles";
import PickBoard from "../../components/PickBoard";
import ExtractedBoard from "../../components/ExtractedBoard";
import LeftBoard from "../../components/LeftBoard";

const GameScreen = () => {
  const [pickedTiles, setPickedTiles] = useState<number[][]>([]);
  const [extractedTiles, setExtractedTiles] = useState<number[][]>([]);
  const [leftTiles, setLeftTiles] = useState<number[][]>([]);
  const [posEndBoard, setPosEndBoard] = useState({ x: 0, y: 0 });
  const handleExtractedTiles = (tiles: number[][]) => {
    setExtractedTiles((prevTiles) => [...prevTiles, ...tiles]);
  };
  const handlePickTile = (tile: number[]) => {
    setPickedTiles((prevTiles: number[][]) => [...prevTiles, tile]);
  };
  const handleLeftTiles = (tiles: number[][]) => {
    setLeftTiles((prevTiles) => [...prevTiles, ...tiles]);
  };
  return (
    <div className="grid grid-rows-2 grid-cols-2 gap-4 p-4">
      <TilesBoard
        dominoTiles={dominoTiles}
        endPos={posEndBoard}
        extractedTiles={extractedTiles}
        onPickTile={handlePickTile}
        onExtractTiles={handleExtractedTiles}
        onLeftTiles={handleLeftTiles}
      />
      <PickBoard
        pickedTiles={pickedTiles}
        setPosition={(x: number, y: number) => setPosEndBoard({ x, y })}
      />
      <ExtractedBoard extractedTiles={extractedTiles} />
      <LeftBoard leftTiles={leftTiles} />
    </div>
  );
};

export default GameScreen;
