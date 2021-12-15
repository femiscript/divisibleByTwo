
function divisibleNum(arrNum) {
    let newArr = [];
    arrNum.forEach((arrayNumbers) => {
        if (arrayNumbers % 2 == 0 && arrayNumbers > 15) {
            newArr.push(arrayNumbers);
        }
    })
    console.log(newArr);
    console.log(newArr.length);
}
divisibleNum([10, 8, 23, 34, 60, 27, 78]);
divisibleNum([2, 3, 12, 18, 42, 24]);
divisibleNum([100, 84, 37]);
divisibleNum([5, 8, 6, 12]);
