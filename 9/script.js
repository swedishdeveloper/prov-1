function arrayToUpperCase(names) {
    let newArray = [];
    for (i = 0; i < names.length; i++) {
        newArray.push(names[i].toUpperCase());
    }
    return newArray;
}