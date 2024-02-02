import { useEffect, useRef, useState } from "react";
import Tile from "../Tile";

type Props = {
  pickedTiles: number[][];
  setPosition: (x: number, y: number) => void;
};

const PickBoard = ({ pickedTiles, setPosition }: Props) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      const { x, y } = ref.current.getBoundingClientRect();
      setPosition(x, y);
    }
  }, []);
  return (
    <div
      className="border-white p-4 shadow-2xl bg-orange-950 border-2 rounded-2xl flex justify-between flex-col h-[340px] items-center relative"
      ref={ref}
    >
      <p className="text-2xl font-bold text-slate-100 my-4">
        Pick board ({pickedTiles.length})
      </p>
      <div className={`flex flex-wrap gap-4 `}>
        {pickedTiles.map((item, index) => (
          <Tile item={item} key={index} visible={visible} />
        ))}
      </div>
      {pickedTiles.length > 0 && (
        <button
          onClick={() => setVisible((prev) => !prev)}
          className="px-4 py-2 w-fit bg-slate-500 rounded-md shadow-2xl hover:bg-slate-400"
        >
          Toggle visibility
        </button>
      )}
    </div>
  );
};

export default PickBoard;
