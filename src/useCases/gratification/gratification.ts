class Gratification {
  static getGratification(shift: string[], workedHours: number): number {
    const shiftRequirement = shift.reduce((acc: number, shift: string) => {
      if (shift === "morning") acc++;
      return acc;
    }, 0);
    const hoursRequirements = workedHours >= 80 ? true : false;
    return shiftRequirement === 1 && hoursRequirements ? 1200.0 : 465.0;
  }
}

export { Gratification };
