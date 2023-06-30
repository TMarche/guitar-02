import { useState } from "react";
import Controls from "./components/Controls";
import Guitar from "./components/Guitar";
import { FretBoard } from "./structures/NodeGrid";
import { solveForMajorChord } from "./utils/ChordSolver";
import ChordButtons from "./components/ChordButtons";

function App() {
    const fretBoard = FretBoard.buildFretboard(
        "E A D G B E".split(" ").reverse(),
        12
    );

    const chordSolutions = solveForMajorChord(fretBoard, "c").sort(
        (a, b) => a[0].coords.c - b[0].coords.c
    );
    const [selectedChordIndex, setSelectedChordIndex] = useState<number>(0);

    return (
        <div
            className="flex flex-col gap-20 -mt-20 min-h-[calc(100vh+80px)] w-screen justify-center items-center
            bg-gradient-to-br from-pink-300 via-blue-500 to-purple-900"
        >
            <h1 className="text-7xl text-white drop-shadow font-lobster">
                Interactive Fretboard
            </h1>
            <Controls />
            <Guitar
                fretBoard={fretBoard}
                chordSolutions={chordSolutions.filter(
                    (_, i) => i === selectedChordIndex
                )}
            />
            <ChordButtons
                chordSolutions={chordSolutions}
                selectedChordIndex={selectedChordIndex}
                setSelectedChordIndex={setSelectedChordIndex}
            />
        </div>
    );
}

export default App;
