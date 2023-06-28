import { NoteNode } from "../structures/NodeGrid";
import Note from "./Note";

function Guitar({ fretBoard }: { fretBoard: NoteNode[][] }) {
    return (
        <div
            style={{ height: (fretBoard.length - 1) * 50 }}
            className="relative flex flex-col"
        >
            {/* Nut */}
            <div
                style={{
                    width: 10,
                    left: fretBoard[0][0].width + 45,
                    height: `calc(100% + 10px)`,
                }}
                className="z-10 absolute -top-[5px] bg-white rounded-lg"
            ></div>
            {/* Board */}
            <div
                style={{
                    left: fretBoard[0][0].width + 50,
                    width: `calc(100% - ${fretBoard[0][0].width}px - 50px)`,
                }}
                className={`absolute h-full border-2 border-white rounded-lg
                    backdrop-blur drop-shadow bg-white bg-opacity-10`}
            ></div>
            {/* Frets */}
            {fretBoard[0].map((_, noteIdx) => {
                const cumulativeLeft = fretBoard[0]
                    .slice(1, noteIdx)
                    .map((x) => x.width + 50)
                    .reduce((x: number, y: number) => x + y, 0);
                return (
                    <div
                        style={{
                            left: fretBoard[0][0].width + 50 + cumulativeLeft,
                        }}
                        className="absolute top-0 w-[2px] h-full bg-white bg-opacity-50"
                    />
                );
            })}
            {fretBoard.map((guitarString, stringIdx) => (
                // Guitar String
                <div className="relative flex flex-row">
                    {/* Render individual strings */}
                    {stringIdx > 0 && stringIdx < fretBoard.length - 1 && (
                        <div
                            style={{
                                left: fretBoard[0][0].width + 50,
                                width: `calc(100% - ${fretBoard[0][0].width}px - 50px)`,
                                top: stringIdx * 50,
                            }}
                            className="absolute w-full h-[2px] bg-white top-0 left-0"
                        />
                    )}
                    {/* Note */}
                    {guitarString.map((noteNode, noteIdx) => (
                        <Note
                            stringIdx={stringIdx}
                            noteIdx={noteIdx}
                            noteNode={noteNode}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}
export default Guitar;
