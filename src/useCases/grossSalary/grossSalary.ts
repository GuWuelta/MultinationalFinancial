class GrossSalary {
  static calculateGrossSalary(
    workedHours: number,
    workCoefficient: number,
    minSalary: number
  ): number {
    if (workedHours <= 0) throw new Error("Invalid worked hours!");
    const grossSalary: number = workedHours * (workCoefficient * minSalary);
    return Number(grossSalary.toFixed(2));
  }
}

export { GrossSalary };
