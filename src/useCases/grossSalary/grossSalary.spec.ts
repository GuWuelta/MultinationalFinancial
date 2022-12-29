import { GrossSalary } from "./grossSalary";

describe("Gross salary", () => {
  it("should return the calculated and return the gross salary of employee", () => {
    const grossSalary = GrossSalary.calculateGrossSalary(50, 17, 1200);
    expect(grossSalary).toEqual(50 * (17 * 1200));
  });
});
