/* Створити конвертер-функцію flat(mass), яка отримує на вхід масив виду:

 mass = [[1,2,3, [3.1]], 4, [5,6, [7, 8]]];
а на виході отримуємо перетворений масив: 

[1, 2, 3, 3.1, 4, 5 , 6, 7, 8] */

function flat(array) {
    let result = [];
    
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            result = result.concat(flat(array[i]));
        } else {
            result.push(array[i]);
        }   
    }
    return result;
}

const mass = [[1, 2, 3, [3.1]], 4, [5, 6, [7, 8]]];
const flatMass = flat(mass);
console.log(flatMass);
