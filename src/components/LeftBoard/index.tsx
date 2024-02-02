import Tile from "../Tile";

type Props = {
  leftTiles: number[][];
};

const LeftBoard = ({ leftTiles }: Props) => {
  return (
    <div className="border-white p-4 shadow-2xl bg-orange-950 border-2 rounded-2xl flex  flex-col h-[360px]">
      <p className="text-2xl font-bold text-slate-100 my-4">
        Left tiles board ({leftTiles.length})
      </p>
      <div className={`flex flex-wrap gap-4 `}>
        {leftTiles.map((item, index) => (
          <Tile item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default LeftBoard;
