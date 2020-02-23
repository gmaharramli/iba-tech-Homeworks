
function filterBy(arr,x) {
    let array = []
    for (let input of arr) {
        if (typeof input!=typeof x) {
            array.push(input);
        }
    }
    return array;
}

let enter = ['hello', true, 42, '23',9];
let type=8;
alert(filterBy(enter,type));