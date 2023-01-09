class TaxRate {
  static calculateTaxRate(role: string, grossSalary: number): number {
    const worker_min_tax = 0.07;
    const worker_max_tax = 0.13;

    const manager_min_tax = 0.1;
    const manager_max_tax = 0.15;

    const taxRate = {
      worker:
        grossSalary > 945
          ? grossSalary * worker_max_tax
          : grossSalary * worker_min_tax,
      manager:
        grossSalary > 1520
          ? grossSalary * manager_max_tax
          : grossSalary * manager_min_tax,
    }[role];

    return Number(taxRate);
  }
}

export { TaxRate };
