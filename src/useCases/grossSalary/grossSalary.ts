import { Exceptions } from "../../errors/exceptions";

class GrossSalary {
  static calculateGrossSalary(
    workedHours: number,
    workCoefficient: number,
    minSalary: number
  ): number {
    if (workedHours <= 0 || workedHours > 720) throw new Exceptions("Invalid worked hours!");
    const grossSalary: number = workedHours * (workCoefficient * minSalary);
    return Number(grossSalary.toFixed(2));
  }
}

export { GrossSalary };
