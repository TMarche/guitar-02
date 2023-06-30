import { NoteCoords } from "../utils/ChordSolver";

function ChordButtons({
    chordSolutions,
    selectedChordIndex,
    setSelectedChordIndex,
}: {
    chordSolutions: NoteCoords[][];
    selectedChordIndex: number;
    setSelectedChordIndex: (x: number) => void;
}) {
    return (
        <div className="flex flex-row gap-8">
            {chordSolutions.map((_, i) => (
                <button
                    className={`flex flex-row w-10 h-10 justify-center items-center
                    border-2 border-white text-white bg-white rounded-lg
                    hover:bg-opacity-50 duration-300 ${
                        i === selectedChordIndex
                            ? "bg-opacity-70"
                            : "bg-opacity-20"
                    }
                `}
                    onClick={() => {
                        setSelectedChordIndex(i);
                    }}
                >
                    <div className="">{i + 1}</div>
                </button>
            ))}
        </div>
    );
}
export default ChordButtons;
