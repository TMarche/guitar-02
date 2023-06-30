import { Helpers } from "../helpers/helpers";

export class FretBoard {
    static buildFretboard(openNotes: string[], fretCount: number) {
        const fretBoard: NoteNode[][] = [];

        for (const openNote of openNotes) {
            const currentString: NoteNode[] = [];
            let currentWidth = (fretCount + 1) * 10;
            const startIdx = Helpers.NOTE_CIRCLE.items.findIndex(
                (note: string) => openNote.toLowerCase() === note
            );

            // Build current string
            for (let i = 0; i < fretCount + 1; i++) {
                const currentNote = Helpers.NOTE_CIRCLE.get(startIdx + i);

                currentString.push(new NoteNode(currentNote, currentWidth));
                currentWidth -= 10;
            }

            // Add string to fretboard
            fretBoard.push(currentString);
        }

        return fretBoard;
    }
}

export class NoteNode {
    width: number;
    note: string;

    constructor(note: string, width: number) {
        this.note = note;
        this.width = width;
    }
}
