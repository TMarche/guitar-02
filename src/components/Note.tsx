import { NoteNode } from "../structures/NodeGrid";

function NoteSpace({
    noteNode,
    stringIdx,
    noteIdx,
}: {
    stringIdx: number;
    noteIdx: number;
    noteNode: NoteNode;
}) {
    return (
        <div
            style={{ width: noteNode.width + 50, top: stringIdx * 50 - 20 }}
            className="relative flex flex-row justify-center"
        >
            <div
                className="absolute flex flex-row w-10 h-10 justify-center items-center rounded-full
                bg-white
                border-white border-2 hover:bg-blue-300 duration-300 hover:cursor-pointer"
            >
                <div>{noteNode.note}</div>
            </div>
        </div>
    );
}

export default NoteSpace;
