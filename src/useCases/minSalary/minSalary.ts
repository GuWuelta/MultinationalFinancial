import { GetRandomNumber } from "../../utils/randomNumber/getRandomNumber";

class MinSalary {
  constructor() {}

  getRandomSalary(role: string): number {
    if (role != "worker" && role != "manager") throw new Error("Invalid role");
    const randomNumber = new GetRandomNumber();
    const minSalary = {
      worker: randomNumber.execute(750, 2500),
      manager: randomNumber.execute(1400, 4600),
    }[role];

    if (role != "worker" && role != "manager") throw new Error("Invalid role");
    //minSalary.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
    return minSalary;
  }
}

export { MinSalary };
