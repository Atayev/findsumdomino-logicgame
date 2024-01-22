import { useState } from "react";

type Props = {
  dominoTiles: number[][];
  onPickTile: (tile: number[]) => void;
  onExtractTiles: (tiles: number[][]) => void;
  onLeftTiles: (tiles: number[][]) => void;
};

const TilesBoard = ({
  dominoTiles,
  onPickTile,
  onExtractTiles,
  onLeftTiles,
}: Props) => {
  const [tiles, setTiles] = useState<number[][]>(dominoTiles);
  const pickTile = () => {
    if (tiles.length === 0) return alert("No more tiles to pick");

    const randomIndex = Math.floor(Math.random() * tiles.length);
    const pickedTile = tiles[randomIndex];

    // Remove the picked tile from dominoTilesCopy
    tiles.splice(randomIndex, 1);

    let tileValue = pickedTile[0] + pickedTile[1];
    let difference = 12 - tileValue;

    let extractedTiles: number[][] = [];
    let leftArray: number[][] = [];

    for (let i = 0; i < difference; i++) {
      if (tiles.length > 0) {
        const randIndex = Math.floor(Math.random() * tiles.length);
        extractedTiles.push(tiles.splice(randIndex, 1)[0]);
      } else {
        const randIndex = Math.floor(Math.random() * extractedTiles.length);
        leftArray.push(extractedTiles.splice(randIndex, 1)[0]);
      }
    }

    onPickTile(pickedTile);
    onExtractTiles(extractedTiles);
    onLeftTiles(leftArray);
  };
  return (
    <div className="border-white p-4 shadow-2xl bg-orange-950 border-2 rounded-2xl flex justify-between flex-col h-[340px] items-center">
      <>
        <p className="text-2xl font-bold text-slate-100 my-4">Tiles board</p>
        <div className={`flex flex-wrap gap-2`}>
          {tiles.map((item, index) => (
            <div
              key={index}
              className="max-h-[80px] w-10 flex flex-col justify-center border-2 bg-slate-200 rounded-xl  text-black font-bold text-xl shadow-2xl border-black blur-sm"
            >
              <div className="domino-tile__top">{item[0]}</div>
              <div className="bg-black h-[2px] w-full" />
              <div className="domino-tile__bottom">{item[1]}</div>
            </div>
          ))}
        </div>
      </>
      <button
        className="px-4 py-2 w-fit bg-slate-500 rounded-md shadow-2xl hover:bg-slate-400"
        onClick={pickTile}
      >
        Pick tile
      </button>
    </div>
  );
};

export default TilesBoard;
