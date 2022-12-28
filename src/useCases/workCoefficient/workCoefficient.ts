class WorkCoefficient {
  calculateWorkCoefficient(shift: string, minSalary: number): number {
    if (shift != "morning" && shift != "afternoon" && shift != "nocturnal")
      throw new Error("Invalid shift");
    const morningCoefficient: number = 0.13;
    const afternoonCoefficient: number = 0.04;
    const nocturnalCoefficient: number = 0.08;
    const workerCoefficient = {
      morning: minSalary * morningCoefficient,
      afternoon: minSalary * afternoonCoefficient,
      nocturnal: minSalary * nocturnalCoefficient,
    }[shift];

    return Number(workerCoefficient.toFixed(2));
  }
}

export { WorkCoefficient };
