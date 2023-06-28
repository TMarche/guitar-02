import Controls from "./components/Controls";
import Guitar from "./components/Guitar";
import Note from "./components/Note";
import { GuitarString, LatticeGraph } from "./structures/LatticeGraph";
import { FretBoard } from "./structures/NodeGrid";

function App() {
    const fretBoard = FretBoard.buildFretboard(
        "E A D G B E".split(" ").reverse(),
        12
    );

    return (
        <div
            className="flex flex-col gap-20 h-screen w-screen justify-center items-center
            bg-gradient-to-br from-pink-300 via-blue-500 to-purple-900"
        >
            <h1 className="text-7xl text-white drop-shadow">
                Interactive Fretboard
            </h1>
            <Controls />
            <Guitar fretBoard={fretBoard} />
        </div>
    );
}

export default App;
