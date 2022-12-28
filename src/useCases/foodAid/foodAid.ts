class FoodAid {
  static calculateFoodAid(
    role: string,
    workCoefficient: number,
    grossSalary: number
  ) {
    return role === "worker" && workCoefficient >= 25
      ? grossSalary / 2
      : grossSalary / 3;
  }
}

export { FoodAid };
