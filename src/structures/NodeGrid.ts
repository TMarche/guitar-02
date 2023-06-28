import { Helpers } from "../helpers/helpers";
import { CircularList } from "./CircularList";

export class FretBoard {
    static buildFretboard(openNotes: string[], fretCount: number) {
        const fretBoard: NoteNode[][] = [];
        const noteCircle = new CircularList<string>(Helpers.NOTES);

        for (const openNote of openNotes) {
            const currentString: NoteNode[] = [];
            let currentPosition = (fretCount + 1) * 10;
            const startIdx = noteCircle.items.findIndex(
                (note: string) => openNote.toLowerCase() === note
            );

            // Build current string
            for (let i = 0; i < fretCount + 1; i++) {
                const currentNote = noteCircle.get(startIdx + i);

                currentString.push(new NoteNode(currentNote, currentPosition));
                currentPosition -= 10;
            }

            // Add string to fretboard
            fretBoard.push(currentString);
        }

        return fretBoard;
    }
}

export class NoteNode {
    position: number;
    note: string;

    constructor(note: string, position: number) {
        this.note = note;
        this.position = position;
    }
}
