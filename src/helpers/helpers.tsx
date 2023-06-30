import { CircularList } from "../structures/CircularList";

export class Helpers {
    static NOTES = "a a# b c c# d d# e f f# g g#".split(" ");
    static NOTE_CIRCLE = new CircularList<string>(Helpers.NOTES);
}
