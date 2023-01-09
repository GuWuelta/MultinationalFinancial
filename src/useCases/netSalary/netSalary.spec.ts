import { NetSalary } from "./netSalary";

describe("Net salary", () => {
  it("should return the calculated and return the net salary of employee", () => {
    const netSalary = NetSalary.calculateNetSalary(5000, 1200, 465, 2500);
    expect(netSalary).toEqual(5000 - 1200 + 465 + 2500);
  });
});
