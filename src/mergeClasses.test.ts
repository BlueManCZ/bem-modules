import { mergeClasses } from "./mergeClasses";

it("mergeClasses", () => {
    expect(mergeClasses("1", "2")).toBe("1 2");
    expect(mergeClasses("1", undefined, "2")).toBe("1 2");
});
