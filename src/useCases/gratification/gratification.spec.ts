import { Gratification } from "./gratification";

describe("Gratification", () => {
  it("should return the calculated gratification for employee and return the maximum gratification possible", () => {
    const gratification = Gratification.getGratification(["morning"], 80);
    expect(gratification).toEqual(1200.0);
  });

  it("should return the calculated gratification for employee and return the minimum gratification possible", () => {
    const gratification = Gratification.getGratification(["morning"], 40);
    expect(gratification).toEqual(465.0);
  });
});
