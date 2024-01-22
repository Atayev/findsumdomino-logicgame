type Props = {
  extractedTiles: number[][];
};

const ExtractedBoard = ({ extractedTiles }: Props) => {
  return (
    <div className="border-white p-4 shadow-2xl bg-orange-950 border-2 rounded-2xl flex flex-col h-[360px]">
      <p className="text-2xl font-bold text-slate-100 my-4">Extracted board</p>
      <div className={`flex flex-wrap gap-4 `}>
        {extractedTiles.map((item) => (
          <div className="max-h-[100px] w-10 flex flex-col justify-center border-2 bg-slate-200 rounded-xl  text-black font-bold text-xl shadow-2xl border-black">
            <div className="domino-tile__top">{item[0]}</div>
            <div className="bg-black h-[2px] w-full" />
            <div className="domino-tile__bottom">{item[1]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtractedBoard;
