import { GetRandomNumber } from "./getRandomNumber";

describe("Get random numbers", () => {
  it("should return a random number within the bounds of two numbers", () => {
    const getRandomNumber = new GetRandomNumber();
    const randomNumber = getRandomNumber.execute(1000, 2000);
    expect(randomNumber).toBeGreaterThanOrEqual(1000);
    expect(randomNumber).toBeLessThanOrEqual(2000);
  });
});
