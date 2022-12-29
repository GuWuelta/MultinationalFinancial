import { FoodAid } from "./foodAid";

describe("foodAid", () => {
  it("should return the calculated food aid for employee and return the minimum aid possible", () => {
    const foodAid = FoodAid.calculateFoodAid("worker", 17, 8216.87);
    expect(foodAid).toEqual(8216.87 / 3);
  });

  it("should return the calculated food aid for employee and return the maximum aid possible", () => {
    const foodAid = FoodAid.calculateFoodAid("worker", 25, 8216.87);
    expect(foodAid).toEqual(8216.87 / 2);
  });
});
