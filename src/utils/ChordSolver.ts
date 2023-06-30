import { Helpers } from "../helpers/helpers";
import { NoteNode } from "../structures/NodeGrid";

interface Coords {
    r: number;
    c: number;
}

export interface NoteCoords {
    coords: Coords;
    note: string;
}

export const solveForMajorChord = (fretBoard: NoteNode[][], root: string) => {
    const roots: NoteCoords[] = [];
    const noteCoordPairs: NoteCoords[] = [];
    // Identify roots
    for (let r = 0; r < fretBoard.length; r++) {
        for (let c = 0; c < fretBoard[0].length; c++) {
            if (fretBoard[r][c].note.toLowerCase() === root.toLowerCase()) {
                roots.push({ coords: { r, c }, note: fretBoard[r][c].note });
            }
            noteCoordPairs.push({
                coords: { r, c },
                note: fretBoard[r][c].note,
            });
        }
    }

    // Get Major third -- four semitones -- must be on different string from root & fifth
    const potentialSolutions: NoteCoords[][] = [];
    for (const root of roots) {
        const nearestMajorThird = noteCoordPairs
            .filter((noteCoords) => root.coords.r !== noteCoords.coords.r)
            .filter(
                (noteCoords) =>
                    Helpers.NOTE_CIRCLE.forwardDistance(
                        root.note,
                        noteCoords.note
                    ) === 4
            )
            .reduce((a, b) =>
                distance2(a.coords, root.coords) <
                distance2(b.coords, root.coords)
                    ? a
                    : b
            );
        potentialSolutions.push([root, nearestMajorThird]);
    }

    // Get Perfect fifth -- seven semitones -- must be on different string from root & third
    const newPotentialSolutions: NoteCoords[][] = [];
    for (const potentialSolution of potentialSolutions) {
        const root = potentialSolution[0];
        const majorThird = potentialSolution[1];
        const nearestPerfectFifth = noteCoordPairs
            .filter(
                (noteCoords) =>
                    root.coords.r !== noteCoords.coords.r &&
                    majorThird.coords.r !== noteCoords.coords.r
            )
            .filter(
                (noteCoords) =>
                    Helpers.NOTE_CIRCLE.forwardDistance(
                        root.note,
                        noteCoords.note
                    ) === 7
            )
            .reduce((a, b) =>
                distance2(a.coords, root.coords) <
                distance2(b.coords, root.coords)
                    ? a
                    : b
            );
        newPotentialSolutions.push([root, majorThird, nearestPerfectFifth]);
    }

    return newPotentialSolutions;
};

/* Squared distance between coordinates */
const distance2 = (c1: Coords, c2: Coords) => {
    return Math.abs(c1.r - c2.r) ** 2 + Math.abs(c1.c - c2.c) ** 2;
};

export const areCoordsInList = (
    r: number,
    c: number,
    chordSolutions: NoteCoords[][]
) => {
    for (const noteChordPairs of chordSolutions) {
        for (const noteCoords of noteChordPairs) {
            if (r === noteCoords.coords.r && c == noteCoords.coords.c)
                return true;
        }
    }
    return false;
};
