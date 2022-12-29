import { WorkCoefficient } from "./workCoefficient";

describe("Work coefficients", () => {
  it("should return the calculated of coefficient for shift work 'morning'", () => {
    const coefficient = WorkCoefficient.calculateWorkCoefficient(["morning"]);
    expect(coefficient).toEqual(0.13);
  });

  it("should return the calculated of coefficient for shift work 'morning'", () => {
    const coefficient = WorkCoefficient.calculateWorkCoefficient(["afternoon"]);
    expect(coefficient).toEqual(0.04);
  });

  it("should return the calculated of coefficient for shift work 'morning'", () => {
    const coefficient = WorkCoefficient.calculateWorkCoefficient(["nocturnal"]);
    expect(coefficient).toEqual(0.08);
  });

  it("should return the calculated of coefficient for more than one shift work", () => {
    const coefficient = WorkCoefficient.calculateWorkCoefficient([
      "morning",
      "afternoon",
    ]);
    expect(coefficient).toEqual(0.17);
  });
});
