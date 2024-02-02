import { useState, useEffect, useRef, createRef } from "react";
import "./App.css";
import GameScreen from "./screens/game";
import MainScreen from "./screens/main";

function App() {
  const [start, setStart] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (start) {
      setTimeout(() => setOpacity(1), 0);
    }
  }, [start]);

  const secondArea = useRef<HTMLDivElement>(null);
  const [second, setSecond] = useState<
    {
      id: number;
      title: string;
    }[]
  >([]);
  const [boxes, setBoxes] = useState([
    {
      id: 1,
      title: "Box 1",
    },
    {
      id: 2,
      title: "Box 2",
    },
  ]);

  return (
    <div className="">
      {start ? (
        <div style={{ transition: "opacity 2s", opacity }}>
          <GameScreen />
        </div>
      ) : (
        <MainScreen onStart={() => setStart(true)} />
      )}

      {/* <div className="appstick w-full h-screen flex justify-between">
        <div className="w-20 h-20 bg-black flex justify-center items-center gap-2">
          {boxes.map((box, i) => (
            <div
              key={box.id}
              id={box.id.toString()}
              className="w-8 h-8 bg-purple-950"
              ref={boxRefs[i]}
              onClick={() => fly(boxRefs[i])}
            >
              {box.title}
            </div>
          ))}
        </div>
        <div
          className="w-32 h-32 bg-white flex justify-center items-center"
          ref={secondArea}
        >
          {second.map((box) => (
            <div key={box.id} className="w-8 h-8 bg-purple-950">
              {box.title}
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default App;

// const boxRefs = boxes.map(() => createRef<HTMLDivElement>());
// const fly = (ref: any): Promise<void> => {
//   const randIndex = Math.floor(Math.random() * boxes.length);
//   return new Promise((resolve) => {
//     let animationMovement = [
//       { transform: "translate(0,0)" },
//       {
//         transform: `translateX(${
//           secondArea.current?.getBoundingClientRect().x
//         }px)`,
//       },
//     ];
//     const flyAnimation =
//       ref.current &&
//       ref.current.animate(animationMovement, {
//         duration: 3000,
//         iterations: 1,
//       });
//     console.log("trie", ref);
//     if (flyAnimation) {
//       flyAnimation.onfinish = () => {
//         setSecond((prev) => [...prev, boxes[randIndex]]);
//         setBoxes((prev) =>
//           prev.filter((box) => box.id !== boxes[randIndex].id)
//         );
//         resolve();
//       };
//     } else {
//       resolve();
//     }
//   });
// };
