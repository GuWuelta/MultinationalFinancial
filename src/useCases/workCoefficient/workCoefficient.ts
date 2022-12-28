type WorksCoefficient = Record<string, number>;

class WorkCoefficient {
  static calculateWorkCoefficient(shifts: string[]): number {
    const workerCoefficient: WorksCoefficient = {
      morning: 0.13,
      afternoon: 0.04,
      nocturnal: 0.08,
    };
    let coefficients: number = shifts.reduce(
      (acc, shift: string) => (acc += workerCoefficient[shift]),
      0
    );
    if (!coefficients) throw new Error("Invalid shift!");
    return coefficients;
  }
}

export { WorkCoefficient };
