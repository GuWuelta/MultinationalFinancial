import { MinSalary } from "./minSalary";

describe("Minimum salary", () => {
  it("should return the calculated and return the minimum salary of employee if is a 'worker'", () => {
    const minSalary = MinSalary.getRandomSalary("worker");
    expect(minSalary).toBeGreaterThanOrEqual(750);
    expect(minSalary).toBeLessThanOrEqual(2500);
  });

  it("should return the calculated and return the minimum salary of employee if is a 'manager'", () => {
    const minSalary = MinSalary.getRandomSalary("manager");
    expect(minSalary).toBeGreaterThanOrEqual(1400);
    expect(minSalary).toBeLessThanOrEqual(4600);
  });
});
