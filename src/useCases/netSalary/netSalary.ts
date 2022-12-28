class NetSalary {
  static calculateNetSalary(
    grossSalary: number,
    tax: number,
    gratification: number,
    foodAid: number
  ) {
    return grossSalary - tax + gratification + foodAid;
  }
}

export { NetSalary };
