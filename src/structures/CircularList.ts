export class CircularList<T> {
    items: T[];

    constructor(items: T[]) {
        this.items = items;
    }

    get(index: number) {
        return this.items[index % this.items.length];
    }

    minDistanceBetween(a: T, b: T) {
        const aIdx = this.items.findIndex((x) => x === a);
        const bIdx = this.items.findIndex((x) => x === b);

        const firstIdx = Math.min(aIdx, bIdx);
        const secondIdx = Math.max(aIdx, bIdx);

        // Ex:
        //   A  B  C  D  E  F
        //   A to E is either 4 or 2 depending on direction around circle
        return Math.min(
            secondIdx - firstIdx,
            this.items.length + firstIdx - secondIdx
        );
    }

    forwardDistance(a: T, b: T) {
        const aIdx = this.items.findIndex((x) => x === a);
        const bIdx = this.items.findIndex((x) => x === b);

        // Ex:
        //   A  B  C  D  E  F
        //   A to E is 4
        //   E to D is 5
        return bIdx - aIdx >= 0
            ? bIdx - aIdx
            : this.items.length - (aIdx - bIdx);
    }
}
