class GetRandomNumber {
  execute(min: number, max: number) {
    let number = Math.random() * (max - min) + min;
    return Number(number.toFixed(2));
  }
}

export { GetRandomNumber };
