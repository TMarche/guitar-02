import { Helpers } from "../helpers/helpers";
import { CircularList } from "./CircularList";

export class GuitarString {
    static buildString(openNote: string, fretCount: number) {
        const notes = new CircularList<string>(Helpers.NOTES);
        const startIdx = notes.items.findIndex(
            (note: string) => openNote.toLowerCase() === note
        );

        const vertices: LatticeNode<string>[] = [];
        const edges: LatticeEdge<string>[] = [];
        let currentNode: LatticeNode<string> | undefined;
        let prevNode: LatticeNode<string> | undefined;

        for (let i = 0; i < fretCount + 1; i++) {
            currentNode = new LatticeNode<string>(notes.get(startIdx + i));
            vertices.push(currentNode);
            if (currentNode !== undefined && prevNode !== undefined) {
                const currentEdge = new LatticeEdge(
                    prevNode,
                    currentNode,
                    1,
                    1
                );
                edges.push(currentEdge);
                prevNode.right = currentEdge;
                currentNode.left = currentEdge;
            }
            prevNode = currentNode;
        }

        return new LatticeGraph<string>(vertices, edges);
    }
}

export class LatticeGraph<T> {
    vertices: LatticeNode<T>[];
    edges: LatticeEdge<T>[];

    constructor(vertices: LatticeNode<T>[], edges: LatticeEdge<T>[]) {
        this.vertices = vertices;
        this.edges = edges;
    }
}

class LatticeNode<T> {
    value: T;
    up: LatticeEdge<T> | undefined;
    down: LatticeEdge<T> | undefined;
    left: LatticeEdge<T> | undefined;
    right: LatticeEdge<T> | undefined;

    constructor(
        value: T,
        up?: LatticeEdge<T>,
        down?: LatticeEdge<T>,
        left?: LatticeEdge<T>,
        right?: LatticeEdge<T>
    ) {
        this.value = value;
        this.up = up;
        this.down = down;
        this.left = left;
        this.right = right;
    }
}

class LatticeEdge<T> {
    a: LatticeNode<T>;
    b: LatticeNode<T>;
    tonalDistance: number;
    physicalDistance: number;

    constructor(
        a: LatticeNode<T>,
        b: LatticeNode<T>,
        tonalDistance: number,
        physicalDistance: number
    ) {
        this.a = a;
        this.b = b;
        this.tonalDistance = tonalDistance;
        this.physicalDistance = physicalDistance;
    }
}
