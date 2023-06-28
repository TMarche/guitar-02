import Note from "./components/Note";
import { GuitarString, LatticeGraph } from "./structures/LatticeGraph";
import { FretBoard } from "./structures/NodeGrid";

function App() {
    // const guitarString = GuitarString.buildString("e", 22);
    // console.log(guitarString);

    // const renderGuitarStrings = (guitarStrings: LatticeGraph<string>) => {
    //     const elements = [];
    //     elements.push();
    // };

    const fretBoard = FretBoard.buildFretboard(
        "E A D G B E".split(" ").reverse(),
        12
    );

    return (
        <div
            className="flex flex-col h-screen w-screen justify-center items-center
            bg-gradient-to-br from-pink-300 via-blue-500 to-purple-900"
        >
            <div className="relative flex flex-col gap-2 backdrop-blur border-2 rounded-lg p-4 shadow-md">
                <div className="absolute h-full w-full bg-red-100 bg-opacity-20 top-0 left-0"></div>
                {fretBoard.map((guitarString) => (
                    <div className="relative flex flex-row opacity-[1]">
                        <div className="absolute -z-10 w-full h-[2px] bg-white top-[50%] left-0"></div>
                        {guitarString.map((noteNode, idx) => (
                            <Note idx={idx} noteNode={noteNode} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
