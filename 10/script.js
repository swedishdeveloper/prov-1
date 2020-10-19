function test(numbers) {
    let newArray = [];
    for (i = 0; i < numbers.length; i++) {
        const result = numbers[i] / 3;
        if (result % 2 === 1) {
            newArray.push(numbers[i]);
        }
    }
    return newArray;
}