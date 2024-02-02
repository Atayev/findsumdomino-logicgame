import { createRef, useRef, useState } from "react";
import Tile from "../Tile";

type Props = {
  isPicking?: boolean;
  dominoTiles: number[][];
  extractedTiles: number[][];
  onPickTile: (tile: number[]) => void;
  onExtractTiles: (tiles: number[][]) => void;
  onLeftTiles: (tiles: number[][]) => void;
  endPos: { x: number; y: number };
};

const TilesBoard = ({
  dominoTiles,
  extractedTiles,
  onPickTile,
  onExtractTiles,
  onLeftTiles,
  endPos,
}: Props) => {
  const [tiles] = useState<number[][]>(dominoTiles);

  const flyingTiles = tiles.map(() => createRef<HTMLDivElement>());
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const fly = (tile: any, index: number): Promise<void> => {
    return new Promise((resolve) => {
      let animationMovement = [
        {
          zIndex: 100,
          transform: "translate(0,0) scale(1.5)",
        },
        {
          transform: `translateX(${endPos.x}px) scale(1)`,
        },
      ];
      console.log(endPos);
      const flyAnimation =
        tile.current &&
        tile.current.animate(animationMovement, {
          duration: 3000,
          iterations: 1,
        });
      // Resolve the Promise when the animation completes

      if (flyAnimation) {
        flyAnimation.onfinish = () => {
          pickTile(index);
          resolve();
        };
      } else {
        // If there's no animation, resolve the Promise immediately
        resolve();
      }
    });
  };

  const pickTile = (index: number) => {
    if (tiles.length === 0) return alert("No more tiles to pick");

    const randomIndex = Math.floor(Math.random() * tiles.length);
    const pickedTile = tiles[index];

    // Remove the picked tile from dominoTilesCopy
    tiles.splice(index, 1);

    let tileValue = pickedTile[0] + pickedTile[1];
    let difference = 12 - tileValue;

    let extractedTilesArr: number[][] = [];
    let leftArray: number[][] = [];

    for (let i = 0; i < difference; i++) {
      if (tiles.length > 0) {
        const randIndex = Math.floor(Math.random() * tiles.length);
        extractedTilesArr.push(tiles.splice(randIndex, 1)[0]);
      } else {
        const randIndex = Math.floor(Math.random() * extractedTiles.length);
        leftArray.push(extractedTiles.splice(randIndex, 1)[0]);
      }
    }
    onPickTile(pickedTile);
    onExtractTiles(extractedTilesArr);
    onLeftTiles(leftArray);
  };
  return (
    <div className="border-white p-4 shadow-2xl bg-orange-950 border-2 rounded-2xl flex justify-between flex-col h-[340px] items-center">
      <>
        <p className="text-2xl font-bold text-slate-100 my-4">
          Tiles board ({tiles.length})
        </p>
        <div className={`flex flex-wrap gap-2 `}>
          {tiles.map((item, index) => (
            <Tile
              key={index}
              item={item}
              visible={visible}
              position={position}
              ref={flyingTiles[index]}
              onFly={() => fly(flyingTiles[index], index)}
            />
          ))}
        </div>
      </>
      <div className="flex gap-2">
        <button className="px-4 py-2 w-fit bg-slate-500 rounded-md shadow-2xl hover:bg-slate-400">
          Pick tile
        </button>
        <button
          className="px-4 py-2 w-fit bg-slate-500 rounded-md shadow-2xl hover:bg-slate-400"
          onClick={() => setVisible((prev) => !prev)}
        >
          Toggle visibility
        </button>
      </div>
    </div>
  );
};

export default TilesBoard;
