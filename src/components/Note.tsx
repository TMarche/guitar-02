import { NoteNode } from "../structures/NodeGrid";

function Note({ noteNode, idx }: { idx: number; noteNode: NoteNode }) {
    return (
        <div
            style={{ marginLeft: idx === 0 ? 0 : noteNode.position }}
            className="flex flex-row w-10 h-10 justify-center items-center bg-red-400 rounded-full
            border-white border-2 hover:bg-red-600 duration-300 hover:cursor-pointer"
        >
            <div>{noteNode.note}</div>
        </div>
    );
}

export default Note;
