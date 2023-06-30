import { Helpers } from "../src/helpers/helpers";
import { expect, test } from "vitest";

test("Adjacent notes should have a forward distance of 1", () => {
    expect(Helpers.NOTE_CIRCLE.forwardDistance("a", "a#")).toBe(1);
    expect(Helpers.NOTE_CIRCLE.forwardDistance("a#", "b")).toBe(1);
    expect(Helpers.NOTE_CIRCLE.forwardDistance("b", "c")).toBe(1);
    expect(Helpers.NOTE_CIRCLE.forwardDistance("c", "c#")).toBe(1);
    expect(Helpers.NOTE_CIRCLE.forwardDistance("c#", "d")).toBe(1);
    expect(Helpers.NOTE_CIRCLE.forwardDistance("d", "d#")).toBe(1);
    expect(Helpers.NOTE_CIRCLE.forwardDistance("d#", "e")).toBe(1);
    expect(Helpers.NOTE_CIRCLE.forwardDistance("e", "f")).toBe(1);
    expect(Helpers.NOTE_CIRCLE.forwardDistance("f", "f#")).toBe(1);
    expect(Helpers.NOTE_CIRCLE.forwardDistance("f#", "g")).toBe(1);
    expect(Helpers.NOTE_CIRCLE.forwardDistance("g", "g#")).toBe(1);
    expect(Helpers.NOTE_CIRCLE.forwardDistance("g#", "a")).toBe(1);
});

test("Major thirds should have a forward distance of 4", () => {
    expect(Helpers.NOTE_CIRCLE.forwardDistance("c", "e")).toBe(4);
    expect(Helpers.NOTE_CIRCLE.forwardDistance("e", "g#")).toBe(4);
    expect(Helpers.NOTE_CIRCLE.forwardDistance("g#", "c")).toBe(4);
});

test("Perfect fifths should have a forward distance of 7", () => {
    expect(Helpers.NOTE_CIRCLE.forwardDistance("c", "g")).toBe(7);
    expect(Helpers.NOTE_CIRCLE.forwardDistance("g", "d")).toBe(7);
    expect(Helpers.NOTE_CIRCLE.forwardDistance("d", "a")).toBe(7);
});
