import React from "react";

type Props = {
  item: number[];
  visible?: boolean;
  picking?: boolean;
  position?: { left: number; top: number };
  onFly?: (tile: any) => void;
};
const Tile = React.forwardRef<HTMLDivElement, Props>(
  ({ item, visible, position, onFly }, ref) => {
    return (
      <div
        onClick={() => onFly && onFly(ref)}
        className={`tile-container z-50 ${visible ? "flipped" : ""}`}
        ref={ref}
        style={{
          left: `${position && position.left}px`,
          top: `${position && position.top}px`,
        }}
      >
        <div className="tile-side tile-front">
          <div className="max-h-[60px] w-10 flex flex-col justify-center border-2 bg-slate-200 rounded-xl  text-black font-bold  shadow-2xl border-black text-base">
            <p className="domino-tile__top">{item[0]}</p>
            <div className="bg-black h-[1px] w-full" />
            <p className="domino-tile__bottom">{item[1]}</p>
          </div>
        </div>
        <div className="tile-side tile-back max-h-[60px] w-10 border-black border-2 bg-slate-200 rounded-xl" />
      </div>
    );
  }
);

export default Tile;
