export class CircularList<T> {
    items: T[];

    constructor(items: T[]) {
        this.items = items;
    }

    get(index: number) {
        return this.items[index % this.items.length];
    }
}
