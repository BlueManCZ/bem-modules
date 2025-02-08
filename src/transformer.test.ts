import { transformer } from "./transformer";

describe("BEM", () => {
    it("Transformer", () => {
        const styles = {
            a: "a#",
            "a--c": "a--c#",
            "a--c-d": "a--c-d#",
            "a--e-f": "a--e-f#",
            a__b: "a__b#",
            "a__b--c": "a__b--c#",
            "a__b--c-0": "a__b--c-0#",
            "a__b--c-1": "a__b--c-1#",
            "a__b--c-d": "a__b--c-d#",
            "a__b--e-f": "a__b--e-f#",
        };
        const bem = transformer(styles);
        for (const row of [
            [[], "a#"],
            [["b"], "a__b#"],
            [[{ c: undefined }], "a#"],
            [[{ c: false }], "a#"],
            [[{ c: true }], "a# a--c#"],
            [[{ c: "d" }], "a# a--c-d#"],
            [[{ c: "d", e: "f" }], "a# a--c-d# a--e-f#"],
            [["b", { c: true }], "a__b# a__b--c#"],
            [["b", { c: "d" }], "a__b# a__b--c-d#"],
            [["b", { c: 0 }], "a__b# a__b--c-0#"],
            [["b", { c: 1 }], "a__b# a__b--c-1#"],
            [["b", { c: "d", e: "f" }], "a__b# a__b--c-d# a__b--e-f#"],
        ] as [[classNameOrModifier: string | object, modifier: object], result: string][]) {
            expect(bem(row[0]?.[0], row[0]?.[1])).toBe(row[1]);
        }
    });
});
