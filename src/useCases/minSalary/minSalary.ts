import { Exceptions } from "../../errors/exceptions";
import { GetRandomNumber } from "../../utils/randomNumber/getRandomNumber";

class MinSalary {
  constructor() {}

  static getRandomSalary(role: string): number {
    if (role != "worker" && role != "manager")
      throw new Exceptions("Invalid role!");
    const randomNumber = new GetRandomNumber();
    const minSalary = {
      worker: randomNumber.execute(750, 2500),
      manager: randomNumber.execute(1400, 4600),
    }[role];

    //minSalary.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
    return minSalary;
  }
}

export { MinSalary };
