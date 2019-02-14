import state from "@/store/state.js";

describe("store state props", () => {
  it("should have usersInfo prop", () => {
    const actual = state.usersInfo;
    expect(actual).toEqual([]);
  });

  it("should have searchTerm prop", () => {
    const actual = state.searchTerm;
    expect(actual).toEqual("");
  });

  it("should have addedUserName prop", () => {
    const actual = state.addedUserName;
    expect(actual).toEqual(null);
  });

  it("should have addedDescription prop", () => {
    const actual = state.addedDescription;
    expect(actual).toEqual(null);
  });

  it("should have addedAmount prop", () => {
    const actual = state.addedAmount;
    expect(actual).toEqual(null);
  });

  it("should have addedId prop", () => {
    const actual = state.addedId;
    expect(actual).toEqual(null);
  });

  it("should have editedUserName prop", () => {
    const actual = state.editedUserName;
    expect(actual).toEqual(null);
  });

  it("should have editedDescription prop", () => {
    const actual = state.editedDescription;
    expect(actual).toEqual(null);
  });

  it("should have editedAmount prop", () => {
    const actual = state.editedAmount;
    expect(actual).toEqual(null);
  });

  it("should have id prop", () => {
    const actual = state.id;
    expect(actual).toEqual(null);
  });
});
