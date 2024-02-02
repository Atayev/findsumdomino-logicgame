type Props = {
  onStart: () => void;
};

const MainScreen = (props: Props) => {
  const handleStart = () => {
    props.onStart();
  };
  return (
    <div className="flex flex-col gap-40 justify-between items-center w-full min-h-full">
      <p className="text-6xl py-4 font-bold text-white">Find sum domino game</p>
      <div className=" p-12 border-white  shadow-2xl bg-orange-950 border-2 rounded-2xl flex  flex-col h-[360px] w-[33%]">
        <button
          onClick={handleStart}
          className="text-4xl font-semibold text-white"
        >
          New game
        </button>
      </div>
    </div>
  );
};

export default MainScreen;
