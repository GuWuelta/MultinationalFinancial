import { TaxRate } from "./taxRate";

describe("Workers Tax rate", () => {
  it("should return the calculated of tax if the worker salary is less than $945", () => {
    const taxRate = TaxRate.calculateTaxRate("worker", 900);
    const minimum_tax_worker = 0.07;
    expect(taxRate).toEqual(900 * minimum_tax_worker);
  });

  it("should return the calculated of tax if the worker salary is more than $945", () => {
    const taxRate = TaxRate.calculateTaxRate("worker", 1000);
    const maximum_tax_worker = 0.13;
    expect(taxRate).toEqual(1000 * maximum_tax_worker);
  });
});

describe("Managers Tax rate", () => {
    it("should return the calculated of tax if the manager salary is less than $1520", () => {
      const taxRate = TaxRate.calculateTaxRate("manager", 1500);
      const minimum_tax_manager = 0.1;
      expect(taxRate).toEqual(1500 * minimum_tax_manager);
    });
  
    it("should return the calculated of tax if the manager salary is more than $1520", () => {
      const taxRate = TaxRate.calculateTaxRate("manager", 3000);
      const maximum_tax_manager = 0.15;
      expect(taxRate).toEqual(3000 * maximum_tax_manager);
    });
  });
  
