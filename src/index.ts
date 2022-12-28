import { Gratification } from "./useCases/gratification/gratification";
import { GrossSalary } from "./useCases/grossSalary/grossSalary";
import { MinSalary } from "./useCases/minSalary/minSalary";
import { TaxRate } from "./useCases/taxRate/taxRate";
import { WorkCoefficient } from "./useCases/workCoefficient/workCoefficient";
import { FoodAid } from "./useCases/foodAid/foodAid";
import { NetSalary } from "./useCases/netSalary/netSalary";

const employee = {
  role: "worker",
  shifts: ["morning", "afternoon"],
  workedHours: 40,
};

const minSalary: number = MinSalary.getRandomSalary(employee.role);

const workCoefficient = WorkCoefficient.calculateWorkCoefficient(
  employee.shifts
);

const grossSalary = GrossSalary.calculateGrossSalary(
  employee.workedHours,
  workCoefficient,
  minSalary
);

const tax = TaxRate.calculateTaxRate(employee.role, grossSalary);

const gratification = Gratification.getGratification(
  employee.shifts,
  employee.workedHours
);

const foodAid = FoodAid.calculateFoodAid(
  employee.role,
  workCoefficient,
  grossSalary
);

const netSalary = NetSalary.calculateNetSalary(
  grossSalary,
  tax,
  gratification,
  foodAid
);

const fullEmployee = Object.assign(employee, {
  minSalary: minSalary.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  }),
  workCoefficient: workCoefficient.toString().substring(2) + "%",
  grossSalary: grossSalary.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  }),
  tax: tax.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  }),
  gratification: gratification.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  }),
  foodAid: foodAid.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  }),
  netSalary: netSalary.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  }),
});

console.log(fullEmployee);

// .toLocaleString("pt-br", {
//   style: "currency",
//   currency: "BRL",
// })
